import React, { useState } from "react";

export default function FilesUnlocked() {
  const [showMore, setShowMore] = useState(false);
  const [hiding, setHiding] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setShowMore(true);
      setLoading(false);
    }, 2000); // 2 second delay to simulate loading
  };

  const handleHideMore = () => {
    setHiding(true);
    setTimeout(() => {
      setShowMore(false);
      setHiding(false);
    }, 1000); // 1 second delay to simulate loading
  };

  return (
    <div>
      <div className="grid grid-cols-1 2xl:grid-cols-6 gap-4">
        <div className="col-span-1 2xl:col-span-4 row-span-2 card card4 order-2 2xl:order-1"> 
          <h1>Files history</h1>
          <div className="w-full overflow-x-auto p-4">
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon word-icon">DOC</div>
              <a href="#">Employee_Handbook.docx</a>
              <p className="time">Created 8:47 AM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon pdf-icon">PDF</div>
              <a href="#">Marketing_Deck_2025.pdf</a>
              <p className="time">Created 9:02 AM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon excel-icon">XLS</div>
              <a href="#">Budget_Draft_Q4.xlsx</a>
              <p className="time">Created 10:15 AM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon pdf-icon">PDF</div>
              <a href="#">Legal_Disclaimer.pdf</a>
              <p className="time">Created 11:33 AM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon word-icon">DOC</div>
              <a href="#">Intern_Evaluation.doc</a>
              <p className="time">Created 1:10 PM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon excel-icon">XLS</div>
              <a href="#">Revenue_Projections_2026.xls</a>
              <p className="time">Created 1:44 PM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon pdf-icon">PDF</div>
              <a href="#">Terms_Update_v1.2.pdf</a>
              <p className="time">Created 2:01 PM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon word-icon">DOC</div>
              <a href="#">Workshop_Outline_March.docx</a>
              <p className="time">Created 2:58 PM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon excel-icon">XLS</div>
              <a href="#">Client_Tracking_Grid.xlsx</a>
              <p className="time">Created 3:37 PM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon pdf-icon">PDF</div>
              <a href="#">FAQ_Guide.pdf</a>
              <p className="time">Created 4:12 PM</p>
            </div>
            {loading && (
              <div className="loading-indicator">
                <div className="loader" />
              </div>
            )}

            {!showMore && !loading && (
              <div className="w-full flex justify-center py-4">
                <button
                  onClick={handleLoadMore}
                  className="text-blue-500 hover:text-blue-700 transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  Show more?
                </button>
              </div>
            )}
            {showMore && (
              <>
                <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
                  <div className="file-icon pdf-icon">PDF</div>
                  <a href="#">HR_Guidelines.pdf</a>
                  <p className="time">Created 4:31 PM</p>
                </div>
                <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
                  <div className="file-icon word-icon">DOC</div>
                  <a href="#">Board_Meeting_Minutes.docx</a>
                  <p className="time">Created 4:42 PM</p>
                </div>
                <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
                  <div className="file-icon excel-icon">XLS</div>
                  <a href="#">Inventory_Tracking.xlsx</a>
                  <p className="time">Created 5:01 PM</p>
                </div>
                <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
                  <div className="file-icon pdf-icon">PDF</div>
                  <a href="#">Security_Policy.pdf</a>
                  <p className="time">Created 5:20 PM</p>
                </div>
                <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
                  <div className="file-icon word-icon">DOC</div>
                  <a href="#">Staff_Roster.doc</a>
                  <p className="time">Created 5:39 PM</p>
                </div>
                <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
                  <div className="file-icon excel-icon">XLS</div>
                  <a href="#">KPI_Analysis.xls</a>
                  <p className="time">Created 5:57 PM</p>
                </div>
                {hiding && (
                  <div className="loading-indicator">
                    <div className="loader" />
                  </div>
                )}

                {showMore && !hiding && (
                  <div className="w-full flex justify-center py-4">
                    <button
                      onClick={handleHideMore}
                      className="text-red-500 hover:text-red-700 transform hover:scale-105 transition duration-300 ease-in-out"
                    >
                      Hide items?
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="col-span-1 2xl:col-span-2 row-span-2 grid grid-cols-6 gap-4 order-1 2xl:order-2 ">
          <div className="col-span-3 2xl:col-span-6 card monthly_unlocks">
            <div className="flex justify-center items-center w-full p-2">
              <h1>Files unlocekd status</h1>
            </div>
            <div className="w-full p-6 h-85 grid grid-cols-2">
              <div className="flex flex-col justify-between h-full col-span-1">
                <div>
                  <h2>This month</h2>
                  <p>69</p>
                  <span className="dot excel"></span> 25%
                </div>
                <div>
                  <h2>Last 6 months</h2>
                  <p>420</p>
                  <span className="dot word"></span> 35%
                </div>

                <div>
                  <h2>All time</h2>
                  <p>1137</p>
                  <span className="dot pdf"></span> 40%
                </div>
              </div>
              <div className="h-full col-span-1 flex justify-center">
                <div className="donut-chart">
                  <div className="legend">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 2xl:col-span-6 card activity_unlocks overflow-auto">
            <h1>Recant activity</h1>
            <div className="activity-list">
              <div className="activity-item">
                <div className="flex">
                  <p>Unlocked: Report_2023.pdf</p>
                  <p className="time"> 8:47 AM</p>
                </div>
                <a href="#">Jump to file</a>
              </div>
              <div className="activity-item">
                <div className="flex">
                  <p>Uploaded: HR_Handbook.docx</p>
                  <p className="time"> 8:54 AM</p>
                </div>
                <a href="#">Jump to file</a>
              </div>
              <div className="activity-item">
                <div className="flex">
                  <p>Viewed: Budget_Q2.xlsx</p>
                  <p className="time"> 9:07 AM</p>
                </div>
                <a href="#">Jump to file</a>
              </div>
              <div className="activity-item">
                <div className="flex">
                  <p>Unlocked: Client_Info.pdf</p>
                  <p className="time"> 9:16 AM</p>
                </div>
                <a href="#">Jump to file</a>
              </div>
              <div className="activity-item">
                <div className="flex">
                  <p>Unlocked: Testing_2023.pdf</p>
                  <p className="time"> 9:23 AM</p>
                </div>
                <a href="#">Jump to file</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
