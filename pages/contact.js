/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from 'react'
import { LayoutSectionR, LayoutSectionItem } from '../containers'
import { ContactForm } from '../components/Customs'
const Contact = () => {
    return (
        <>
            <LayoutSectionR withBG>
                <h2 css={css`color:white`}>CONTACT US</h2>
            </LayoutSectionR>
            <LayoutSectionR isRow>
                <LayoutSectionItem maxWidth='1000'>
                    <p>
                        We are once phone call away to help! If your have requirements/queries about our services; fill up the contact form below and we'll do our best to reply within 24 hours Alternatively simply pickup the phone and give us a call.<br /><br />

                        Serving Los Angeles County, San Fernando Valley, San Bernardino, South Bay and Orange County
                    </p>
                </LayoutSectionItem>
            </LayoutSectionR>
            <LayoutSectionR imgUrl="/imgs/bgs/20.jpg" justifyContent='flex-start' isRow>
                <LayoutSectionItem maxWidth='500' isBlur>
                    <ContactForm />
                </LayoutSectionItem>
            </LayoutSectionR>
        </>
    )
}

export default Contact
