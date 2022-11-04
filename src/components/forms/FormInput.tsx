import { createUseStyles } from 'react-jss'
import { ComponentProps, ForwardedRef, forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'

import Input from '@components/ui/Input'

import theme from '@styles/theme'

const useStyles = createUseStyles({
  formInput: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    fontSize: 20,
  },
  input: {
    border: [1, 'solid', theme.colors.black],
    minWidth: 250,
    padding: 5,
    fontSize: 20,
  },
  inputInvalid: {
    extend: 'input',
    border: [1, 'solid', theme.colors.error],
  },
  errorMessage: {
    margin: [5,0],
    textTransform:'uppercase',
    textAlign: 'right',
    color: theme.colors.error,
    fontSize: 16,
    textShadow: '.5px .5px #000000',
  },
})

type FormInputProps = {
  label: string,
  error?: string,
  name: string,
  children?: React.ReactNode,
} & ComponentProps<typeof Input>

export const FormInput = forwardRef(({ label, name, error, ...props }: FormInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.formInput}>
        <label className={classes.label} htmlFor={name}>{label}</label>
        <Input name={name} className={error ? classes.inputInvalid : classes.input } {...props} ref={ref} />
      </div>
      {error && <p role='alert' aria-label={error} className={classes.errorMessage}>{error}</p>}
    </div>
  )
})

type FormInputContainerProps = FormInputProps

const FormInputContainer = (props: FormInputContainerProps) => {
  const { register, formState } = useFormContext()

  const errorMessage = formState.errors[props.name]?.message as string

  return (
    <FormInput {...props} {...register(props.name)} error={errorMessage} />
  )
}

export default FormInputContainer

