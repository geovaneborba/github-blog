import { useNavigate } from 'react-router-dom'
import { dateFormatted } from '../../../../utils/formatter'
import { Post } from './styles'

interface Post {
  id: number
  title: string
  body: string
  created_at: Date
  number: number
}

interface PostProps {
  post: Post
}

export function PostCard({ post }: PostProps) {
  const navigate = useNavigate()

  return (
    <Post
      key={post.id}
      onClick={() => {
        navigate(`/post/${post.number}`)
      }}
    >
      <div>
        <h3>{post.title}</h3>
        <span>{dateFormatted(new Date(post.created_at))}</span>
      </div>

      <p>
        {post.body.slice(0, 105)}... <br /> <br />
        clique para continuar para a publicação
      </p>
    </Post>
  )
}
