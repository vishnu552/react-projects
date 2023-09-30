import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="bg-orange-200 text-gray-700 text-3xl text-center py-4">
      User : {userId}
    </div>
  );
}

export default User;
