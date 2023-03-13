import styled from 'styled-components'

export const SearchPostForm = styled.form`
  width: 100%;

  input {
    width: 100%;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 6px;
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-size: 1rem;
      font-weight: 400;
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme['blue']};
    }
  }
`
