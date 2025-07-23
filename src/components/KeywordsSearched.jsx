import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function KeywordsSearched() {
  const [loading, setLoading] = useState(true);
  const [searchLogs, setSearchLogs] = useState([]);

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    setLoading(true); // Start loader

    const fetchSearchLogs = async () => {
      try {
        const response = await axios.get(
          "https://main-fileflow-backend-production.up.railway.app/search-logs",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSearchLogs(response.data.logs);
      } catch (error) {
        console.error("❌ Error fetching search logs:", error);
      } finally {
        setLoading(false); // Stop loader
      }
    };

    fetchSearchLogs();
  }, [token]);

  const fileCounts = {
    pdf: 0,
    word: 0,
    excel: 0,
  };

  searchLogs.forEach((log) => {
    log.fileNames.forEach((file) => {
      const ext = file.split(".").pop().toLowerCase();
      if (ext === "pdf") fileCounts.pdf++;
      else if (ext === "docx" || ext === "doc") fileCounts.word++;
      else if (ext === "xlsx" || ext === "xls") fileCounts.excel++;
    });
  });

  const totalFiles = fileCounts.pdf + fileCounts.word + fileCounts.excel || 1; // avoid divide by 0

  const pdfPercentage = ((fileCounts.pdf / totalFiles) * 100).toFixed(0);
  const wordPercentage = ((fileCounts.word / totalFiles) * 100).toFixed(0);
  const excelPercentage = ((fileCounts.excel / totalFiles) * 100).toFixed(0);

  const chartData = [
    { name: "PDF", value: fileCounts.pdf },
    { name: "Word", value: fileCounts.word },
    { name: "Excel", value: fileCounts.excel },
  ];

  const COLORS = ["#D32F2F", "#1976D2", "#388E3C"];

  return (
    <div>
      <div className="grid grid-cols-1 2xl:grid-cols-6 gap-4">
        <div className="col-span-1 2xl:col-span-4 row-span-2 card card4 order-2 2xl:order-1">
          <h1>Keyword search history</h1>
          <div className="w-full overflow-x-auto p-6">
            {loading ? (
              <div className="loading-indicator">
                <div className="loader" />
              </div>
            ) : (
              <div>
                {!searchLogs.length && (
                  <div className="text-center text-gray-500">
                    No keyword searches yet.
                  </div>
                )}
                {[...searchLogs].reverse().map((log, groupIndex) => (
                  <div
                    key={log._id}
                    className={`w-full rounded-md p-2 ${
                      groupIndex % 2 === 0 ? "bg-gray-100" : ""
                    }`}
                  >
                    {log.fileNames.map((file, index) => {
                      const ext = file.split(".").pop().toLowerCase();

                      let iconClass = "file-icon";
                      if (ext === "pdf") iconClass += " pdf-icon";
                      else if (ext === "docx" || ext === "doc")
                        iconClass += " word-icon";
                      else if (ext === "xlsx" || ext === "xls")
                        iconClass += " excel-icon";
                      else iconClass += " default-icon";
                      return (
                        <div
                          key={`${log._id}-${file}-${index}`}
                          className="flex justify-start items-center flex-wrap w-full p-2 gap-4 Dashboard_Item"
                        >
                          <div className="flex items-center gap-2 flex-6">
                            <div className={iconClass}>{ext.toUpperCase()}</div>
                            <a href="#" className=" text-sm">
                              {file}
                            </a>
                          </div>

                          <a href="#" className="flex-2">
                            {log.keyword}
                          </a>
                          <h1 className="flex-1">{log.resultsCount}</h1>
                          <p className="time flex-4 ml-auto text-right">
                            Searched{" "}
                            {new Date(log.createdAt).toLocaleString([], {
                              dateStyle: "medium",
                              timeStyle: "short",
                            })}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-span-1 2xl:col-span-2 row-span-2 grid grid-cols-6 gap-4 order-1 2xl:order-2 ">
          <div className="col-span-3 2xl:col-span-6 card monthly_unlocks">
            <div className="flex justify-center items-center w-full p-2">
              <h1>Keywords searched status</h1>
            </div>
            <div className="w-full p-6 h-full grid grid-cols-6">
              <div className="flex flex-col justify-between h-full col-span-2">
                <div>
                  <h2>PDF documents</h2>
                  <p>{fileCounts.pdf}</p>
                  <span className="dot pdf"></span> {pdfPercentage}%
                </div>
                <div>
                  <h2>Word files</h2>
                  <p>{fileCounts.word}</p>
                  <span className="dot word"></span> {wordPercentage}%
                </div>
                <div>
                  <h2>Excel sheets</h2>
                  <p>{fileCounts.excel}</p>
                  <span className="dot excel"></span> {excelPercentage}%
                </div>
              </div>

              <div className="h-full col-span-4 flex justify-center items-center">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={chartData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={56}
                      outerRadius={80}
                      paddingAngle={4}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="col-span-3 2xl:col-span-6 card activity_unlocks overflow-auto">
            <h1>Recent activity</h1>
            <div className="activity-list">
              {loading ? (
                <div className="loading-indicator">
                  <div className="loader" />
                </div>
              ) : (
                <div>
                  {[...searchLogs]
                    .reverse()
                    .flatMap((log) =>
                      log.fileNames.map((file, i) => ({
                        file,
                        time: new Date(log.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        }),
                        key: `${log._id}-${file}-${i}`,
                      }))
                    )
                    .slice(0, 5) // Only show the latest 5 file entries total
                    .map(({ file, time, key }) => {
                      const truncatedFile =
                        file.length > 25 ? file.slice(0, 25) + "..." : file;

                      return (
                        <div key={key} className="activity-item mt-2">
                          <div className="flex justify-between w-full">
                            <p>Searched: {truncatedFile}</p>
                            <p className="time">{time}</p>
                          </div>
                          <a href="#">Jump to file</a>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
