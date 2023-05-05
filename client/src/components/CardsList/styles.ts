import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    padding: 1.3rem ${theme.spacings.xsmall};

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`
