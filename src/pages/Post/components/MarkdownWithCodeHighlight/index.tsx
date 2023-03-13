import ReactMarkdown from 'react-markdown'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'

import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import remarkGfm from 'remark-gfm'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'

interface MarkdownProps {
  markdown: string
}

SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('markdown', markdown)

export function MarkdownWithCodeHighlight(props: MarkdownProps) {
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')

          return !inline && match ? (
            <SyntaxHighlighter
              style={atomDark as any}
              PreTag="div"
              language={match[1]}
              // eslint-disable-next-line react/no-children-prop
              children={String(children).replace(/\n$/, '')}
              {...props}
            />
          ) : (
            <code {...props}>{children}</code>
          )
        },
      }}
      remarkPlugins={[remarkGfm]}
    >
      {props.markdown}
    </ReactMarkdown>
  )
}
