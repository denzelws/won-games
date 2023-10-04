import { gql } from '@apollo/client'

import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from '../fragments/highlight'

export const QUERY_RECOMMENDED = gql`
  query QueryRecommended {
    recommended {
      section {
        title
        highlight {
          ...HighlightFragment
        }
        games {
          ...GameFragment
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
