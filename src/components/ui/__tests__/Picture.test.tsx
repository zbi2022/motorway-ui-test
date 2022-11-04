import { render, screen } from '@testing-library/react'

import Picture from '@components/ui/Picture'

describe('@components/ui/Avatar', () => {
  it('expects to render button with provided label', () => {
    render(<Picture imageUrlWithoutExt='/test/test-image' alt='test-image-description'/>)

    const picture = screen.getByRole('img', { name: 'test-image-description'})
    expect(picture).toBeInTheDocument()
  })
})
