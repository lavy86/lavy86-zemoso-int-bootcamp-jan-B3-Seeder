import React from 'react'
import Image from '../../assets/images/logo.svg'
interface Props {
  src?: string
}
const Icon = (props: Props) => {
  return (
    <div>
      <img src={Image1} alt="Icon" />
    </div>
  )
}

export default Icon
