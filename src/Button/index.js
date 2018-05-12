import styled from 'styled-components';

const paddingProps = {
  small: '5px 7px',
  large: '10px 16px'
};

const Button = styled.button`
  border: 1px solid #000;
  padding: ${props => props.size ? paddingProps[props.size] : '7px 12px'};
  font-size: 14px;
`;

export default Button ;
