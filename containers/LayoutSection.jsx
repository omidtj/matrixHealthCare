import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
const LayoutSection = ({ children,height='300',imgUrl,isBlur,isRow }) => {
    return (
        <section css={css`
                    width:100%;
                    height:${height}px;
                    min-height:100%;
                    position: relative;
                    ${imgUrl && `   background-image: url(${imgUrl});
                                    background-size: cover;
                                    background-repeat: no-repeat;
                                    background-position: center center;
                    `}
                    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                    z-index: 1;
        `}>
            <div css={css`  
            width:90%; 
            ${isBlur && `  background:hsl(0 0% 100% / 0.2);
                           backdrop-filter: blur(1rem);`}
            margin:0 auto;
            padding:10px;              
            display:flex;
            justify-content: center;
            align-items: center;
            min-height:100%;
            height:${height}px;
            flex-wrap: wrap;
            flex-direction:${isRow ? 'row':'column' } ;
            `}>
                {children}
            </div>
        </section>
    )
}

export default LayoutSection


