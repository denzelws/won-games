import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'
import items from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...items }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const withFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

withFloatImage.args = {
  floatImage: '/img/Image.png'
}
