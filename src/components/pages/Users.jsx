import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SeachInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `MariS{val}`,
    image: "https://source.unsplash.com/brFsZ7qszSY",
    email: "abcd@abcd.co.jp",
    phone: "080-0000-0000",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SeachInput />
      <SUserArea>
        {users.map(obj => (
          <UserCard key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 20px;
`;
