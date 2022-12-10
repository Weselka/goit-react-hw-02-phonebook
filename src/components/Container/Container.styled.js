import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  margin-left: auto;
  margin-right: auto;
`;