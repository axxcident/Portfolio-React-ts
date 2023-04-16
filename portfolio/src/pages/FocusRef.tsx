import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserData } from "../models/types";
import styled from "styled-components";
import { GiMicrophone } from "react-icons/gi";

interface FocusRefProps {
  bgTheme: boolean;
}

const FocusWrap = styled.div<{ bgTheme: boolean }>`
  margin-left: 250px;
  width: 75%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .focus-page img {
    border-radius: 10px;
  }
  .question {
    width: 50vw;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .question p {
    font-size: 1.3rem;
  }
  #mikrofon {
    font-size: 7rem;
  }
`;

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
      {bgTheme ? (
        <FocusWrap bgTheme={true}>
          <div className="question">
            <GiMicrophone id="mikrofon" />
            <p>
              In a short sentence, how would you describe working with Axel in
              your latest project?
            </p>
          </div>
          {userData && (
            <div className="focus-page">
              <img src={userData.picture.large} alt="refperson" />
              <p>
                namn: {userData.name.title} {userData.name.first}{" "}
                {userData.name.last}
              </p>
              <p>Email: {userData.email}</p>
            </div>
          )}
        </FocusWrap>
      ) : (
        <FocusWrap bgTheme={false}>
          <div className="question">
            <GiMicrophone id="mikrofon" />
            <p>
              In a short sentence, how would you describe working with Axel in
              your latest project?
            </p>
          </div>
          {userData && (
            <div className="focus-page">
              <img src={userData.picture.large} alt="refperson" />
              <p>
                namn: {userData.name.title} {userData.name.first}{" "}
                {userData.name.last}
              </p>
              <p>Email: {userData.email}</p>
            </div>
          )}
        </FocusWrap>
      )}
    </>
  );
};

export default FocusRef;
