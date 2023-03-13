import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
`

export const PostContainer = styled.section`
  padding-top: 12.25rem;

  @media ((min-width: 320px) and (max-width: 768px)) {
    padding: 2rem 1rem;
  }

  @media ((min-width: 768px) and (max-width: 1024px)) {
    padding: 2rem 1rem;
  }
`

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  h3 {
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem 0 14.625rem;

  span {
    color: ${(props) => props.theme['base-span']};
  }

  @media ((min-width: 640px) and (max-width: 1024px)) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`
