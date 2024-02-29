import React from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

const PostHeader = ({ title, image, content, description, date }) => {

  SyntaxHighlighter.registerLanguage('js', js)
  SyntaxHighlighter.registerLanguage('css', css)

  const customRenderers = {
    code(data) {
      return (
        <SyntaxHighlighter 
          style={atomDark} 
          language={data && data.className && data.className.split('-')[1]} 
        >{data && data.children}</SyntaxHighlighter>
      )
    },

    image(data) {
      return (
        <Image src={data.src} width={500} height={400} alt='blog inline image' />
      )
    },    
  }

  return (
    <>
      <header className='post-header'>
        <div className="container">
            <div className="img">
                <Image src={image} width={300} height={300} layout='responsive' alt={title} />
            </div>
            <div className="desc">
                <h1>{title}</h1>
                <span className="date">{new Date(date).toDateString()}</span>
                <p>{description}</p>
            </div>
        </div>
        <div className="container main-content mark-down">
          <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
        </div>
      </header>
    </>
  )
}

export default PostHeader
