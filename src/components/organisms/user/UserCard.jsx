import styled from "styled-components";

export const UserCasd = () => {
  return (
    <div>
      <img
        height={200}
        width={160}
        src="https://source.unsplash.com/brFsZ7qszSY"
        alt="プロフィール"
      />
      <p>名前</p>
      <SDl>
        <dt>メール</dt>
        <dd>1111@aaa.com</dd>
        <dt>TEL</dt>
        <dd>000-123-000</dd>
        <dt>会社名</dt>
        <dd>11株式会社</dd>
        <dt>WEB</dt>
        <dd>httttttttt.com</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-buttom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-buttom: 8px;
  }
`;
