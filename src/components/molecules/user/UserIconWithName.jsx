import React from "react";
import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { src, name } = props;
  return (
    <SContainer>
      <SImg height={180} width={180} alt="プロフィール" />
      <SName>{name}</SName>
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