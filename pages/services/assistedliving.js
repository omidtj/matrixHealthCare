import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Button, Hr, Img } from '../../components/HtmlElements'
import { LayoutSectionR, LayoutSectionItem } from '../../containers'
import ApartmentIcon from '@mui/icons-material/Apartment';
const AssistedLiving = () => {
    return (
        <>
            <LayoutSectionR withBG>
                <h2 css={css`color:white`}>ASSISTED LIVING</h2>
            </LayoutSectionR>
            <LayoutSectionR isRow>
                <LayoutSectionItem maxWidth='500'>
                    <p>
                    We provide housing and care advice for elder and disabled adult clients. Through the Assisted Living Waiver (ALW), Medicaid Waiver services, we seek to place clients into care settings that include: Assisted Living Facilities, Board and Cares, Residential Care Facilities for the Elderly (RCFE’s), and Adult Residential Facilities (ARF). We accept calls from Client loved ones, Hospitals, Psychiatric facilities, board and cares, Adult Residential Facilities, Assisted Living Facilities, and Skilled Nursing Facilities, Health Plans, and Social Workers from insurance companies
                   </p>
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='500'>
                    <Img imgUrl="/imgs/bgs/15.jpg" width='400' />
                </LayoutSectionItem>
                <Hr isDark />
                <LayoutSectionItem maxWidth='1000'>
                    <ApartmentIcon sx={{ fontSize: 50}}/>
                    <br/>
                    <p css={css`font-weight:bold;`}>
                        Our geographic areas include:<br/>
                        Los Angeles, San Bernandino, and Orange Counties. 
                    </p>
                   
             
                </LayoutSectionItem>
            </LayoutSectionR>
        </>
    )
}

export default AssistedLiving
