import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
}

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) => (
  <S.Wrapper>
    <S.Input id={labelFor} type="checkbox" />
    {!!labelFor && (
      <S.Label labelColor={labelColor} htmlFor={labelFor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
)

export default Checkbox
