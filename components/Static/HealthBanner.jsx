import React from 'react'
import LayoutSectionR from '../../containers/LayoutSectionR'
import Hr from '../HtmlElements/Hr'
import PlaceIcon from '@mui/icons-material/Place';
import {Stack,Box } from '@mui/material';

const style={ display:'flex',
              direction:"row",
              justifyContent:"center", 
              alignItems:"center",
              flexWrap:'wrap',
              gap:3
}
const HealthBanner = () => {
    return (
        <LayoutSectionR withBG>
            <h4>Home Health Care, Palliative Care, Hospice Care </h4>
            <Hr />
            <Box sx={style}>
                <Stack spacing={1} direction="row" >
                        <PlaceIcon />
                        <span> Los Angeles County</span>
                </Stack>
                <Stack spacing={1} direction="row"  >
                        <PlaceIcon />
                        <span> San Fernando Valley</span>
                </Stack>
                <Stack spacing={1} direction="row"  >
                        <PlaceIcon />
                        <span> San Bernardino</span>
                </Stack>
                <Stack spacing={1} direction="row"  >
                        <PlaceIcon />
                        <span>  South Bay area</span>
                </Stack>
                <Stack spacing={1} direction="row"  >
                        <PlaceIcon />
                        <span> Orange County</span>
                </Stack>
            </Box>
        </LayoutSectionR>
    )
}

export default HealthBanner
