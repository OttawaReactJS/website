import styled from 'styled-components';
import colors from '../utils/colors';

export default styled.section`
  position: relative;
  display: flex;
  width: 100vw;
  background: ${colors.blue};
  min-height: 65vh;
  overflow: hidden;

  &:nth-child(even) {
    background: #ffffff;
  }
`;
