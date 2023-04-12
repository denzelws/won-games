import Base from 'components/Base'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  upcomingHighlight: HighlightProps
}

const Wishlist = ({
  recommendedGames,
  upcomingHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
    </Container>
    <Showcase
      title="You may like these games"
      highlight={upcomingHighlight}
      games={recommendedGames}
    />
  </Base>
)

export default Wishlist
