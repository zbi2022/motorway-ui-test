import { render, screen, fireEvent } from '@testing-library/react'

import Button from '@components/ui/Button'

describe('@components/ui/Button', () => {
  it('expects to render button with provided label', () => {
    render(<Button>Click me</Button>)

    const btn = screen.getByRole('button', { name: 'Click me'})
    expect(btn).toBeInTheDocument()
  })

  it('expects to fire onClick event', () => {
    const onClickMock = jest.fn()

    render(<Button onClick={onClickMock}>ClickMe</Button>)
    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    expect(onClickMock).toBeCalled()
  })
})
