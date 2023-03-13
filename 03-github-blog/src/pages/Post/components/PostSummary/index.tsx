import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'
import { dateFormatted } from '../../../../utils/formatter'
import { PostAction, PostInfo, PostTitle, PostWrapper, Social } from './styles'

interface Post {
  id: number
  title: string
  body: string
  created_at: Date
  comments: number
  user: {
    html_url: string
  }
}

interface PostInfoProps {
  post: Post
}

export function PostSummary({ post }: PostInfoProps) {
  return (
    <PostWrapper>
      <PostInfo>
        <PostAction>
          <Link to="/" title="Voltar">
            <i className="fa-solid fa-chevron-left"></i>
            Voltar
          </Link>
          <a href="#" title="GitHub">
            Ver no github
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </PostAction>

        <PostTitle>{post.title}</PostTitle>

        <Social>
          <span>
            <a href={post.user?.html_url} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
              geovaneborba
            </a>
          </span>
          <span>
            <a>
              <i className="fa-solid fa-calendar-day"></i>
              {post.created_at ? dateFormatted(new Date(post.created_at)) : ''}
            </a>
          </span>

          <span>
            <a>
              <i className="fa-solid fa-comment"></i>
              {post.comments} comentários
            </a>
          </span>
        </Social>
      </PostInfo>
    </PostWrapper>
  )
}
