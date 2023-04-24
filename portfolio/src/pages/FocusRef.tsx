import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserData } from "../models/types";
import styled from "styled-components";
import { GiMicrophone } from "react-icons/gi";

interface FocusRefProps {
  bgTheme: boolean;
}

interface Quote {
  citat: string;
}

const FocusWrap = styled.div<{ bgTheme: boolean }>`
  margin-left: 250px;
  width: 75%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 700px) {
    margin-left: 0;
    width: 100%;
  }

  .focus-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .focus-page * {
    margin-bottom: 10px;
    text-align: center;
  }

  .focus-quote {
    margin-bottom: 40px;
    font-size: 1rem;
  }

  .focus-page img {
    height: auto;
    width: 250px;
    border-radius: 10px;
  }

  .focus-contact {
    font-size: 1rem;
  }

  #citatet {
    font-style: italic;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 2rem;
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

  @media only screen and (max-width: 400px) {
    .question p {
      font-size: 1rem;
    }
  }
`;

const FocusRef: React.FC<FocusRefProps> = ({ bgTheme }) => {
  const [citat, setCitat] = useState<Quote[]>([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://api.mockaroo.com/api/6bab4200?count=2&key=d04bfc30"
        );
        const jsonData = await response.json();
        setCitat(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  const quote = citat.length > 0 ? citat[index] : null;
  // const quote = citat[index];

  const { id } = useParams<{ id: string }>(); // extract id parameter from URL path

  // const userData = useSelector((state: RootState) => 1
  //   state.userData.find((user: UserData) => id)
  // );
  // const userData = useSelector((state: RootState) => 2
  //   state.userData.data.find((user: UserData) => user.id === Number(id))
  // );
  const userData = useSelector((state: RootState) => {
    // console.log(state); // log the state of the store
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
              <p className="focus-quote">
                "I would probably frame our latest project like so: <br />{" "}
                <span id="citatet">{quote?.citat}</span>"
              </p>
              <p className="focus-contact">
                Name: {userData.name.title} {userData.name.first}{" "}
                {userData.name.last}
              </p>
              <p className="focus-contact">Email: {userData.email}</p>
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
              <p className="focus-quote">
                "I would probably frame our latest project like so: <br />{" "}
                <span id="citatet">{quote?.citat}</span>"
              </p>
              <p className="focus-contact">
                Name: {userData.name.title} {userData.name.first}{" "}
                {userData.name.last}
              </p>
              <p className="focus-contact">Email: {userData.email}</p>
            </div>
          )}
        </FocusWrap>
      )}
    </>
  );
};

export default FocusRef;
