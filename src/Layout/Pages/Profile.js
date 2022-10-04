import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import RandomUser from "../../Api/RandomUser";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

function Profile() {
  const dispatch = useDispatch();
  const setUser = (user) =>
    dispatch({ type: "UPDATE", payload: { user: user } });

  const { data, isLoading, isError, error } = useQuery(
    ["results"],
    () => RandomUser(),
    {
      enabled: true,
      staleTime: 5000,
      onSuccess: (success) => {
        console.log("Success, data has retrieved", success);
        setUser(data?.data?.results[0]);
      },
      onError: (err) => {
        console.log("Error", err);
      },
    }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error}</h1>;
  }

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
          src={data?.data?.results[0].picture["large"]}
          alt="profile_picture"
          style={{ width: "300px" }}
        />
        <h1>
          {data?.data?.results[0].name["first"]}{" "}
          {data?.data?.results[0].name["last"]}
        </h1>
        <h2>
          Country: {data?.data?.results[0].location["country"]} City:{" "}
          {data?.data?.results[0].location["city"]}
        </h2>
        <h2>
          Age: {data?.data?.results[0].dob["age"]} Phone:{" "}
          {data?.data?.results[0].phone}
        </h2>
      </Box>
      <Outlet />
    </>
  );
}

export default Profile;
