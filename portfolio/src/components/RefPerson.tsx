import React from "react";
import styled from "styled-components";

interface PersonProps {
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

const RefWrap = styled.div<{ bgTheme: boolean }>`
  .refperson {
    padding: 15px;
    display: flex;
    border: 2px solid var(--bg-black-50);
    border-radius: 30px;
    margin: 30px;
    background-color: ${({ bgTheme }) => (bgTheme ? "#393939" : "white")};
    cursor: pointer;
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
  }
`;

const RefPerson: React.FC<PersonProps> = ({
  gender,
  name,
  email,
  id,
  picture,
}) => {
  return (
    <>
      <RefWrap bgTheme={false}>
        <div className="refperson">
          {/* <p>Gender: {gender} </p> */}
          <img src={picture.thumbnail} alt="refperson" />
          <p>
            Name: {name.title} {name.first} {name.last}{" "}
          </p>
          {/* <p>Email: {email} </p> */}
          {/* <p>ID: {id.value} </p> */}
        </div>
      </RefWrap>
    </>
  );
};

export default RefPerson;
