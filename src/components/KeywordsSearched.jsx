import React, { useState } from "react";

export default function KeywordsSearched() {
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
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="col-span-4 row-span-2 card card4">
          <h1>Keyword search history</h1>
          <div className="w-full overflow-x-auto">
            <div className="flex justify-start items-center flex-wrap w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon word-icon ">DOC</div>
              <a href="#" className="flex-2">
                Employee_Handbook.docx
              </a>
              <a href="#" className="flex-1">
                Project
              </a>
              <h1 className="flex-1">26</h1>
              <p className="time flex-1">Searched 8:47 AM</p>
            </div>
            <div className="flex justify-start items-center flex-wrap w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon pdf-icon">PDF</div>
              <a href="#" className="flex-2">
                Marketing_Deck_2025.pdf
              </a>
              <a href="#" className="flex-1">
                Item
              </a>
              <h1 className="flex-1">12</h1>
              <p className="time flex-1">Searched 9:02 AM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon excel-icon">XLS</div>
              <a href="#" className="flex-2">
                Budget_Draft_Q4.xlsx
              </a>
              <a href="#" className="flex-1">
                Hear
              </a>
              <h1 className="flex-1">6</h1>
              <p className="time flex-1">Searched 10:15 AM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon pdf-icon">PDF</div>
              <a href="#" className="flex-2">
                Legal_Disclaimer.pdf
              </a>
              <a href="#" className="flex-1">
                Tesiting
              </a>
              <h1 className="flex-1">14</h1>
              <p className="time flex-1">Searched 11:33 AM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon word-icon">DOC</div>
              <a href="#" className="flex-2">
                Intern_Evaluation.doc
              </a>
              <a href="#" className="flex-1">
                Project
              </a>
              <h1 className="flex-1">64</h1>
              <p className="time flex-1">Searched 1:10 PM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon excel-icon">XLS</div>
              <a href="#" className="flex-2">
                Projections_2026.xls
              </a>
              <a href="#" className="flex-1">
                Class
              </a>
              <h1 className="flex-1">57</h1>
              <p className="time flex-1">Searched 1:44 PM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon pdf-icon">PDF</div>
              <a href="#" className="flex-2">
                Terms_Update_v1.2.pdf
              </a>
              <a href="#" className="flex-1">
                Phone
              </a>
              <h1 className="flex-1">17</h1>
              <p className="time flex-1">Searched 2:01 PM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon word-icon">DOC</div>
              <a href="#" className="flex-2">
                Workshop_Outline.docx
              </a>
              <a href="#" className="flex-1">
                Burgers
              </a>
              <h1 className="flex-1">4</h1>
              <p className="time flex-1">Searched 2:58 PM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon excel-icon">XLS</div>
              <a href="#" className="flex-2">
                Client_Tracking_Grid.xlsx
              </a>
              <a href="#" className="flex-1">
                Renovation
              </a>
              <h1 className="flex-1">13</h1>
              <p className="time flex-1">Searched 3:37 PM</p>
            </div>
            <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
              <div className="file-icon pdf-icon">PDF</div>
              <a href="#" className="flex-2">
                FAQ_Guide.pdf
              </a>
              <a href="#" className="flex-1">
                New
              </a>
              <h1 className="flex-1">45</h1>
              <p className="time flex-1">Searched 4:12 PM</p>
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
                  <a href="#" className="flex-2">
                    HR_Guidelines.pdf
                  </a>
                  <a href="#" className="flex-1">
                    Why
                  </a>
                  <h1 className="flex-1">16</h1>
                  <p className="time flex-1">Searched 4:31 PM</p>
                </div>
                <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
                  <div className="file-icon word-icon">DOC</div>
                  <a href="#" className="flex-2">
                    Board_Meeting_Minutes.docx
                  </a>
                  <a href="#" className="flex-1">
                    Computer
                  </a>
                  <h1 className="flex-1">17</h1>
                  <p className="time flex-1">Searched 4:42 PM</p>
                </div>
                <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
                  <div className="file-icon excel-icon">XLS</div>
                  <a href="#" className="flex-2">
                    Inventory_Tracking.xlsx
                  </a>
                  <a href="#" className="flex-1">
                    Playstation
                  </a>
                  <h1 className="flex-1">65</h1>
                  <p className="time flex-1">Searched 5:01 PM</p>
                </div>
                <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
                  <div className="file-icon pdf-icon">PDF</div>
                  <a href="#" className="flex-2">
                    Security_Policy.pdf
                  </a>
                  <a href="#" className="flex-1">
                    Xbox
                  </a>
                  <h1 className="flex-1">19</h1>
                  <p className="time flex-1">Searched 5:20 PM</p>
                </div>
                <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
                  <div className="file-icon word-icon">DOC</div>
                  <a href="#" className="flex-2">
                    Staff_Roster.doc
                  </a>
                  <a href="#" className="flex-1">
                    Switch
                  </a>
                  <h1 className="flex-1">11</h1>
                  <p className="time flex-1">Searched 5:39 PM</p>
                </div>
                <div className="flex justify-start items-center w-full p-2 gap-4 Dashboard_Item">
                  <div className="file-icon excel-icon">XLS</div>
                  <a href="#" className="flex-2">
                    KPI_Analysis.xls
                  </a>
                  <a href="#" className="flex-1">
                    PsP
                  </a>
                  <h1 className="flex-1">3</h1>
                  <p className="time flex-1">Searched 5:57 PM</p>
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
        <div className="col-span-2 card monthly_unlocks">
          <div className="flex justify-center items-center w-full p-2">
            <h1>Keywords searched status</h1>
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
        <div className="col-span-2 card activity_unlocks overflow-auto">
          <h1>Recant activity</h1>
          <div className="activity-list">
            <div className="activity-item">
              <div className="flex">
                <p>Searched: Report_2023.pdf</p>
                <p className="time"> 8:47 AM</p>
              </div>
              <a href="#">Jump to file</a>
            </div>
            <div className="activity-item">
              <div className="flex">
                <p>Searched: HR_Handbook.docx</p>
                <p className="time"> 8:54 AM</p>
              </div>
              <a href="#">Jump to file</a>
            </div>
            <div className="activity-item">
              <div className="flex">
                <p>Searched: Budget_Q2.xlsx</p>
                <p className="time"> 9:07 AM</p>
              </div>
              <a href="#">Jump to file</a>
            </div>
            <div className="activity-item">
              <div className="flex">
                <p>Searched: Client_Info.pdf</p>
                <p className="time"> 9:16 AM</p>
              </div>
              <a href="#">Jump to file</a>
            </div>
            <div className="activity-item">
              <div className="flex">
                <p>Searched: Testing_2023.pdf</p>
                <p className="time"> 9:23 AM</p>
              </div>
              <a href="#">Jump to file</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
