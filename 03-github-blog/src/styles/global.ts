import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    line-height: 1.6;
    background: ${(props) => props.theme['base-background']};
}

pre {
  background-color: ${(props) => props.theme['base-post']};
  padding: 1rem;
  border-radius: 2px;

  div {
    padding: 0 !important;
    background-color: transparent !important;
    border-radius: 2px !important;
  }
}
`
