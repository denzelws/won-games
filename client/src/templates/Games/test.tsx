import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import { MockedProvider } from '@apollo/client/testing'

import filterItemsMock from 'components/ExploreSidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'

import Games from '.'
import { QUERY_GAMES } from 'graphql/queries/games'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render without data', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: { limit: 15 }
            },
            result: {
              data: {
                games: [
                  {
                    name: 'The Elder Scrolls IV: Oblivion - Game of the Year Edition Deluxe',
                    slug: 'elder-scrolls-iv-oblivion-game-of-the-year-edition-deluxe-the',
                    developers: [
                      {
                        name: 'Bethesda Game Studios'
                      }
                    ],
                    cover: {
                      url: '/uploads/elder_scrolls_iv_oblivion_game_of_the_year_edition_deluxe_the_2346099f43.jpg'
                    },
                    price: 10.79,
                    __typename: 'Game'
                  }
                ]
              }
            }
          }
        ]}
        addTypename={false}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
    expect(
      await screen.findByTestId(/Mock ExploreSidebar/i)
    ).toBeInTheDocument()
    expect(await screen.findByText(/The Elder Scrolls/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
