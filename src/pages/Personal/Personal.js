import React from "react";
import Nav from "../../components/Nav/Nav";
import { useLocation } from "react-router";

const Personal = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <Nav data={state} />
      <div>테스트용</div>
    </>
  );
};

export default Personal;
