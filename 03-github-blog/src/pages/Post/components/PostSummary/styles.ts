import styled from 'styled-components'

export const PostWrapper = styled.div`
  max-width: 864px;
  width: 100%;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 2rem;

  @media ((min-width: 320px) and (max-width: 425px)) {
    position: static;
    left: auto;
    transform: none;
    padding: 2rem 1rem;
  }

  @media ((min-width: 640px) and (max-width: 1024px)) {
    position: static;
    transform: translate(0%, -25%);
  }
`

export const PostInfo = styled.div`
  width: 100%;
`

export const PostAction = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

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
`

export const PostTitle = styled.h1`
  margin-top: 1.25rem;
  color: ${(props) => props.theme['base-title']};
  font-weight: bold;
  font-size: 1.5rem;
`

export const Social = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1.5rem;

  @media ((min-width: 320px) and (max-width: 425px)) {
    flex-wrap: wrap;
    gap: 1rem;
  }

  span {
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-span']};
      text-decoration: none;

      i {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
