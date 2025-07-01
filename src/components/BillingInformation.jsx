import React from "react";

export default function BillingInformation() {
  return (
    <div className="billing-section">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Card 1: Billing Summary */}
        <div className="col-span-2 card billing-summary">
          
          <h1>Billing Summary</h1>
          <p>
            <strong>Plan:</strong> Premium Plan
          </p>
          <p>
            <strong>Price:</strong> $19.99/month
          </p>
          <p>
            <strong>Next Invoice:</strong> July 22, 2025
          </p>
          <p>
            <strong>Status:</strong> <span className="status paid">Paid</span>
          </p>
        </div>

        {/* Card 2: Payment Method */}
        <div className="col-span-2 card payment-method">
          <h1>Payment Method</h1>
          <p>
            <strong>Card:</strong> **** **** **** 1234
          </p>
          <p>
            <strong>Expires:</strong> 04/27
          </p>
          <p>
            <strong>Name:</strong> Joe Wael
          </p>
          <button className="btn btn-secondary mt-2 hover:bg-black">Update Card Info.</button>
        </div>

        {/* Card 3: Billing History */}
        <div className="col-span-2 card billing-history">
          <h1>Billing History</h1>
          <ul className="history-list">
            <li>
              <span>May 22, 2025</span> - <span>$19.99</span> -
              <span className="paid">Paid</span>
            </li>
            <li>
              <span>April 22, 2025</span> - <span>$19.99</span> -
              <span className="paid">Paid</span>
            </li>
            <li>
              <span>March 22, 2025</span> - <span>$19.99</span> -
              <span className="paid">Paid</span>
            </li>
          </ul>
        </div>

        {/* Card 4: Invoices or Subscription Settings */}
        <div className="col-span-2 card subscription-settings">
          <h1>Subscription Settings</h1>
          <p>
            <strong>Renewal:</strong> Auto-renew enabled
          </p>
          <button className="btn btn-outline mt-2">Cancel Subscription</button>
          <button className="btn btn-outline mt-2">
            Download All Invoices
          </button>
        </div>
      </div>
    </div>
  );
}
