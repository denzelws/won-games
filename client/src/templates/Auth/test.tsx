import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    render(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: 'Won Games' })).toHaveLength(2)

    expect(
      screen.getByRole('heading', { name: /favorite games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /won is the best/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /auth title/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
