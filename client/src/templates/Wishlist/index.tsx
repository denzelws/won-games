import Base from 'components/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'
import { HighlightProps } from 'components/Highlight'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'

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
      <Divider />
    </Container>
    <Showcase
      title="You may like these games"
      highlight={upcomingHighlight}
      games={recommendedGames}
    />
  </Base>
)

export default Wishlist
