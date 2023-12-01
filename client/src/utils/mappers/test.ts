import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryGames_games } from 'graphql/generated/QueryGames'

import {
  bannerMapper,
  cartMapper,
  gamesMapper,
  highlightMapper,
  ordersMapper
} from '.'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      image: {
        url: '/image.jpg'
      },
      title: 'Banner title',
      subtitle: 'Banner subtitle',
      button: {
        label: 'button label',
        link: 'button link'
      },
      ribbon: {
        text: 'ribbon text',
        color: 'primary',
        size: 'small'
      }
    } as QueryHome_banners

    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: `http://localhost:1337/image.jpg`,
        title: 'Banner title',
        subtitle: 'Banner subtitle',
        buttonLabel: 'button label',
        buttonLink: 'button link',
        ribbon: 'ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'small'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should return the correct format when mapped', () => {
    const games = {
      id: '1',
      name: 'Game name',
      slug: 'game slug',
      developers: [
        {
          name: 'developer name'
        }
      ],
      cover: {
        url: '/games.jpg'
      },
      price: 10
    } as unknown as QueryGames_games

    expect(gamesMapper([games])).toStrictEqual([
      {
        id: '1',
        title: 'Game name',
        slug: 'game slug',
        developer: 'developer name',
        img: `http://localhost:1337/games.jpg`,
        price: 10
      }
    ])
  })
})

describe('highlightMapper()', () => {
  it('should render an empty object if no highlight', () => {
    expect(highlightMapper(null)).toStrictEqual({})
  })

  it('should return the correct format when mapped', () => {
    const highlight = {
      title: 'Highlight',
      subtitle: 'Highlight subtitle',
      background: {
        url: '/background.jpg'
      },
      floatImage: {
        url: '/floatimage.jpg'
      },
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'left'
    } as QueryHome_sections_freeGames_highlight

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'Highlight',
      subtitle: 'Highlight subtitle',
      backgroundImage: `http://localhost:1337/background.jpg`,
      floatImage: `http://localhost:1337/floatimage.jpg`,
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'left'
    })
  })
})

describe('cartMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should return with the correct format when mapped', () => {
    const game = {
      id: '1',
      name: 'game',
      cover: {
        url: '/uploads/sample.jpg'
      },
      price: 10
    } as QueryGames_games

    expect(cartMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'game',
        img: 'http://localhost:1337/uploads/sample.jpg',
        price: '$10.00'
      }
    ])
  })

  describe('ordersMappper()', () => {
    it('should return an empty array if no orders', () => {
      expect(ordersMapper(undefined)).toStrictEqual([])
    })

    it('should return mapped items', () => {
      const orders = [
        {
          __typename: 'Order',
          id: '1',
          card_brand: 'visa',
          card_last4: '4242',
          created_at: '2021-04-14T18:41:48.358Z',
          games: [
            {
              id: '1',
              name: 'game',
              developers: [
                {
                  name: 'developer'
                }
              ],
              slug: 'game',
              cover: {
                url: '/image.jpg'
              },
              price: 10
            }
          ]
        }
      ] as QueryOrders_orders[]

      expect(ordersMapper(orders)).toStrictEqual([
        {
          id: '1',
          paymentInfo: {
            flag: 'visa',
            img: '/img/cards/visa.png',
            number: '**** **** **** 4242',
            purchaseDate: 'Purchase made on Apr 14, 2021'
          },
          games: [
            {
              id: '1',
              title: 'game',
              downloadLink:
                'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
              img: 'http://localhost:1337/image.jpg',
              price: '$10.00'
            }
          ]
        }
      ])
    })

    it('should return free games when its free', () => {
      const orders = [
        {
          __typename: 'Order',
          id: '1',
          card_brand: null,
          card_last4: null,
          created_at: '2021-04-14T18:41:48.358Z',
          games: [
            {
              id: '1',
              name: 'game',
              developers: [
                {
                  name: 'developer'
                }
              ],
              slug: 'game',
              cover: {
                url: '/image.jpg'
              },
              price: 0
            }
          ]
        }
      ] as QueryOrders_orders[]

      expect(ordersMapper(orders)).toStrictEqual([
        {
          id: '1',
          paymentInfo: {
            flag: null,
            img: null,
            number: 'Free Games',
            purchaseDate: 'Purchase made on Apr 14, 2021'
          },
          games: [
            {
              id: '1',
              title: 'game',
              downloadLink:
                'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
              img: 'http://localhost:1337/image.jpg',
              price: '$0.00'
            }
          ]
        }
      ])
    })
  })
})
