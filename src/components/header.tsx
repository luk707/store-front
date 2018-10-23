import * as React from 'react'
import Bar from './header-bar'
import { H1 } from './typography'
import Container from './container'
export interface HeaderProps {
  title: string
}

class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <Container>
        <Bar>
          <H1>{this.props.title}</H1>
          <button>Cart</button>
        </Bar>
      </Container>
    )
  }
}

export default Header
