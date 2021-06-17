import { createGlobalStyle } from 'styled-components';
import globalLayouts from './layout';
import globalTypography from './typography';

const GlobalStyles = createGlobalStyle`
  /* Typography */
  ${globalTypography}
  /* Layouts */
  ${globalLayouts}
`;
export default GlobalStyles;
