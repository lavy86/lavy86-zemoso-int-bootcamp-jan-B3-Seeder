import type { Meta, StoryObj } from '@storybook/react'
import Icons from '.'
import SeederLogo from '../../../assets/icons/seederlogo.svg'

const meta: Meta<typeof Icons> = {
     
    title: 'Icons',
    component: Icons,
  };
  export default meta;
  type Story = StoryObj<typeof Icons>;
  export const DefaultIcon: Story ={
    args:{
      src:`${SeederLogo}`,
      alt:'Seeder Logo'
    }
  }
  export const CustomSizeIcon: Story ={
    args:{
      src:`${SeederLogo}`,
      alt:'Seeder Logo',
      width:200,
      height:200,
    }
  }
