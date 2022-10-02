import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  greaterThan?: breakpoint
  lessThan?: breakpoint
}

const mediaMatchModifiers = {
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)` display: block `}
  `,
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)` display: block `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ greaterThan, lessThan }) => css`
    display: none;

    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
  `}
`
