import Image from "next/image";

export default function Img({src,alt,width,height,style = null,fill}) { 
    return ( 
      <> 
        <Image
          src={src} 
          alt={alt} 
          width={width} 
          height={height} 
          priority 
          style={style}
          fill={fill}
        /> 
      </> 
    ) 
  }