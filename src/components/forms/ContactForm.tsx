import { createUseStyles } from 'react-jss'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import addYears from 'date-fns/addYears'

import FormInput from '@components/forms/FormInput'
import Button from '@components/ui/Button'

import theme from '@styles/theme'

export type ContactFormData = {
  name: string
  email: string
  dateOfBirth: string
  favoriteColor: string
  salary: number
}

const contactFormValidator = yup.object({
  name: yup.string()
    .trim()
    .required()
    .matches( /^[aA-zZ\s]+$/ , 'Only letters are allowed'),
  email: yup.string().required().email(),
  dateOfBirth: yup.date()
    .typeError('Date is invalid')
    .required()
    .max(addYears(new Date(), -18), 'Please select date to prove you are adult')
  ,
  salary: yup.number().min(1000).max(2000).required(),
})

const useStyles = createUseStyles({
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  contactFormContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  formCaption: {
    textAlign: 'center',
    fontSize: 20,
  },
})

type ContactFormProps = {
  onSubmit: SubmitHandler<ContactFormData>
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const classes = useStyles()
  const methods = useForm<ContactFormData>({
    defaultValues: {
      salary: 1300,
      favoriteColor: theme.colors.black
    },
    resolver: yupResolver(contactFormValidator),
    mode: 'onBlur'
  })

  const salary = methods.watch('salary')
  const color = methods.watch('favoriteColor')

  const isButtonDisabled = !methods.formState.isValid || methods.formState.isSubmitting

  const handleFormSubmit = methods.handleSubmit(onSubmit)

  return (
    <FormProvider {...methods}>
      <div className={classes.contactFormContainer}>
        <form className={classes.contactForm} onSubmit={handleFormSubmit}>
          <h2 className={classes.formCaption}>Contact us</h2>
          <FormInput label='Name:' name='name' placeholder='Type your name' />
          <FormInput label='Email:' name='email' placeholder='your@email.com' />
          <FormInput label='Date of birth:' name='dateOfBirth' type='date' />
          <FormInput label={`Favorite color: ${color}`} name='favoriteColor' type='color' />
          <FormInput label={`Salary: ${salary}`} name='salary' type='range' min='1000' max='2000' step='100' />
          <Button type='submit' disabled={isButtonDisabled}>Submit</Button>
        </form>
      </div>
    </FormProvider>
  )
}

export default ContactForm
