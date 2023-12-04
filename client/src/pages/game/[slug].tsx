import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import Game, { GameTemplateProps } from 'templates/Game'

import { initializeApollo } from 'utils/apollo'

import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import {
  queryGameBySlug,
  queryGameBySlugVariables
} from 'graphql/generated/queryGameBySlug'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { getImageUrl } from 'utils/getImageUrl'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import {
  QueryUpcoming,
  QueryUpcomingVariables
} from 'graphql/generated/QueryUpcoming'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  // if route its not available
  if (router.isFallback) return null

  return <Game {...props} />
}

//  generate paths in build time
export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    queryGameBySlug,
    queryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache'
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  const TODAY = new Date().toISOString().slice(0, 10)

  const { data: upcoming } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({
    query: QUERY_UPCOMING,
    variables: {
      date: TODAY
    }
  })

  return {
    revalidate: 60,
    props: {
      cover: `${getImageUrl(game.cover?.src)}`,
      gameInfo: {
        id: game.id,
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: `${getImageUrl(image.src)}`,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcomingGames: gamesMapper(upcoming.upcommingGames),
      upcomingHighlight: highlightMapper(
        upcoming.showcase?.upcomingGames?.highlight
      ),
      upcomingTitle: upcoming.showcase?.upcomingGames?.title,
      recommendedTitle: recommended.recommended?.section?.title,
      recommendedGames: gamesMapper(recommended.recommended?.section?.games)
    }
  }
}
