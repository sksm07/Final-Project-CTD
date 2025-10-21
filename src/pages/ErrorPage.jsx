import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export default function ErrorPage(){
    return (
        <Wrapper>
            <Title>404 — Page Not Found</Title>
            <Message>Oops! The page you’re looking for doesn’t exist.</Message>
        </Wrapper>
    )
}