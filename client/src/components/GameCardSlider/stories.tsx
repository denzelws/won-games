import { Story, Meta } from '@storybook/react'
import { GameCardProps } from 'components/GameCard'
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
  },
  {
    title: 'Project Winter',
    developer: 'GearBox Software',
    img: '/img/project-winter.png',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 100,00'
  },
  {
    title: 'Project Winter',
    developer: 'GearBox Software',
    img: '/img/project-winter.png',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 100,00'
  },
  {
    title: 'Project Winter',
    developer: 'GearBox Software',
    img: '/img/project-winter.png',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 100,00'
  },
  {
    title: 'Project Winter',
    developer: 'GearBox Software',
    img: '/img/project-winter.png',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 100,00'
  },
  {
    title: 'Project Winter',
    developer: 'GearBox Software',
    img: '/img/project-winter.png',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 100,00'
  }
]

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={items} {...args} />
  </div>
)
