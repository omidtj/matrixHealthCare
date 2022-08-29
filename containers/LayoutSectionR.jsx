import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css , jsx  } from '@emotion/react'
import lightTheme from '../styles/theme/lightTheme'
const LayoutSection = ({ children,height,imgUrl,isBlur , isRow , withBG , withDBG , alignItems='center' , justifyContent='center' }) => {
    
    return (
        <section css={css`
                    width:100%;
                    text-align:center;
                    ${height ? `height:${height}px;`:'height:100%;'}
                    min-height:100%;
                    position: relative;

                    ${withBG && `  background-color: #ff3c3f;
                    background-image: linear-gradient(225deg, #ff3c3f 0%, #5b3e76 50%, #115786 100%);
                    color:white;                    
                    `}
                    ${withDBG && `background-color: ${lightTheme.palette.primary.main};
                                                color:lightgray;`}
                    ${imgUrl && `   background-image: url(${imgUrl});
                                    background-size: cover;
                                    background-repeat: no-repeat;
                                    background-position: center center;
                    `}
                    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                    z-index: 1;
                    @media (max-width: 1200px) {
                        height:auto;
                      }
        `}>
            <div css={css`  
            width:90%; 
            ${isBlur && `  background:hsl(0 0% 100% / 0.2);
                           backdrop-filter: blur(1rem);`}
            margin:0 auto;
            padding:10px;              
            display:flex;
            justify-content: ${justifyContent};
            align-items: ${alignItems};
            min-height:100%;
            text-align:center;
            height:${height}px;
            flex-wrap: wrap;
            flex-direction:${isRow ? 'row':'column' } ;
            @media (max-width:1200px) {
                width:100%;
                height:auto;
              }
            `}>
                {children}
            </div>
        </section>
    )
}

export default LayoutSection


