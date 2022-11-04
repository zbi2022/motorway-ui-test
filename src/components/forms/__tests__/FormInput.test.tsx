import { render, screen } from '@testing-library/react'

import { FormInput } from '@components/forms/FormInput'

describe('@components/ui/FormInput', () => {
  it('expects to render input', () => {
    render(<FormInput label='test-label' name='test-name' />)

    const input = screen.getByRole('textbox', { name: 'test-name' })
    expect(input).toBeInTheDocument()
  })

  it('expects to render label for Input', () => {
    render(<FormInput label='test-label' name='test-name' />)

    const label = screen.getByText('test-label')
    expect(label).toBeInTheDocument()
  })

  it('expects to render error', () => {
    render(<FormInput label='test-label' name='test-name' error='required field' />)

    const alert = screen.getByRole('alert', { name: 'required field'})
    expect(alert).toBeInTheDocument()
  })
})
