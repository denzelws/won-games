import 'match-media-mock'
import { render } from 'utils/test-utils'

import GameCardSlider from '.'

const items = [
  {
    title: 'Resident Evil',
    developer: 'GearBox Software',
    img: '/img/resident-evil-background.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Red Dead Redemption',
    developer: 'GearBox Software',
    img: '/img/red-dead-gamecard.png',
    price: 'R$ 300,00',
    promotionalPrice: 'R$ 250,00'
  },
  {
    title: 'Borderlands',
    developer: 'GearBox Software',
    img: '/img/borderlands.png',
    price: 'R$ 270,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Project Winter',
    developer: 'GearBox Software',
    img: '/img/project-winter.png',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 100,00'
  }
]

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = render(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })
})
