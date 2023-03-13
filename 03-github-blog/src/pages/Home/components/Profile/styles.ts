import styled from 'styled-components'

export const ProfileContainer = styled.div`
  max-width: 864px;
  width: 100%;
  background-color: ${(props) => props.theme['base-profile']};
  display: flex;
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 2rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  @media ((min-width: 320px) and (max-width: 640px)) {
    max-width: unset;
    flex-wrap: wrap;
    position: static;
    transform: translate(0%, -10%);
    padding: 2rem 1rem;

    img {
      margin: 0 auto;
    }
  }

  @media ((min-width: 640px) and (max-width: 1024px)) {
    max-width: unset;
    position: static;
    transform: translate(0%, -25%);
    padding: 2rem;
    display: grid;
    grid-template-columns: max-content 1fr;
    flex-wrap: wrap;

    img {
      margin: unset;
    }
  }
`

export const User = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.75rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
  }
`

export const Social = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;

  span {
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-subtitle']};
      text-decoration: none;

      i {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }

  @media ((min-width: 320px) and (max-width: 640px)) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`
