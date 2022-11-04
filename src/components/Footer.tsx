import { PropsWithChildren } from 'react'
import { createUseStyles } from 'react-jss'

import theme from '@styles/theme'

const useStyles = createUseStyles({
  footer: {
    padding: [20, 10],
    color: theme.colors.primary,
    cursor: 'pointer',
    background: 'rgba(18,18,33,0.8)',
  },
})

type SegmentProps = PropsWithChildren<{}>

const Footer = ({ children }: SegmentProps) => {
  const classes = useStyles()
  
  return (
    <footer className={classes.footer}>
      {children}
    </footer>
  )
}

export default Footer
