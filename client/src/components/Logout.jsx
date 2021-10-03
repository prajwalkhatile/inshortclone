import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { userContext } from "../App";
import { userLogout } from "../services/api";

const Logout = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(userContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await userLogout();
        dispatch({ type: "USER", payload: false });

        if (response.status === 200) {
          alert(response.data);
          history.push("/login");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <></>;
};

export default Logout;
