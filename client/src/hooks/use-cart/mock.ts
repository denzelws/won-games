import { QUERY_GAMES } from 'graphql/queries/games'

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { where: { id: ['1', '2'] } }
  },
  result: {
    data: {
      games: [
        {
          id: '1',
          name: 'Sample game',
          slug: 'sample-game',
          developers: [{ name: 'Sample game' }],
          cover: {
            url: '/uploads/sample.jpg'
          },
          price: 10.5,
          __typename: 'Game'
        },
        {
          id: '2',
          name: 'Sample game',
          slug: 'sample-game',
          developers: [{ name: 'Sample game' }],
          cover: {
            url: '/uploads/sample.jpg'
          },
          price: 10.5,
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

export const cartItems = [
  {
    id: '1',
    title: 'Sample game',
    img: 'http://localhost:1337/uploads/sample.jpg',
    price: '$10.50'
  },
  {
    id: '2',
    title: 'Sample game',
    img: 'http://localhost:1337/uploads/sample.jpg',
    price: '$10.50'
  }
]
