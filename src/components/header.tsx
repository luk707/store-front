import * as React from 'react'
import Bar from './header-bar'
import { H1 } from './typography'

export interface HeaderProps {
  title: string
}

class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <Bar>
        <H1>{this.props.title}</H1>
      </Bar>
    )
  }
}

export default Header
