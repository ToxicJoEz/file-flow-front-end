// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageWrapper from "../components/PageWrapper";
import NewsCarousel from "../components/NewsCarousel";
import LogoutButton from "../components/LogoutButton"; // Import the reusable component

export default function DashboardHome() {
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const isLoading = !profile && !error;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://main-fileflow-backend-production.up.railway.app/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data.user);
      } catch (err) {
        setError("Failed to fetch profile info.");
        console.error(err);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  return (
    <PageWrapper>
      {isLoading ? (
        <div className="loading-indicator">
          <div className="loader" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {error && <p className="text-red-500 p-4">{error}</p>}

          {profile && (
            <div className="flex justify-center col-span-3">
              <div className="card">
                <div className="card__img">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%">
                    <rect fill="#ffffff" width={540} height={450} />
                    <defs>
                      <linearGradient
                        id="a"
                        gradientUnits="userSpaceOnUse"
                        x1={0}
                        x2={0}
                        y1={0}
                        y2="100%"
                        gradientTransform="rotate(222,648,379)"
                      >
                        <stop offset={0} stopColor="#9E7BDE" />
                        <stop offset={1} stopColor="#9E7BDE" />
                      </linearGradient>
                      <pattern
                        patternUnits="userSpaceOnUse"
                        id="b"
                        width={300}
                        height={250}
                        x={0}
                        y={0}
                        viewBox="0 0 1080 900"
                      >
                        <g fillOpacity="0.6">
                          <polygon
                            fill="#47297B"
                            points="90 150 0 300 180 300"
                          />
                          <polygon fill="#5D2689" points="90 150 180 0 0 0" />
                          <polygon
                            fill="#5D2689"
                            points="270 150 360 0 180 0"
                          />
                          <polygon
                            fill="#8736AA"
                            points="450 150 360 300 540 300"
                          />
                          <polygon
                            fill="#47297B"
                            points="450 150 540 0 360 0"
                          />
                          <polygon
                            fill="#8736AA"
                            points="630 150 540 300 720 300"
                          />
                          <polygon
                            fill="#8736AA"
                            points="630 150 720 0 540 0"
                          />
                          <polygon
                            fill="#47297B"
                            points="810 150 720 300 900 300"
                          />
                          <polygon
                            fill="#5D2689"
                            points="810 150 900 0 720 0"
                          />
                          <polygon
                            fill="#8736AA"
                            points="990 150 900 300 1080 300"
                          />
                          <polygon
                            fill="#47297B"
                            points="990 150 1080 0 900 0"
                          />
                          <polygon
                            fill="#8736AA"
                            points="90 450 0 600 180 600"
                          />
                          <polygon
                            fill="#5D2689"
                            points="90 450 180 300 0 300"
                          />
                          <polygon
                            fill="#5D2689"
                            points="270 450 180 600 360 600"
                          />
                          <polygon
                            fill="#5D2689"
                            points="270 450 360 300 180 300"
                          />
                          <polygon
                            fill="#8736AA"
                            points="450 450 360 600 540 600"
                          />
                          <polygon
                            fill="#47297B"
                            points="450 450 540 300 360 300"
                          />
                          <polygon
                            fill="#47297B"
                            points="630 450 540 600 720 600"
                          />
                          <polygon
                            fill="#8736AA"
                            points="630 450 720 300 540 300"
                          />
                          <polygon
                            fill="#5D2689"
                            points="810 450 720 600 900 600"
                          />
                          <polygon
                            fill="#8736AA"
                            points="810 450 900 300 720 300"
                          />
                          <polygon
                            fill="#5D2689"
                            points="990 450 900 600 1080 600"
                          />
                          <polygon
                            fill="#47297B"
                            points="990 450 1080 300 900 300"
                          />
                          <polygon
                            fill="#47297B"
                            points="90 750 0 900 180 900"
                          />
                          <polygon
                            fill="#5D2689"
                            points="270 750 180 900 360 900"
                          />
                          <polygon
                            fill="#8736AA"
                            points="270 750 360 600 180 600"
                          />
                          <polygon
                            fill="#5D2689"
                            points="450 750 540 600 360 600"
                          />
                          <polygon
                            fill="#47297B"
                            points="630 750 540 900 720 900"
                          />
                          <polygon
                            fill="#47297B"
                            points="630 750 720 600 540 600"
                          />
                          <polygon
                            fill="#5D2689"
                            points="810 750 720 900 900 900"
                          />
                          <polygon
                            fill="#5D2689"
                            points="810 750 900 600 720 600"
                          />
                          <polygon
                            fill="#47297B"
                            points="990 750 900 900 1080 900"
                          />
                          <polygon
                            fill="#47297B"
                            points="180 0 90 150 270 150"
                          />
                          <polygon
                            fill="#47297B"
                            points="360 0 270 150 450 150"
                          />
                          <polygon
                            fill="#8736AA"
                            points="540 0 450 150 630 150"
                          />
                          <polygon
                            fill="#8736AA"
                            points="900 0 810 150 990 150"
                          />
                          <polygon
                            fill="#47297B"
                            points="0 300 -90 450 90 450"
                          />
                          <polygon
                            fill="#5D2689"
                            points="0 300 90 150 -90 150"
                          />
                          <polygon
                            fill="#8736AA"
                            points="180 300 90 450 270 450"
                          />
                          <polygon
                            fill="#47297B"
                            points="180 300 270 150 90 150"
                          />
                          <polygon
                            fill="#47297B"
                            points="360 300 270 450 450 450"
                          />
                          <polygon
                            fill="#8736AA"
                            points="360 300 450 150 270 150"
                          />
                          <polygon
                            fill="#47297B"
                            points="540 300 450 450 630 450"
                          />
                          <polygon
                            fill="#8736AA"
                            points="540 300 630 150 450 150"
                          />
                          <polygon
                            fill="#5D2689"
                            points="720 300 630 450 810 450"
                          />
                          <polygon
                            fill="#47297B"
                            points="720 300 810 150 630 150"
                          />
                          <polygon
                            fill="#5D2689"
                            points="900 300 810 450 990 450"
                          />
                          <polygon
                            fill="#8736AA"
                            points="900 300 990 150 810 150"
                          />
                          <polygon
                            fill="#5D2689"
                            points="0 600 -90 750 90 750"
                          />
                          <polygon
                            fill="#47297B"
                            points="0 600 90 450 -90 450"
                          />
                          <polygon
                            fill="#5D2689"
                            points="180 600 90 750 270 750"
                          />
                          <polygon
                            fill="#47297B"
                            points="180 600 270 450 90 450"
                          />
                          <polygon
                            fill="#47297B"
                            points="360 600 270 750 450 750"
                          />
                          <polygon
                            fill="#8736AA"
                            points="360 600 450 450 270 450"
                          />
                          <polygon
                            fill="#47297B"
                            points="540 600 630 450 450 450"
                          />
                          <polygon
                            fill="#8736AA"
                            points="720 600 630 750 810 750"
                          />
                          <polygon
                            fill="#5D2689"
                            points="900 600 810 750 990 750"
                          />
                          <polygon
                            fill="#47297B"
                            points="900 600 990 450 810 450"
                          />
                          <polygon
                            fill="#8736AA"
                            points="0 900 90 750 -90 750"
                          />
                          <polygon
                            fill="#47297B"
                            points="180 900 270 750 90 750"
                          />
                          <polygon
                            fill="#8736AA"
                            points="360 900 450 750 270 750"
                          />
                          <polygon
                            fill="#5D2689"
                            points="540 900 630 750 450 750"
                          />
                          <polygon
                            fill="#5D2689"
                            points="720 900 810 750 630 750"
                          />
                          <polygon
                            fill="#47297B"
                            points="900 900 990 750 810 750"
                          />
                          <polygon
                            fill="#47297B"
                            points="1080 300 990 450 1170 450"
                          />
                          <polygon
                            fill="#8736AA"
                            points="1080 300 1170 150 990 150"
                          />
                          <polygon
                            fill="#8736AA"
                            points="1080 600 990 750 1170 750"
                          />
                          <polygon
                            fill="#47297B"
                            points="1080 600 1170 450 990 450"
                          />
                          <polygon
                            fill="#8736AA"
                            points="1080 900 1170 750 990 750"
                          />
                        </g>
                      </pattern>
                    </defs>
                    <rect
                      x={0}
                      y={0}
                      fill="url(#a)"
                      width="100%"
                      height="100%"
                    />
                    <rect
                      x={0}
                      y={0}
                      fill="url(#b)"
                      width="100%"
                      height="100%"
                    />
                  </svg>
                </div>
                <div className="card__avatar">
                  <img
                    src={profile.avatar}
                    alt="User Avatar"
                    className="card__avatar-img"
                  />
                </div>
                <div className="card__title Profile__card__title">
                  {profile.username}
                </div>
                <div className="card__subtitle">{profile.email}</div>
                <div className="card__wrapper mt-4">
                  <LogoutButton />
                </div>
              </div>
            </div>
          )}
          <div className="col-span-">
            <div className="card card2">
              <h1 className="quick_access">Quick acces</h1>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full p-6">
                <div className="col-span-1 quick_access_item">
                  <FontAwesomeIcon icon="fa-solid fa-sack-dollar" size="2x" />
                </div>
                <div className="col-span-1 quick_access_item">
                  <FontAwesomeIcon
                    icon="fa-solid fa-unlock-keyhole"
                    size="2x"
                  />
                </div>
                <div className="col-span-1 quick_access_item">
                  <FontAwesomeIcon icon="fa-solid fa-search" size="2x" />
                </div>
                <div className="col-span-1 quick_access_item">
                  <FontAwesomeIcon icon="fa-solid fa-upload" size="2x" />
                </div>
                <div className="col-span-1 quick_access_item">
                  <FontAwesomeIcon icon="fa-solid fa-file" size="2x" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 grid grid-cols-1 gap-4">
              <div className="card card3 col-span-1 quick_info_card">
                <div className="quick_info_text">
                  <h1>Keywords searched</h1>
                  <p>420</p>
                </div>

                <div className="quick_info">
                  <FontAwesomeIcon icon="fa-solid fa-search" />
                </div>
              </div>
              <div className="card card3 col-span-1 quick_info_card">
                <div className="quick_info_text">
                  <h1>Files unlocked</h1>
                  <p>69</p>
                </div>
                <div className="quick_info">
                  <FontAwesomeIcon icon="fa-solid fa-unlock-keyhole" />
                </div>
              </div>
            </div>
            {/* Current plan card */}
            <div className="card card2 col-span-2">
              <FontAwesomeIcon
                icon="fa-solid fa-sack-dollar"
                size="3x"
                className="mt-4 text-[#47297b]"
              />
              <h1 className="card__title">
                Current plan:&nbsp;
                {profile?.plan?.name ?? "unable to get tier status"}
              </h1>

              {/* Show formatted date or fallback text */}
              <p>
                {profile?.planStartDate
                  ? `Starting Date: ${new Date(
                      profile.planStartDate
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}`
                  : "No date"}
              </p>

              {/* Show payment status */}
              <p>Status: {profile?.paymentStatus || "unknown"}</p>
            </div>
          </div>
          <div className="col-span-1 card">
            <h1 className="card__title">News</h1>
            <NewsCarousel />
          </div>
          <div className="col-span-2 card">
            <h1 className="card__title">Recent activity</h1>
            <div className="recent_activity_events">
              <div className="recent_activity_event">
                <div className="recent_activity_event_icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-search"
                    size="2x"
                    className="text-white"
                  />
                </div>
                <p>
                  This is an example of how a notification would be desplayed
                  for searched keywords.
                </p>
                <p className="recent_activity_event_time">12:55PM</p>
              </div>
              <div className="recent_activity_event">
                <div className="recent_activity_event_icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-search"
                    size="2x"
                    className="text-white"
                  />
                </div>
                <p>
                  This another simple example of how a notification would be
                  desplayed for searched keywords.
                </p>
                <p className="recent_activity_event_time">12:21PM</p>
              </div>
              <div className="recent_activity_event">
                <div className="recent_activity_event_icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-unlock-keyhole"
                    size="2x"
                    className="text-white"
                  />
                </div>
                <p>
                  and this is also an example of how a notification would be
                  desplayed for unlocked files.
                </p>
                <p className="recent_activity_event_time">1:50PM</p>
              </div>
              <div className="recent_activity_event">
                <div className="recent_activity_event_icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-sack-dollar"
                    size="2x"
                    className="text-white"
                  />
                </div>
                <p>
                  This is an example of how a notification would be desplayed
                  for a renewed subscription/new sunscription.
                </p>
                <p className="recent_activity_event_time">2:53PM</p>
              </div>
              <div className="recent_activity_event">
                <div className="recent_activity_event_icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-search"
                    size="2x"
                    className="text-white"
                  />
                </div>
                <p>
                  This another simple example of how a notification would be
                  desplayed for searched keywords.
                </p>
                <p className="recent_activity_event_time">3:59PM</p>
              </div>
              <div className="recent_activity_event">
                <div className="recent_activity_event_icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-unlock-keyhole"
                    size="2x"
                    className="text-white"
                  />
                </div>
                <p>
                  and this is also an example of how a notification would be
                  desplayed for unlocked files.
                </p>
                <p className="recent_activity_event_time">4:0PM</p>
              </div>
              <div className="recent_activity_event">
                <div className="recent_activity_event_icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-unlock-keyhole"
                    size="2x"
                    className="text-white"
                  />
                </div>
                <p>
                  and this is also an example of how a notification would be
                  desplayed for unlocked files.
                </p>
                <p className="recent_activity_event_time">12:55AM</p>
              </div>
              <div className="recent_activity_event">
                <div className="recent_activity_event_icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-search"
                    size="2x"
                    className="text-white"
                  />
                </div>
                <p>
                  This is an example of how a notification would be desplayed
                  for searched keywords.
                </p>
                <p className="recent_activity_event_time">5:51AM</p>
              </div>
              <div className="recent_activity_event">
                <div className="recent_activity_event_icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-search"
                    size="2x"
                    className="text-white"
                  />
                </div>
                <p>
                  This another simple example of how a notification would be
                  desplayed for searched keywords.
                </p>
                <p className="recent_activity_event_time">12:55PM</p>
              </div>
              <div className="recent_activity_event">
                <div className="recent_activity_event_icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-unlock-keyhole"
                    size="2x"
                    className="text-white"
                  />
                </div>
                <p>
                  and this is also an example of how a notification would be
                  desplayed for unlocked files.
                </p>
                <p className="recent_activity_event_time">9:25PM</p>
              </div>
              <div className="recent_activity_event">
                <div className="recent_activity_event_icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-sack-dollar"
                    size="2x"
                    className="text-white"
                  />
                </div>
                <p>
                  This is an example of how a notification would be desplayed
                  for a renewed subscription/new sunscription.
                </p>
                <p className="recent_activity_event_time">12:55PM</p>
              </div>
              <div className="recent_activity_event">
                <div className="recent_activity_event_icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-search"
                    size="2x"
                    className="text-white"
                  />
                </div>
                <p>
                  This another simple example of how a notification would be
                  desplayed for searched keywords.
                </p>
                <p className="recent_activity_event_time">3:5PM</p>
              </div>
              <div className="recent_activity_event">
                <div className="recent_activity_event_icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-unlock-keyhole"
                    size="2x"
                    className="text-white"
                  />
                </div>
                <p>
                  and this is also an example of how a notification would be
                  desplayed for unlocked files.
                </p>
                <p className="recent_activity_event_time">12:06PM</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
