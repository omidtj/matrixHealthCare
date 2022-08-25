import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Button, Hr, Img } from '../../components/HtmlElements'
import { LayoutSectionR, LayoutSectionItem } from '../../containers'
const Volunteer = () => {
    return (
        <>
            <LayoutSectionR withBG>
                <h2 css={css`color:white`}>VOLUNTEER OPPORTUNITY</h2>
            </LayoutSectionR>
            <LayoutSectionR isRow>
                <LayoutSectionItem maxWidth='500'>
                    <p>
                    <strong css={css`font-weight: bold;font-size: large;`}>
                    The following are a few examples of the many ways in which volunteers can participate with hospice:
                    </strong><br />
                    Visiting or sitting with patients,<br />
                    Reading to, playing games or working on arts and crafts with patients,<br />
                    Light housekeeping,<br />
                    Preparing meals,<br />
                    Providing clerical support in the hospice office 
                   </p>
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='500'>
                    <Img imgUrl="/imgs/bgs/17.jpg" width='400' />
                    <br />
                    <Button widthAll buttonType="dark">Send us your CV</Button>

                </LayoutSectionItem>
                <Hr isDark />
                <LayoutSectionItem maxWidth='1000'>
                  
                        <h4 css={css`text-align:left`}>VOLUNTEER TRAINING AND SUPPORT</h4>
                        <p>
                        Our comprehensive volunteer training program includes instruction in: Hospice philosophy ,
                        Goals and services,
                        Concepts of grief, death and dying,
                        Communications skills,
                        Care and comfort measures,
                        Patient and family rights,
                        Psychosocial and spiritual issues related to death and dying,
                        Universal precautions and safety,
                        HIPAA regulations,
                        Ongoing training and support is available to all of our hospice volunteers.
                        </p>
                        <h4 css={css`text-align:left`}>BENEFITS OF VOLUNTEERING</h4>
                        <p>
                        Our hospice volunteers experience spiritual growth as well as gain personal satisfaction from knowing that they have made a difference in someone’s life. Additionally, our volunteers become involved in their communities and gain a better understanding of hospice care. Each volunteer’s tasks are tailored to their interests, skills and talents.
                        </p>
                        <h4 css={css`text-align:left`}>GROUP PARTICIPATION</h4>
                        <p> There are many service opportunities for social clubs, senior citizen groups, civic organizations and youth groups. Presentations on hospice and volunteer opportunities may be arranged by calling your local North Yalobusha Hospice &#38; Palliative Care, Inc. office.</p>
                       
                        <h4 css={css`text-align:left`}>OUR FOCUS</h4> 
                        <p>
                        Our goal is to ensure quality of life to patients who are dealing with a limited life expectancy. We strive to relieve the patient of pain while providing essential physical, emotional, social and spiritual support to patients and their families. Our volunteers play an indispensable role in helping the Hospice team achieve these goals. 
                        </p>        ​ ​
                     
                   
                </LayoutSectionItem>
            </LayoutSectionR>
        </>
    )
}

export default Volunteer
