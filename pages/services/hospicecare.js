import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Button, Hr, Img } from '../../components/HtmlElements'
import { LayoutSectionR, LayoutSectionItem } from '../../containers'
import { MUIDotIcon } from '../../components/Static'

const HospiceCare = () => {
    return (
        <>
            <LayoutSectionR withBG>
                <h2 css={css`color:white`}>HOSPICE CARE</h2>
            </LayoutSectionR>
            <LayoutSectionR isRow>
                <LayoutSectionItem maxWidth='500'>
                    <p>
                    Matrix Hospice Inc. provides a special kind of compassionate care that focuses on the quality of life for patients and their caregivers who are experiencing an advanced, life limiting illness when getting better is no longer an option. Hospice care plan will try to ensure that patients suffer as little as possible and allowed to reach the end of their lives with minimum pain and suffering, and with as much dignity as possible. 
                   </p>
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='500'>
                    <Img imgUrl="/imgs/bgs/4.jpg" width='400' />
                </LayoutSectionItem>
                <Hr isDark />
                <LayoutSectionItem maxWidth='500'>
                    <Img imgUrl="/imgs/bgs/10.jpg" width='400' />
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='500'>
                    <p>
                    Our hospice care may benefit patients with various diagnoses including:<br />

                     <MUIDotIcon />Heart failure<br />
                     <MUIDotIcon />Lung problems<br />
                     <MUIDotIcon />Kidney disease<br />
                     <MUIDotIcon />Stroke<br />
                     <MUIDotIcon />Neurological conditions like Parkinson’s disease<br />
                     <MUIDotIcon />The last stages of Alzheimer’s and similar conditions<br />
                     <MUIDotIcon />Various terminal diagnosis<br />
                     <MUIDotIcon />And other serious, terminal illnesses<br />

                    We cover a wide array of services to fit the unique needs of each individual patient and their family. 
                    </p>
                </LayoutSectionItem>
                <Hr isDark />
                <LayoutSectionItem maxWidth='500'>
                    <h4>HOSPICE SERVICES INCLUDE</h4>
                    <br />
                    <p>

                    <MUIDotIcon />Pain and symptom management  <br />
                    <MUIDotIcon />Scheduled home visits  <br />
                    <MUIDotIcon />Professional staff 24/7  <br />
                    <MUIDotIcon />Medications to control the patient’s symptoms  <br />
                    <MUIDotIcon />Provides medication related to the hospice diagnosis  <br />
                    <MUIDotIcon />Physical and occupational therapy  <br />
                    <MUIDotIcon />Bereavement services: our team has experienced chaplains and social workers that provide professional counseling and grief support  <br />
                    <MUIDotIcon />Hospital inpatient services as needed  <br />
                    <MUIDotIcon />Continuous care services as needed for symptom management and intervention  <br />
                    <MUIDotIcon />Respite services as needed for family support  <br />
                    <MUIDotIcon />Spiritual support and guidance from our chaplain services  <br />
                    <MUIDotIcon />Volunteer services as requested  <br />

                    </p>
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='500'>
                    <Img imgUrl="/imgs/bgs/11.jpg" width='400' />
                </LayoutSectionItem>
                <Hr isDark />
                <LayoutSectionItem maxWidth='500'>
                    <Img imgUrl="/imgs/bgs/12.jpg" width='400' />
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='500'>
                  <p>
                  Hospice Services provided by North Matrix Hospice Inc.provided services will be covered 100% by Medicare and Medicaid. In some cases, there will be private insurances who cover a portion if not all the costs for services. The Medicare Hospice Benefit provides medical coverage for the care of patients without deductibles or co-payments. The benefit has four levels of care that are designed to allow hospice to serve as the case manager for patients in any setting.<br />
                  <strong css={css`font-weight: bold;font-size: large;`}>
                  Routine Home Care
                  </strong> is the basic level of care needed to maintain the patient in their residence or facility.<br />
                  <strong css={css`font-weight: bold;font-size: large;`}>
                  Continuous Care
                  </strong> allows hospice to place nursing services at your bedside, around the clock for short periods of time, during periods of crisis.<br />
                  <strong css={css`font-weight: bold;font-size: large;`}>
                  General Inpatient Care
                  </strong> is a level of care that enables hospice to transfer the patient to a contracted facility (hospital or skilled nursing unit) for inpatient hospice services during periods of crisis.<br />
                  <strong css={css`font-weight: bold;font-size: large;`}>
                  Respite Care
                  </strong> enables hospice to give family caregivers a short (5-day) respite by transferring the patient to a contracted facility.
                  </p>
                
                </LayoutSectionItem>
                <Hr isDark />
                <LayoutSectionItem maxWidth='500'>
                    <h4>WHO MAY QUALIFY </h4>
                    <br />
                    <p>
                    Will you or your loved one qualify for Hospice Care? Here are some of the guidelines for qualification and referrals made to Matrix Hospice Inc. If you or someone you know experiences any or all of the following, you can have then assessed for hospice care qualification: <br />
                     
                    <MUIDotIcon />Frequent hospitalizations<br />
                    <MUIDotIcon />Progressive weight loss<br />
                    <MUIDotIcon />Deteriorating mental abilities<br />
                    <MUIDotIcon />Recurrent infections<br />
                    <MUIDotIcon />Specific declining condition<br />
                    <MUIDotIcon />People with an illness causing a limited life expectancy<br />
                    <MUIDotIcon />Patient and families that have chosen symptom management rather than curative treatment<br />
                    <MUIDotIcon />Patient and families who choose no extreme measures to sustain life<br />
                    </p>
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='500'>
                    <Img imgUrl="/imgs/bgs/13.jpg" width='400' />
                    <br />
                    <Button widthAll buttonType="dark">Connect With Us Today </Button>
                </LayoutSectionItem>
            </LayoutSectionR>
            
        </>
    )
}

export default HospiceCare
