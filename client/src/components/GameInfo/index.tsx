import formatPrice from 'utils/format-price'

import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'

import * as S from './styles'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper data-cy="game-info">
    <Heading color="black" lineBottom lineColor="primary">
      {title}
    </Heading>
    <S.Description>{description}</S.Description>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.ButtonWrapper>
      <CartButton id={id} size="large" hasText />
      <WishlistButton id={id} hasText size="large" />
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default GameInfo
