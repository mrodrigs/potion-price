import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #212121;
`;

export const Card = styled.div`
  background: #fafafa;
  padding: 20px 20px;
  border-radius: 4px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
