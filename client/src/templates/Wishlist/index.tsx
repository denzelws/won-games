import { Container } from 'components/Container'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Base from 'components/Base'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'

import * as S from './styles'
import { Grid } from 'components/Grid'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  upcomingHighlight: HighlightProps
}

const Wishlist = ({
  recommendedGames,
  upcomingHighlight,
  games
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist - ${index}`} {...game} />
        ))}
      </Grid>
    </Container>
    <Showcase
      title="You may like these games"
      highlight={upcomingHighlight}
      games={recommendedGames}
    />
  </Base>
)

export default Wishlist
