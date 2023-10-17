import { QUERY_GAMES } from 'graphql/queries/games'

export const gamesMock = {
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
          developers: [{ name: 'Bethesda Game Studios' }],
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

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, start: 1 }
  },
  result: {
    data: {
      games: [
        {
          name: 'Fetch More Game',
          slug: 'fetch-more',
          developers: [{ name: 'some developer' }],
          cover: {
            url: 'fetch-more.jpg'
          },
          price: 510.79,
          __typename: 'Game'
        }
      ]
    }
  }
}
