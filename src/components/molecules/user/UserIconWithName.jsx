import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <SImg height={180} width={180} src={image} alt={name} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
text-align: center;
`
const SImg = styled.img`
border-radius: 50%;
`

const SName = styled.p`
font-size: 18px;
font-weight: bold;
color: #40514e;
`