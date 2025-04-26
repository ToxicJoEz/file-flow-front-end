import React from "react";
import PageWrapper from "../components/PageWrapper";

function Error() {
  return (
    <PageWrapper>
      <div className="text-center pt-32">
        <h1 className="text-3xl font-bold text-red-500">
          404 - Page Not Found
        </h1>
        <p className="mt-4">The page you’re looking for doesn’t exist.</p>
      </div>
    </PageWrapper>
  );
}

export default Error;
