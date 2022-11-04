import { ComponentProps, ForwardedRef, forwardRef } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

type InputProps = ComponentProps<'input'>

const useStyles = createUseStyles({
  input: {
    border: [2, 'solid', 'transparent'],
    fontSize: 20,
    minHeight: 40,
    '&:hover, &:focus': {
      border: [2, 'solid', 'orange'],
      borderRadius: 3,
      outlineWidth: 0,
    }
  },
})

const Input = forwardRef(({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const classes = useStyles()
  return <input className={clsx(classes.input, className)} {...props} ref={ref} aria-label={props.name} />
})

export default Input
