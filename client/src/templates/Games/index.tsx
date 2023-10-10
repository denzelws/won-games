import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import GameCard, { GameCardProps } from 'components/GameCard'
import ExploreSidebar from 'components/ExploreSidebar'

import * as S from './styles'
import { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import { useQuery } from '@apollo/client'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries/games'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading } = useQuery<QueryGames, QueryGamesVariables>(
    QUERY_GAMES,
    {
      variables: { limit: 15 }
    }
  )

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          'Loading...'
        ) : (
          <section>
            <Grid>
              {data?.games.map((game) => (
                <GameCard
                  key={game.slug}
                  slug={game.slug}
                  title={game.name}
                  developer={game.developers[0].name}
                  img={`http://localhost:1337${game.cover?.url}` || undefined}
                  price={game.price}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
