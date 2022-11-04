import { render, screen, act, fireEvent } from '@testing-library/react'

import ContactForm from '@components/forms/ContactForm'

describe('ContactForm', () => {
  const setup = () => {
    const submitMock = jest.fn()
    return {
      ...render(<ContactForm onSubmit={submitMock} />),
      submitMock
    }
  }

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('expects to include defined inputs', () => {

  })

  it('expects to have disabled submit button, if form is not valid', () => {
    setup()
    
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('expects to render error message when name field is empty', async () => {
    setup()

    const nameField = screen.getByRole('textbox', { name: 'name' })

    await act(() => {
      fireEvent.focus(nameField)
      fireEvent.blur(nameField)
    })
    
    expect(screen.getByRole('alert', { name: 'name is a required field'})).toBeInTheDocument()
  })

  it('expects to render error message when email field is invalid', async () => {
    setup()

    const emailField = screen.getByRole('textbox', { name: 'email' })
    
    await act(() => {
      fireEvent.change(emailField, { target: { value: 'test' } })
      fireEvent.blur(emailField)
    })
    
    expect(screen.getByRole('alert', { name: 'email must be a valid email'})).toBeInTheDocument()
  })

  it('expects to render error message, if date period is less then 18 years', async () => {
    setup()

    const dateOfBirthField = screen.getByLabelText(/dateOfBirth/i)
    
    await act(() => {
      fireEvent.change(dateOfBirthField, { target: { value: '11/01/2015' } })
      fireEvent.blur(dateOfBirthField)
    })
    
    expect(screen.getByRole('alert', { name: 'Date is invalid'})).toBeInTheDocument()
  })

  it('expects to have enabled submit button, if form is valid', async () => {
    setup()

    const nameField = screen.getByRole('textbox', { name: 'name' })
    const emailField = screen.getByRole('textbox', { name: 'email' })
    const dateOfBirthField = screen.getByLabelText(/dateOfBirth/i)

    await act(() => {
      fireEvent.change(nameField, { target: { value: 'test user' } })
      fireEvent.change(emailField, { target: { value: 'test@test.com' } })
      fireEvent.change(dateOfBirthField, { target: { value: '2000-01-01' } })
      fireEvent.blur(dateOfBirthField)
    })

    expect(screen.getByRole('button')).toBeEnabled()
  })

  it('expects to submit form', async () => {
    const{ submitMock } = setup()
    const nameField = screen.getByRole('textbox', { name: 'name' })
    const emailField = screen.getByRole('textbox', { name: 'email' })
    const dateOfBirthField = screen.getByLabelText(/dateOfBirth/i)

    await act(() => {
      fireEvent.change(nameField, { target: { value: 'test user' } })
      fireEvent.change(emailField, { target: { value: 'test@test.com' } })
      fireEvent.change(dateOfBirthField, { target: { value: '2000-01-01' } })
      fireEvent.blur(dateOfBirthField)
    })

    const submitButton = screen.getByRole('button')

    expect(submitButton).toBeEnabled()

    await act(() => {
      fireEvent.click(submitButton)
    })

    expect(submitMock.mock.calls[0][0]).toEqual({
      dateOfBirth: new Date('2000-01-01T00:00:00.000Z'),
      email: 'test@test.com',
      favoriteColor: '#000000',
      name: 'test user',
      salary: 1300
    })
  })
  
})
