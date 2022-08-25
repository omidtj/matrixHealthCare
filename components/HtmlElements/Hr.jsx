/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
const Hr = ({isDark}) => {
 
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <hr
        css={css`
        border: 0; 
        width:100%
        padding:10px;
        height: 1px;
        ${isDark ? `background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));` 
        :
         `background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));`}
        
        `}
      />
    
    </div>
  )
}

export default Hr
