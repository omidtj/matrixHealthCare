import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css , jsx } from '@emotion/react'
import { LayoutSectionR, LayoutSectionItem } from '../../containers'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import CallIcon from '@mui/icons-material/Call';
import CopyrightIcon from '@mui/icons-material/Copyright';
import WebIcon from '@mui/icons-material/Web';
import FaxIcon from '@mui/icons-material/Fax';
import {Stack } from '@mui/material';
import Hr from '../HtmlElements/Hr'
const Footer = () => {
    return (
        <LayoutSectionR withDBG>
            <LayoutSectionR height='200'>
                <h5 css={css`font-size:small;font-weight: bold;`}>NON DISCRIMINATION</h5>
                <p css={css`font-size:smaller;font-weight:100;margin:10px`}>
                    Matrix HomeHealth,Palliative Care and Hospice Inc. does not discriminate against any person on the basis of race, color,
                    national origin, disability, ability to pay, or age in admission, treatment, or participation in its programs,
                    services and activities, or in employment.
                </p>
            </LayoutSectionR>
            <LayoutSectionR isRow alignItems='flex-start'>
                <LayoutSectionItem maxWidth='200'>
                    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                      <WebIcon />  
                      <h5 css={css`font-size:small;font-weight: bold;`}>
                          Follow us
                      </h5>
                    </Stack>
                    <Hr />
                    <FacebookIcon /><br />
                    <InstagramIcon />
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='200'>
                    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <LanguageIcon /> <h5 css={css`font-size:small;font-weight: bold;`}>Languages </h5>
                    </Stack>
                    <Hr />
                    <p css={css`font-size:smaller;font-weight:100;margin:10px;text-align:center`}>
                      English,Spanish,Farsi 
                      French,Assyrian,Russian 
                      Tagalog,Armenian
                     and others by request
                    </p>
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='200'>
                    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                        <ContactPageIcon />    
                        <h5 css={css`font-size:small;font-weight: bold;`}>Contact Us</h5>
                    </Stack>
                    <Hr />
                    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                        <CallIcon />
                        <a href="tel:3109972549">310 997 2549</a>
                    </Stack>
                    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                        <FaxIcon />
                        <a href="tel:3109972546">310 997 2546 </a>
                    </Stack>
                    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                        <EmailIcon />
                        <a href="mailto:info@matrixhp.com"> info@matrixhp.com</a>
                    </Stack>
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='200'>
                     <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                        <BusinessIcon />    
                        <h5 css={css`font-size:small;font-weight: bold;`}>Address</h5>
                    </Stack>
                    <Hr />
                    <p css={css`font-size:smaller;font-weight:100;margin:10px;text-align:center`}>
                             17141 Ventura Blvd, Suite 209 , Encino, CA, 91356<br />
                             #204 Home Health <br />
                             #205 Hospice <br />
                             #210 Palliative Care<br />
                    </p>
                </LayoutSectionItem>
            </LayoutSectionR>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
              Copyrights
              <CopyrightIcon />
              2021 - All rights reserved
            </Stack>
        </LayoutSectionR>
    )
}

export default Footer
