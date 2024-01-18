import React from "react";
import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  background-color: #303030;
  input {
    height: 20px;
  }
`;

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesCahnge = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <Wrap>
      <input
        value={minutes}
        onChange={onMinutesCahnge}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHoursChange}
        type="number"
        placeholder="Hours"
      />
    </Wrap>
  );
}

export default App;
