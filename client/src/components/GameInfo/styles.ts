import styled, { css } from 'styled-components'

import * as RibbonStyles from 'components/Ribbon/styles'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};

    ${RibbonStyles.Wrapper} {
      right: -1rem;

      &:before {
        border-right-width: 1.1rem;
      }
    }

    ${media.greaterThan('medium')`
     ${RibbonStyles.Wrapper}{
       top: ${theme.spacings.small};
       right: ${theme.spacings.small};
       font-size: ${theme.font.sizes.large};
       &:before {
        border: none;
       }
     }
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      max-width: 77rem;
    `}
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;

    > button {
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;

      > button {
        width: initial;
        margin-bottom: 0;
      }
    `}
  `}
`
