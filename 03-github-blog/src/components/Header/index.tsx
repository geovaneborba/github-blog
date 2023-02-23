import { HeaderContainer } from './styles'
import githubBlogCover from '../../assets/cover.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={githubBlogCover}
        alt="Imagem de fundo escrito no centro Github Blog"
      />
    </HeaderContainer>
  )
}
