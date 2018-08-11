import styled from 'styled-components';

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 0.3rem;
  display: block;
  color: ${props => props.theme.formColors.label.color};
`;

export default Label;