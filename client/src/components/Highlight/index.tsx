import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  backgroundImage: string
  floatImage?: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  backgroundImage,
  floatImage,
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage src={floatImage} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
