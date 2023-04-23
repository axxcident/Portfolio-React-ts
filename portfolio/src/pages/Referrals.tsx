import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RefPerson from "../components/RefPerson";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setUserData } from "../features/userData/userDataSlice";
import { UserData } from "../models/types";

interface ReferralsProps {
  bgTheme: boolean;
}

const ReferralsWrap = styled.div<{ bgTheme: boolean }>`
  h2 {
    margin: 10px auto;
  }

  .refperson-container {
    background-color: ${({ bgTheme }) => (bgTheme ? "#222222" : "white")};
    border-radius: 10px;
    width: 95%;
    height: 70%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 1000px) {
    .refperson-container {
      height: auto;
    }
  }
`;

const Referrals: React.FC<ReferralsProps> = ({ bgTheme }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://randomuser.me/api/?inc=id,gender,location,name,email,picture&results=6"
    )
      .then((response) => response.json())
      .then((jsonData) => {
        setIsLoading(false);
        dispatch(setUserData(jsonData.results));
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, [dispatch]);

  const userData = useSelector((state: RootState) => state.userData.data);

  return (
    <>
      {bgTheme ? (
        <ReferralsWrap bgTheme={true} className="referrals-page">
          <h2>Referrals</h2>
          <div className="refperson-container">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              userData.map((person: UserData) => (
                <RefPerson
                  key={person.location.street.number * 12}
                  name={person.name}
                  gender={person.gender}
                  email={person.email}
                  id={person.location.street.number * 12}
                  picture={person.picture}
                  bgTheme={bgTheme}
                />
              ))
            )}
          </div>
        </ReferralsWrap>
      ) : (
        <ReferralsWrap bgTheme={false} className="referrals-page">
          <h2>Referrals</h2>
          <div className="refperson-container">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              userData.map((person: UserData) => (
                <RefPerson
                  key={person.location.street.number * 12}
                  name={person.name}
                  gender={person.gender}
                  email={person.email}
                  id={person.location.street.number * 12}
                  picture={person.picture}
                  bgTheme={bgTheme}
                />
              ))
            )}
          </div>
        </ReferralsWrap>
      )}
    </>
  );
};

export default Referrals;
