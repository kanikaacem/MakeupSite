
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  
  }
  header{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
  `;