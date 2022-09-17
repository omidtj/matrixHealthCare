/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
const Img = ({imgUrl,width,height='auto'}) => {
 
  return (
    <img src={imgUrl} css={css`width:270px;
    height:${height}px;
    object-fit:cover;
    object-position: top top;
    margin:10px;
    padding:10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    @media (min-width: 440px) {
      font-size: 50px;
      width:${width}px;
    }
    `}  />
    
  )
}

export default Img
