import styled from 'styled-components'

export const Post = styled.div`
  padding: 2rem;
  width: 26rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;
  transition: border 0.3s;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  @media ((min-width: 320px) and (max-width: 425px)) {
    padding: 1rem;
  }

  @media ((min-width: 640px) and (max-width: 768px)) {
    width: 100%;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    @media ((min-width: 320px) and (max-width: 425px)) {
      gap: 0.5rem;

      h3 {
        font-size: 1rem !important;
      }
    }

    h3 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.25rem;
      font-weight: 700;
      flex: 1;
    }
    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
      font-weight: 400;
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-weight: 400;
  }
`
