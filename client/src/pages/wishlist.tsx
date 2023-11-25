import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import gamesMock from 'components/GameCardSlider/mock'

import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import {
  QueryWishlist,
  QueryWishlistVariables
} from 'graphql/generated/QueryWishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)
  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  if (!session) return {}

  await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session.user?.email as string
    }
  })

  return {
    props: {
      session,
      initializeApolloState: apolloClient.cache.extract(),
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedTitle: data.recommended?.section?.title,
      upcomingHighlight: highlightMapper(data.recommended?.section?.highlight),
      games: gamesMock.slice(0, 6)
    }
  }
}
