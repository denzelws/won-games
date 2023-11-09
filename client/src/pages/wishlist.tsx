import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import gamesMock from 'components/GameCardSlider/mock'

import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  return {
    props: {
      session,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedTitle: data.recommended?.section?.title,
      upcomingHighlight: highlightMapper(data.recommended?.section?.highlight),
      games: gamesMock.slice(0, 6)
    }
  }
}
