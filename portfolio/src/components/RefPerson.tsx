import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface PersonProps {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  id: number;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  bgTheme: boolean;
}

const RefWrap = styled.div<{ bgTheme: boolean }>`
  a {
    text-decoration: none;
    color: ${({ bgTheme }) => (bgTheme ? "#f2f2fc" : "#151515")};
  }

  .refperson {
    padding: 15px;
    display: flex;
    /* border: 2px solid var(--bg-black-50); */
    border-radius: 30px;
    margin: 30px;
    background-color: ${({ bgTheme }) => (bgTheme ? "black" : "white")};
    border: 2px solid ${({ bgTheme }) => (bgTheme ? "#393939" : "#e8dfec")};
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .refperson:hover {
    box-shadow: ${({ bgTheme }) =>
      bgTheme
        ? "0px 0px 20px 0px rgba(255, 255, 255, 1)"
        : "0px 0px 20px 0px rgba(34, 34, 34, 0.9)"};
    transform: translate(-2px, -2px);
  }

  .refperson p {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const RefPerson: React.FC<PersonProps> = ({
  gender,
  name,
  email,
  id,
  picture,
  bgTheme,
}) => {
  return (
    <>
      {bgTheme ? (
        <RefWrap bgTheme={true}>
          <Link to={`/focusref/${id}`}>
            <div className="refperson">
              {/* <p>Gender: {gender} </p> */}
              <img src={picture.thumbnail} alt="refperson" />
              <p>
                Name: {name.title} {name.first} {name.last}{" "}
              </p>
              {/* <p>Email: {email} </p> */}
              {/* <p>ID: {id} </p> */}
            </div>
          </Link>
        </RefWrap>
      ) : (
        <RefWrap bgTheme={false}>
          <Link to={`/focusref/${id}`}>
            <div className="refperson">
              {/* <p>Gender: {gender} </p> */}
              <img src={picture.thumbnail} alt="refperson" />
              <p>
                Name: {name.title} {name.first} {name.last}{" "}
              </p>
              {/* <p>Email: {email} </p> */}
              {/* <p>ID: {id} </p> */}
            </div>
          </Link>
        </RefWrap>
      )}
    </>
  );
};

export default RefPerson;
