import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RefPerson from "../components/RefPerson";

interface ReferralsProps {
  bgTheme: boolean;
}

interface UserData {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const ReferralsWrap = styled.div<{ bgTheme: boolean }>`
  .refperson-container {
    background-color: ${({ bgTheme }) => (bgTheme ? "#222222" : "white")};
    /* background-color: var(--bg-black-100); */
    border-radius: 10px;
    width: 95%;
    height: 70%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

const Referrals: React.FC<ReferralsProps> = ({ bgTheme }) => {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?inc=id,gender,name,email,picture&results=6"
        );
        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      {bgTheme ? (
        <ReferralsWrap bgTheme={true} className="referrals-page">
          <h2>Referrals</h2>
          <div className="refperson-container">
            {data.map((person) => (
              <RefPerson
                key={person.id.value}
                name={person.name}
                gender={person.gender}
                email={person.email}
                id={person.id}
                picture={person.picture}
                bgTheme={bgTheme}
              />
            ))}
          </div>
        </ReferralsWrap>
      ) : (
        <ReferralsWrap bgTheme={false} className="referrals-page">
          <h2>Referrals</h2>
          <div className="refperson-container">
            {data.map((person) => (
              <RefPerson
                key={person.id.value}
                name={person.name}
                gender={person.gender}
                email={person.email}
                id={person.id}
                picture={person.picture}
                bgTheme={bgTheme}
              />
            ))}
          </div>
        </ReferralsWrap>
      )}
    </>
  );
};

export default Referrals;
