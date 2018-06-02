import { Box } from 'grid-styled';
import styled from 'styled-components';

const EventSectionTitle = styled(Box)`
  background: ${props => props.theme.eventSectionColors.background};
  color: ${props => props.theme.eventSectionColors.color};
  padding: 0.8em;
  font-size: 1.3em;
`;


export default EventSectionTitle;
