import Home, { HomeTemplateProps } from 'templates/Home'
import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 10,
      banners: data.banners.map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      })),
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeHighlight: highlightMock,
      freeGames: gamesMock
    }
  }
}

// {
//   img: '/img/project-winter.png',
//   title: 'Defy death 1',
//   subtitle: '<p>Play the new <strong>CrashLands</strong> season',
//   buttonLabel: 'Buy now',
//   buttonLink: '/games/defy-death',
//   ribbon: 'Bestselling'
// }

// {
//   "image": {
//     "url": "/uploads/cyberpunk2_4518b71167.jpg"
//   },
//   "title": "Cyberpunk 2077",
//   "subtitle": "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City.",
//   "button": {
//     "label": "Buy now",
//     "link": "''"
//   },
//   "ribbon": {
//     "text": "New",
//     "color": "primary",
//     "size": "small"
//   }
// }
