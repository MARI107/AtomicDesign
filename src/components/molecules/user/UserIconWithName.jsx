import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
  const { src, name, isAdmin } = props;
  const context = UserContext(useContext);
  console.log(context);
  return (
    <SContainer>
      <SImg height={180} width={180} alt="プロフィール" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
