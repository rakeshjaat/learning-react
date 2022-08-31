import React from "react";

const PortfolioSkeleton = () => {
  return (
    <>
      <div className="skeleton-card  p-3">
        <div className="skeleton-card-img skeleton"></div>
        <div className="skeleton-card-img-2 skeleton mt-3"></div>
        <div className="skeleton-card-img-3 skeleton mt-3"></div>
        <div className="skeleton-card-img-4 skeleton mt-3"></div>
      </div>
    </>
  );
};

export default PortfolioSkeleton;
