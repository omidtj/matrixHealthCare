/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
const LayoutSectionItem = ({ children , maxWidth , isBlur }) => {
  return (
    <div css={css`max-width:${maxWidth}px;
                  margin:10px; padding:10px;
                  min-height:100%;height:100%;
                  ${isBlur && `background:hsl(0 0% 100% / 0.6);backdrop-filter: blur(1rem);`}`}>
      {children}
    </div>
  )
}

export default LayoutSectionItem


