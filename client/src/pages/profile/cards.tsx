import CardsList from 'components/CardsList'
import { CardListProps } from 'components/CardsList'
import cardsMock from 'components/PaymentOptions/mock'
import Profile from 'templates/Profile'

export default function Cards({ cards }: CardListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: cardsMock
    }
  }
}
