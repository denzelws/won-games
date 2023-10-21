import { QUERY_GAMES } from 'graphql/queries/games'

export const noGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {} }
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: 'GameConnection'
      }
    }
  }
}

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {} }
  },
  result: {
    data: {
      games: [
        {
          id: '1',
          name: 'The Elder Scrolls IV: Oblivion - Game of the Year Edition Deluxe',
          slug: 'elder-scrolls-iv-oblivion-game-of-the-year-edition-deluxe-the',
          developers: [{ name: 'Bethesda Game Studios' }],
          cover: {
            url: '/uploads/elder_scrolls_iv_oblivion_game_of_the_year_edition_deluxe_the_2346099f43.jpg'
          },
          price: 10.79,
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {}, start: 1 }
  },
  result: {
    data: {
      games: [
        {
          id: '2',
          name: 'Fetch More Game',
          slug: 'fetch-more',
          developers: [{ name: 'some developer' }],
          cover: {
            url: 'fetch-more.jpg'
          },
          price: 510.79,
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}
