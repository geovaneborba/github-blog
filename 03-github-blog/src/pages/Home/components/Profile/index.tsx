import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { ProfileContainer, Social, User } from './styles'

interface UserData {
  name: string
  avatar_url: string
  company: string | null
  followers: number
  bio: string
  html_url: string
  followers_url: string
}

export function Profile() {
  const [user, setUser] = useState<UserData>({} as UserData)

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get('/users/geovaneborba')

      setUser(response.data)
    }
    fetchUser()
  }, [])

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="Foto de Perfil" />

      <User>
        <h2>
          {user.name}
          <a
            href={user.html_url}
            title="Github"
            target={'_blank'}
            rel="noreferrer"
          >
            Github
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </a>
        </h2>

        <p>{user.bio}</p>

        <Social>
          <span>
            <a
              href={user.html_url}
              title="GitHub"
              target={'_blank'}
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
              geovaneborba
            </a>
          </span>
          <span>
            <a title="Estudante">
              <i className="fa-solid fa-building"></i>
              {user.company ? user.company : 'Estudante'}
            </a>
          </span>

          <span>
            <a
              href="https://github.com/geovaneborba?tab=followers"
              title="Seguidores"
              target={'_blank'}
              rel="noreferrer"
            >
              <i className="fa-solid fa-user-group"></i>
              {user.followers} Seguidores
            </a>
          </span>
        </Social>
      </User>
    </ProfileContainer>
  )
}
