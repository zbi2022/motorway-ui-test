import { ComponentProps } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import theme from '@styles/theme'

export type ButtonProps = ComponentProps<'button'>

const useStyles = createUseStyles({
  button: {
    border: [1, 'solid', theme.colors.secondary],
    borderRadius: 3,
    padding: 10,
    backgroundColor: theme.colors.secondary,
    fontSize: 16,
    cursor: 'pointer',
    '&:disabled': {
      opacity: 0.5
    }
  },
})

const Button = ({className, ...props}: ButtonProps) => {
  const classes = useStyles()

  return (
    <button className={clsx(classes.button, className)} {...props} />
  )
}

export default Button

