import styled from 'styled-components'

export const Content = styled.div`
  padding: 8rem 2rem;
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ((min-width: 320px) and (max-width: 425px)) {
    padding-top: 2rem;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 100%;
  }

  ul {
    padding-left: 2rem;
  }
`
