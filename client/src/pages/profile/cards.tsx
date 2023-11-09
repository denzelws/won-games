import CardsList from 'components/CardsList'
import { CardListProps } from 'components/CardsList'
import cardsMock from 'components/PaymentOptions/mock'
import { GetServerSidePropsContext } from 'next'

import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protected-routes'

export default function Cards({ cards }: CardListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  return {
    props: {
      cards: cardsMock,
      session
    }
  }
}
