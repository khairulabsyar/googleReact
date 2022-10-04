import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RandomUser from "../../Api/RandomUser";
import { Box } from "@mui/material";

function Profile() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const setUser = (user) =>
    dispatch({ type: "UPDATE", payload: { user: user } });

  const fetchUser = async () => {
    const response = await RandomUser();
    if (response.data && response.status === 200) {
      setUser(response.data.results[0]);
    } else {
      alert("Error in calling the API");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: 1,
          borderRadius: 2,
          gap: 2,
        }}
      >
        <br />
        <img
          src={user.picture["large"]}
          alt="profile_picture"
          style={{ width: "300px" }}
        />
        <h1>
          {user.name["first"]} {user.name["last"]}
        </h1>
        <h2>
          Country: {user.location["country"]} City: {user.location["city"]}
        </h2>
        <h2>
          Age: {user.dob["age"]} Phone: {user.phone}
        </h2>
      </Box>
      <Outlet />
    </>
  );
}

export default Profile;
