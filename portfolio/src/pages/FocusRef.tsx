import React from "react";
import { useParams } from "react-router-dom";

interface PersonProps {
  gender?: string;
  name?: {
    title: string;
    first: string;
    last: string;
  };
  email?: string;
  id?: number;
  picture?: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  bgTheme?: boolean;
}

const FocusRef: React.FC<PersonProps> = ({
  gender,
  name,
  email,
  id,
  picture,
  bgTheme,
}) => {
  const { userName } = useParams();

  return (
    <>
      <h5>sidan har laddats upp</h5>
      <h6> {userName} </h6>
    </>
  );
};

export default FocusRef;
