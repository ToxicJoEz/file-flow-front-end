// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function Dashboard() {
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

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
      <div>
        <h2 className="bg-black text-white p-8 font-bold">Dashboard</h2>
        {error && <p className="text-red-500 p-4">{error}</p>}

        {profile ? (
          <div className="flex justify-center min-h-screen mt-14">
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
                        <polygon fill="#47297B" points="90 150 0 300 180 300" />
                        <polygon fill="#5D2689" points="90 150 180 0 0 0" />
                        <polygon fill="#5D2689" points="270 150 360 0 180 0" />
                        <polygon
                          fill="#8736AA"
                          points="450 150 360 300 540 300"
                        />
                        <polygon fill="#47297B" points="450 150 540 0 360 0" />
                        <polygon
                          fill="#8736AA"
                          points="630 150 540 300 720 300"
                        />
                        <polygon fill="#8736AA" points="630 150 720 0 540 0" />
                        <polygon
                          fill="#47297B"
                          points="810 150 720 300 900 300"
                        />
                        <polygon fill="#5D2689" points="810 150 900 0 720 0" />
                        <polygon
                          fill="#8736AA"
                          points="990 150 900 300 1080 300"
                        />
                        <polygon fill="#47297B" points="990 150 1080 0 900 0" />
                        <polygon fill="#8736AA" points="90 450 0 600 180 600" />
                        <polygon fill="#5D2689" points="90 450 180 300 0 300" />
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
                        <polygon fill="#47297B" points="90 750 0 900 180 900" />
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
                        <polygon fill="#47297B" points="180 0 90 150 270 150" />
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
                        <polygon fill="#47297B" points="0 300 -90 450 90 450" />
                        <polygon fill="#5D2689" points="0 300 90 150 -90 150" />
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
                        <polygon fill="#5D2689" points="0 600 -90 750 90 750" />
                        <polygon fill="#47297B" points="0 600 90 450 -90 450" />
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
                        <polygon fill="#8736AA" points="0 900 90 750 -90 750" />
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
                  <rect x={0} y={0} fill="url(#a)" width="100%" height="100%" />
                  <rect x={0} y={0} fill="url(#b)" width="100%" height="100%" />
                </svg>
              </div>
              <div className="card__avatar">
                <img
                  src={profile.avatar}
                  alt="User Avatar"
                  className="card__avatar-img"
                />
              </div>
              <div className="card__title">{profile.username}</div>
              <div className="card__subtitle">{profile.email}</div>
              <div className="card__wrapper mt-4">
                <Link className="card__btn" to="/EditProfile">
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        ) : (
          !error && (
            <div className="loading-indicator">
              <div className="loader" />
            </div>
          )
        )}
      </div>
    </PageWrapper>
  );
}
