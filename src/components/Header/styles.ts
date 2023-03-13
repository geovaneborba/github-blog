import styled from 'styled-components'

export const HeaderContainer = styled.header`
  img {
    width: 100%;
  }

  @media ((min-width: 320px) and (max-width: 1024px)) {
    height: 30vh;

    img {
      object-fit: cover;
      height: 100%;
    }
  }
`
