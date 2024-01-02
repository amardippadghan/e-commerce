import React from "react";

const NotfoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold mb-4 text-red-600">404 Not Found</h2>
      <p className="text-lg text-gray-600">
        Sorry, the page you're looking for does not exist.
      </p>
      {/* You can add more content or design for the 404 page */}
    </div>
  );
};

export default NotfoundPage;
