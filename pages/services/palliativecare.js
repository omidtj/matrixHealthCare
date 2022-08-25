import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Button, Hr, Img } from '../../components/HtmlElements'
import { LayoutSectionR, LayoutSectionItem } from '../../containers'
import { MUIDotIcon } from '../../components/Static'

const PalliativeCare = () => {
    return (
        <>
            <LayoutSectionR withBG>
                <h2 css={css`color:white`}>PALLIATIVE CARE</h2>
            </LayoutSectionR>
            <LayoutSectionR isRow>
                <LayoutSectionItem maxWidth='500'>
                    <h4>WHAT IS PALLIATIVE CARE? </h4>
                    <p>
                    Palliative care is a resource for anyone living with a serious illness, such as heart failure, chronic obstructive pulmonary disease, cancer, dementia, Parkinson’s disease, and many others. Palliative care can be helpful at any stage of illness and is best provided from the point of diagnosis. In addition to improving quality of life and helping with symptoms, palliative care can help patients and family understand their choices for medical treatment. The organized services available through palliative care may be helpful to any older person having a lot of general discomfort and disability late in life. Palliative care can be provided along with curative treatment and does not depend on prognosis. 
                    </p>
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='500'>
                    <Img imgUrl="/imgs/bgs/5.jpg" width='400' />
                </LayoutSectionItem>
                <Hr isDark />
                <LayoutSectionItem maxWidth='1000'>
                <h4>HOW ARE HOSPICE AND PALLIATIVE CARE DIFFERENT? </h4>
                    <p>
                    Hospice can be thought of as a specific type of palliative care. For example, hospice patients are usually referred when doctors believe they have six months or less to live, where palliative care is not subject to any time restrictions. Palliative care can apply over a period of weeks, months, or even years, and can work alongside a long-term treatment plan that aims at patient recovery and healing. Palliative care can assist with life-limiting conditions, and can also apply when active treatment to combat that illness is still being undertaken. Like hospice, palliative care can include pain management, help with understanding care options towards the end of life, help at home, and emotional support for patients and for loved ones. Family, friends, and community members are more likely to be involved in hospice care alongside doctors and nurses. Depending on insurance arrangements, eligibility may also be different for hospice and palliative care. 
                    </p>

                </LayoutSectionItem>
                <Hr isDark />
                <LayoutSectionItem maxWidth='1000'>
                <h4>DO YOU NEED HOSPICE OR PALLIATIVE CARE? </h4>
                    <p>
                    If you are unsure about which options you should be looking into, either for yourself or for a loved one, don’t hesitate to get in touch. Even if it’s not time for hospice yet, understanding the choices and having a plan can reduce stress and help everyone feel better. 
                    </p>

                </LayoutSectionItem>
                <Hr isDark />
                <LayoutSectionItem maxWidth='500'>
                    <h4>THE GOALS OF PALLIATIVE CARE </h4>
                    <p>
                    Palliative care is a broader philosophy that includes hospice care. Palliative Care can be used as a separate area of medical practice while the patient is receiving treatment. As with hospice, palliative care aims to improve quality of life from every different angle. It can include the following goals: <br />
                    
                    <MUIDotIcon />To keep pain to a minimum, using clinical methods<br />
                    <MUIDotIcon />To treat symptoms and improve health where possible<br />
                    <MUIDotIcon />To assist with mobility and safety<br />
                    <MUIDotIcon />To allow meaningful interactions between patients and their friends, family, and community<br />
                    <MUIDotIcon />To improve spiritual and emotional well-being through counselling, art and pet therapy programs, and more<br />
                    <MUIDotIcon />To allow both patients and caregivers to understand and express their feelings at this most difficult of times<br />
                    <MUIDotIcon />To ensure patients and caregivers understand what is happening and make informed, well-thought-through choices<br />
                    <MUIDotIcon />To help reduce the sometimes heavy burden on caregivers through training, respite care or everyday hands-on assistance<br />

                    </p>
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='500'>
                    <Img imgUrl="/imgs/bgs/14.jpg" width='400' />
                </LayoutSectionItem>
                <Hr isDark />
                <LayoutSectionItem maxWidth='500'>
                    <p>
                    Our team can help you determine if this care is right for you. To find out more, contact us to discuss you or your loved one specific needs. 
                    </p>
                    <br />
                    <Button widthAll buttonType="dark">Connect With Us Today </Button>

                </LayoutSectionItem>
            </LayoutSectionR>
        </>
    )
}

export default PalliativeCare
