import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.white};
  `}
`

export const Badge = styled.div`
  ${({ theme }) => css`
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: 50%;
    font-size: 1rem;
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
  `}
`
