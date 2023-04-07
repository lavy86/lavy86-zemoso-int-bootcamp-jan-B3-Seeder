import React from 'react'
import { Avatar as Avatarr } from '@mui/material'
import { styled } from "@mui/material/styles";
interface AvatarProps 
{
    src:string,
    alt?:string,
    variant?: "circular" | "rounded" | "square",
    width?:number,
    height?:number,
    borderRadius?:number
}


const Avatar = ({src,alt,variant,width,height,borderRadius}:AvatarProps) => {
 
    const AvatarIcon = styled(Avatarr)({
        width:`${width}px`,
        height:`${height}px`, 
        borderRadius:`${borderRadius??0}px` 
           
    });
 
    return (
    
     <AvatarIcon src={src} alt={alt} variant={variant}/>
  )
}

export default Avatar
