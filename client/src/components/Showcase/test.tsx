import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Showcase from '.'

describe('<Showcase />', () => {
  renderWithTheme(<Showcase />)
})
