import Heading from 'components/Heading'
import * as S from './styles'
import { PaymentCard } from 'components/PaymentOptions'

export type CardListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardListProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
)

export default CardsList
