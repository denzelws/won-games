import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <Container>
    <Menu />
    {children}
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </Container>
)

export default Base
