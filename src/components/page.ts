import styled from 'react-emotion'

const Page = styled('div')(({ theme }) => ({
  backgroundColor: theme.colorOffWhite,
  maxWidth: theme.breakpoints.xl,
  margin: 'auto',
}))

export default Page
