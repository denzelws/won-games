import { Story, Meta } from '@storybook/react'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<EmptyProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Empty {...args} />
  </div>
)

Default.args = {
  title: 'Your wishlist is empty',
  description: 'Games added to your wishlist will appear here',
  hasLink: true
}
