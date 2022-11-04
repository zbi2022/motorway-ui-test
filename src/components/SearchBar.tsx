import { PropsWithChildren } from 'react'
import { createUseStyles } from 'react-jss'

import theme from '@styles/theme'

const useStyles = createUseStyles({
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: [20, 10],
    gap: 20,
    fontSize: 20,
    color: theme.colors.primary,
    cursor: 'pointer',
    background: 'rgba(18,18,33,0.8)',
  },
})

type SegmentProps = PropsWithChildren<{}>

const SearchBar = ({ children }: SegmentProps) => {
  const classes = useStyles()
  
  return (
    <div className={classes.searchBar}>
      {children}
    </div>
  )
}

export default SearchBar
