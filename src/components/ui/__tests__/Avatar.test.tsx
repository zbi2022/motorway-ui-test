import { render, screen } from '@testing-library/react'

import Avatar from '@components/ui/Avatar'

describe('@components/ui/Avatar', () => {
  it('expects to render button with provided label', () => {
    render(<Avatar imageUrlWithoutExt='/test/profile-test-image' name='test-profile-name'/>)

    const avatar = screen.getByRole('img', { name: 'test-profile-name'})
    expect(avatar).toBeInTheDocument()
  })
})
