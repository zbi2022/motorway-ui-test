import { PropsWithChildren } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  pageSectionLayout: {
    padding: 10,
  },
})

type PageSectionLayoutProps = PropsWithChildren<{}>

const PageSectionLayout = ({ children }: PageSectionLayoutProps) => {
  const classes = useStyles()

  return (
    <div className={classes.pageSectionLayout}>
      {children}
    </div>  
  )
}

export default PageSectionLayout
