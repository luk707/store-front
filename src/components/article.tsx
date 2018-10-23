import * as React from 'react'
import { H1 } from './typography'

export interface ArticleProps {
  title: string
}

class Article extends React.Component<ArticleProps> {
  render() {
    return (
      <article>
        <H1>{this.props.title}</H1>
      </article>
    )
  }
}

export default Article
