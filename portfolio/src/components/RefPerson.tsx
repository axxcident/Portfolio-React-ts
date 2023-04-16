import React from "react";

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

const RefPerson: React.FC<PersonProps> = ({
  gender,
  name,
  email,
  id,
  picture,
}) => {
  return (
    <>
      <div className="refperson">
        <h5>RefPerson</h5>
        <div>
          <p>Gender: {gender} </p>
          <p>
            Name: {name.title} {name.first} {name.last}{" "}
          </p>
          <p>Email: {email} </p>
          <p>ID: {id.value} </p>
          <img src={picture.thumbnail} alt="refperson" />
        </div>
      </div>
    </>
  );
};

export default RefPerson;
