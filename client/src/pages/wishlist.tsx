import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      recommendedGames: gamesMock.slice(0, 5),
      upcomingHighlight: highlightMock,
      games: gamesMock.slice(0, 6)
    }
  }
}