import type { Meta, StoryObj } from '@storybook/react'
import Avatar from '.'
import AvatarLogo from '../../../assets/icons/AvatarLogo.svg'
const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
}
export default meta
type Story = StoryObj<typeof Avatar>

export const Rounded: Story = {
  args: {
    src: AvatarLogo,
    alt: 'Avatar Logo',
    variant: 'rounded',
    width: 100,
    height: 100,
    borderRadius:10,
  },
}
export const Circular: Story = {
  args: {
    src: AvatarLogo,
    alt: 'Avatar Logo',
    variant: 'circular',
    width: 100,
    height: 100,
  },
}
export const Square: Story = {
  args: {
    src: AvatarLogo,
    alt: 'Avatar Logo',
    variant: 'square',
    width: 100,
    height: 100,
  },
}
