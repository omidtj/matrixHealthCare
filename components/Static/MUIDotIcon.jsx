import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import CircleIcon from '@mui/icons-material/Circle';
const MUIDotIcon = () => {
    return (
       <>
        <span css={css`margin-right:10px`}><CircleIcon sx={{ fontSize: 10}}/></span>
       </>
    )
}

export default MUIDotIcon
