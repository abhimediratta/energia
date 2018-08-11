import styled from 'styled-components';

const Input = styled.input`
  padding: 7px 10px;
  border: 1px solid ${props => props.theme.formColors.input.borderColor};
  background: ${props => props.theme.formColors.input.bg};
  font-size: ${props => props.theme.formColors.allInputs.fontSize};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.formColors.input.focusBorderColor};
  }
`;

export default Input;