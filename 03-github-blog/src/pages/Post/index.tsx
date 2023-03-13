import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostContent } from './components/PostContent'
import { PostSummary } from './components/PostSummary'

import { api } from '../../lib/axios'

import { PostContainer } from './styles'

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

export function Post() {
  const [post, setPost] = useState<Post>({} as Post)

  const { id } = useParams()

  useEffect(() => {
    async function fetchPosts() {
      const response = await api.get(
        `repos/geovaneborba/rocketseat-ignite-desafios/issues/${id}`
      )

      setPost(response.data)
    }
    fetchPosts()
  }, [])

  return (
    <PostContainer>
      <PostSummary post={post} />

      <PostContent markdown={post.body} />
    </PostContainer>
  )
}
