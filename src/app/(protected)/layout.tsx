import React from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen bg-gray-100">{children}</div>;
};

export default ProtectedLayout;