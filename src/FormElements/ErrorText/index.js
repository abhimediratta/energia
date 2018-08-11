import styled from 'styled-components';

const ErrorText = styled.div`
  color: ${props => props.theme.formColors.errorText.color};
  font-size: 0.8em;
  padding: 0.2em 0;
`;

export default ErrorText;