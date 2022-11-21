import styled from "styled-components";

export const GoalCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 450px;
  align-items: center;
`;
// ``
export const GoalTitleContainer = styled.div`
  display: flex;
  background-color: #2095f7;
  padding: 8px;
  justify-content: center;
  border-radius: 4px;
  width: 350px;
`;

export const GoalTitle = styled.h2`
  color: white;
  font-size: 72px;
  margin: 0px;
  font-family: din-next-w01-light, din-next-w02-light, din-next-w10-light,
    sans-serif;
  font-weight: 400;
`;

export const GoalSpan = styled.span`
  margin-top: 24px;
  text-align: center;
  font-size: 32px;
  font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
`;
