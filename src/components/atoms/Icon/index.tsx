import React from 'react'

interface IconProps 
{
    src: string,
    width?:number,
    height?:number,
    alt?:string
}

const Icon = ({src,width,height,alt}:IconProps) => {
  return (
    <img src={src} alt={alt} width={width} height={height}/>
  )
}

export default Icon
