import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostContainer, PostInfo, PostList } from './styles'

interface Post {
  id: number
  title: string
  body: string
  created_at: Date
  number: number
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  async function fetchPosts(query?: string) {
    const response = await api.get(
      `search/issues?q=${
        query ? query : ''
      } repo:geovaneborba/rocketseat-ignite-desafios`
    )

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <HomeContainer>
      <Profile />

      <PostContainer>
        <PostInfo>
          <h3>Publicações</h3>
          <span>{posts.length} publicações</span>
        </PostInfo>

        <SearchForm fetchPosts={fetchPosts} />

        <PostList>
          {posts.length === 0 && <span>Nenhuma publicação encontrada!</span>}

          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </PostList>
      </PostContainer>
    </HomeContainer>
  )
}
