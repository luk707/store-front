import styled from 'react-emotion'

const toRem = px => `${px / 10}rem`
const toPx = px => `${px}px`
const atLeast = (breakpoint, formatter = toPx) =>
  `@media(min-width: ${formatter(breakpoint)})`

const Container = styled('div')(({ theme }) => ({
  margin: 'auto',
  maxWidth: '100%',
  padding: `0 ${toRem(theme.spacings.md)}`,
  ...Object.keys(theme.breakpoints)
    .filter(bp => bp !== 'xl')
    .map(bp => theme.breakpoints[bp])
    .map(bp => ({
      [atLeast(bp)]: {
        maxWidth: toPx(bp - theme.spacings.md * 2),
        padding: 0,
      },
    }))
    .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
}))

export default Container
