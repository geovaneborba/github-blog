import { MarkdownWithCodeHighlight } from '../MarkdownWithCodeHighlight'
import { Content } from './styles'

interface PostContentProps {
  markdown: string
}

export function PostContent({ markdown }: PostContentProps) {
  return (
    <Content>
      <MarkdownWithCodeHighlight markdown={markdown} />
    </Content>
  )
}
