import React, { useEffect, useState } from "react";
import { getUserData } from "../../services/api";

const UserWidget = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData("1").then(data => setUserData(data));
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.email}</p>
      {/* Add more user data fields as needed */}
    </div>
  );
};

export default UserWidget;
