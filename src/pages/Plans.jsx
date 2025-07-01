import React from "react";
import { useState, useRef } from "react";
import PageWrapper from "../components/PageWrapper";

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [fade, setFade] = useState(true);
  const detailsRef = useRef(null);

  const planDetails = {
    basic: {
      name: "Basic",
      price: "$5/month",
      features: [
        "Basic support included",
        "1 GB Storage",
        "No email integration",
      ],
    },
    pro: {
      name: "Pro",
      price: "$10/month",
      features: ["Priority support", "10 GB Storage", "Email integration"],
    },
    premium: {
      name: "Premium",
      price: "$15/month",
      features: [
        "24/7 Premium support",
        "Unlimited storage",
        "Team collaboration tools",
      ],
    },
  };

  const handleSelectPlan = (planKey) => {
    setFade(false); // fade out
    setTimeout(() => {
      setSelectedPlan(planKey); // update content
      setFade(true);
      detailsRef.current?.scrollIntoView({ behavior: "smooth" });
      // fade back in
    }, 200); // 200ms = match the fade-out duration
  };

  return (
    <PageWrapper>
      <div className="mt-32 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#47297B] mb-2">
          Plans & Pricing
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Choose the plan that suits your needs. You can always scale up later.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[75%] mx-auto">
          {/* Basic Plan */}
          <div
            className={`plan-card ${selectedPlan === "basic" ? "active" : ""}`}
          >
            <div className="plan-header">
              <h3 className="plan-title">Basic Plan</h3>
              <p className="plan-price">$5</p>
              <p className="plan-period">per month</p>
            </div>
            <div className="plan-body">
              <ul>
                <li>✅ Basic support included</li>
                <li>✅ 1 GB Storage</li>
                <li>❌ Email integration</li>
              </ul>
              <button onClick={() => handleSelectPlan("basic")} className="fancy-button-alt w-full">
                View details
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div
            className={`plan-card ${selectedPlan === "pro" ? "active" : ""}`}
          >
            <div className="plan-header">
              <h3 className="plan-title">Pro Plan</h3>
              <p className="plan-price">$10</p>
              <p className="plan-period">per month</p>
            </div>
            <div className="plan-body">
              <ul>
                <li>✅ Priority support</li>
                <li>✅ 10 GB Storage</li>
                <li>✅ Email integration</li>
              </ul>
              <button onClick={() => handleSelectPlan("pro")} className="fancy-button-alt w-full">
                View details
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div
            className={`plan-card ${
              selectedPlan === "premium" ? "active" : ""
            }`}
          >
            <div className="plan-header">
              <h3 className="plan-title">Premium Plan</h3>
              <p className="plan-price">$15</p>
              <p className="plan-period">per month</p>
            </div>
            <div className="plan-body">
              <ul>
                <li>✅ 24/7 Premium support</li>
                <li>✅ Unlimited storage</li>
                <li>✅ Team collaboration tools</li>
              </ul>
              <button onClick={() => handleSelectPlan("premium")} className="fancy-button-alt w-full">
                View details
              </button>
            </div>
          </div>
        </div>

        <div ref={detailsRef} className="w-[75%] mx-auto mt-12">
          <div className="plan-details">
            <div className="plan-details-title">
              Plan Details
              <p className="plan-details-text">
                <span className="plan-details-name">
                  {planDetails[selectedPlan].name}
                </span>{" "}
                plan for {planDetails[selectedPlan].price}
              </p>
            </div>

            <div
              className={`transition-opacity duration-300 ease-in-out ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <ul>
                {planDetails[selectedPlan].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="fancy-button-alt">Join plan !</button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
