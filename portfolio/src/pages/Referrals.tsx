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

// interface UserData {
//   gender: string;
//   name: {
//     title: string;
//     first: string;
//     last: string;
//   };
//   location: {
//     street: {
//       number: number;
//       name: string;
//     };
//     city: string;
//     state: string;
//     country: string;
//     postcode: number;
//     coordinates: {
//       latitude: string;
//       longitude: string;
//     };
//   };
//   email: string;
//   id: {
//     name: string;
//     value: string;
//   };
//   picture: {
//     large: string;
//     medium: string;
//     thumbnail: string;
//   };
// }

const ReferralsWrap = styled.div<{ bgTheme: boolean }>`
  .refperson-container {
    background-color: ${({ bgTheme }) => (bgTheme ? "#222222" : "white")};
    border-radius: 10px;
    width: 95%;
    height: 70%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

const Referrals: React.FC<ReferralsProps> = ({ bgTheme }) => {
  // const [data, setData] = useState<UserData[]>([]);

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

  // useEffect(() => {
  //   setIsLoading(true);
  //   const fetchdata = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://randomuser.me/api/?inc=id,gender,location,name,email,picture&results=6"
  //       );
  //       const jsonData = await response.json();
  //       setIsLoading(false);
  //       dispatch(setUserData(jsonData.results));
  //       // setData(jsonData.results);
  //     } catch (error) {
  //       setIsLoading(false);
  //       console.log(error);
  //     }
  //   };
  //   // fetchdata();
  // }, [dispatch]);

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
          {/* <div className="refperson-container">
            {userData.map((person: UserData) => (
              <RefPerson
                key={person.location.street.number * 12}
                name={person.name}
                gender={person.gender}
                email={person.email}
                id={person.location.street.number * 12}
                picture={person.picture}
                bgTheme={bgTheme}
              />
            ))}
          </div> */}
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
          {/* <div className="refperson-container">
            {userData.map((person: UserData) => (
              <RefPerson
                key={person.location.street.number * 12}
                name={person.name}
                gender={person.gender}
                email={person.email}
                id={person.location.street.number * 12}
                picture={person.picture}
                bgTheme={bgTheme}
              />
            ))}
          </div> */}
        </ReferralsWrap>
      )}
    </>
  );
};

export default Referrals;
