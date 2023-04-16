import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserData } from "../models/types";

interface FocusRefProps {
  bgTheme: boolean;
}

const FocusRef: React.FC<FocusRefProps> = ({ bgTheme }) => {
  const { id } = useParams<{ id: string }>(); // extract id parameter from URL path

  // const userData = useSelector((state: RootState) => 1
  //   state.userData.find((user: UserData) => id)
  // );
  // const userData = useSelector((state: RootState) => 2
  //   state.userData.data.find((user: UserData) => user.id === Number(id))
  // );
  const userData = useSelector((state: RootState) => {
    console.log(state); // log the state of the store
    return state.userData.data.find(
      (user: UserData) => user.location.street.number * 12 === Number(id)
    );
  });

  return (
    <>
      <h5>sidan har laddats upp</h5>
      {userData && (
        <div>
          <img src={userData.picture.large} alt="refperson" />
          <p>
            namn: {userData.name.title} {userData.name.first}{" "}
            {userData.name.last}
          </p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </>
  );
};

export default FocusRef;
