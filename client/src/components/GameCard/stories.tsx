import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'
import { CartContextData } from 'hooks/use-cart'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    slug: 'resident-evil',
    title: 'Resident Evil',
    developer: 'GearBox Software',
    img: '/img/resident-evil-background.png',
    price: 235,
    promotionalPrice: 200
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const IsInCart: Story<GameCardProps & CartContextData> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}

IsInCart.args = {
  isInCart: () => true
}

Default.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}
