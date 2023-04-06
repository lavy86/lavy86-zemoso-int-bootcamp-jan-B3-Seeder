import React from 'react'
import { Meta } from '@storybook/react'
import MuiButton from '.'

export default {
  component: MuiButton,
  title: 'Button',
} as Meta

export const Primary = () => <MuiButton />
