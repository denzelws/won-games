import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  backgroundImage: string
  floatImage?: string
  alignment?: 'right' | 'left'
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  backgroundImage,
  floatImage,
  alignment = 'right',
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: HighlightProps) => (
  <S.Wrapper alignment={alignment} backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
