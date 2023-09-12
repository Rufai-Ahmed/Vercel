import React from "react";
import "./App.css";
import styled from "styled-components";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./Router/MainRouter";
import { useState, useRef, useEffect } from "react";
import usePromise from "react-use-promise";

function Vercel() {
  let [state1, setState1] = useState(3);
  const [count, setCount] = useState(0);
  const countRef: any = useRef();
  const showRef: any = useRef();
  const borderRef: any = useRef();

  const [result, error, state] = usePromise(
    () =>
      new Promise((resolve) => {
        setTimeout(() =>
          resolve(
            setInterval(() => {
              setState1(state1--);
            }, 1000)
          )
        );
      }),
    []
  );

  const bstyle: string[] = [
    "border: 5px solid #8956ffff",
    "border: 5px solid lightblue",
    "border: 5px solid violet",
    "border: 5px solid orange",
    "border: 5px solid white; box-shadow: 0px 0px 100px 100px white",
  ];

  useEffect(() => {
    borderRef.current.style = bstyle[count];

    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  });

  useEffect(() => {
    setTimeout(() => {
      countRef.current.style.display = "block";
      showRef.current.style.display = "none";
    }, 5000);
  });

  return (
    <div>
      <Hold ref={countRef}>
        <RouterProvider router={MainRouter} />
      </Hold>
      <Contain ref={showRef}>
        <P ref={borderRef}>{state1}</P>
      </Contain>
    </div>
  );
}

export default Vercel;

const Hold = styled.div`
  display: none;
`;

const Contain = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const P = styled.div`
  padding: 30px 50px;
  color: white;
  font-size: 50px;
  font-weight: 700;
  border-radius: 30px;
  background-color: black;
  transition: all 350ms;
`;
