import styled from 'styled-components';

const paddingProps = {
  small: '5px 7px',
  large: '10px 16px'
};

const Button = styled.button`
  border: 1px solid ${props => props.theme.formColors.button.borderColor};
  padding: ${props => props.size ? paddingProps[props.size] : '7px 12px'};
  font-size: 14px;
  cursor: pointer;
  background: ${props => props.theme.formColors.button.bg};
  color: ${props => props.theme.formColors.button.color};

  &:hover {
    background: ${props => props.theme.formColors.button.hover.bg};
    color: ${props => props.theme.formColors.button.hover.color};
  }

  &[disabled] {
    cursor: not-allowed;
    background: ${props => props.theme.formColors.button.disabled.bg};
    color: ${props => props.theme.formColors.button.disabled.color};
    border-color: ${props => props.theme.formColors.button.disabled.borderColor};

    &:hover {
      background: ${props => props.theme.formColors.button.disabled.bg};
      color: ${props => props.theme.formColors.button.disabled.color};
    }
  }
`;

export default Button ;
