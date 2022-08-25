import Head from 'next/head'
import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx} from '@emotion/react'
import { LayoutSection, LayoutSectionR, LayoutSectionItem } from '../containers'
import { Button, Hr, Img } from '../components/HtmlElements'
import { MuiTabsFilled , HealthBanner , MuiStepper } from '../components/Static'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutSection height="400" imgUrl="/imgs/bgs/1.jpg">
        <h1 css={css`height:100%; text-shadow: 3px 2px 3px white;`}>
          All Services in the comfort of your home
        </h1>
      </LayoutSection>
      <LayoutSectionR isRow height="600">
        <LayoutSectionItem maxWidth='500'>
          <p>
            <strong css={css`font-weight: bold;font-size: large;`}>Matrix Home Health</strong> primary goal is to provide home health care services to adults 18 years and older who are well enough to leave a hospital but who still requires assistance with medical needs. In order to qualify for home health services the following criteria should be met: The patient be homebound (unable to leave home without assistant) With a medical condition that requires restorative or rehabilitative services prescribed by a physician. With a physical and/or mental impairment that hinders activities of daily living, but not serious enough to require 24 - hour institutionalization. With a high risk potential for medical deterioration. With a reasonable expectation that have health services will maintain or improve current level of functioning.
          </p>
        </LayoutSectionItem>
        <LayoutSectionItem maxWidth='500'>
          <Img imgUrl="/imgs/bgs/2.jpg" width='400' />
          <br />
          <Button widthAll buttonType="dark">Get Cared for a loved one </Button>
        </LayoutSectionItem>
      </LayoutSectionR>
      <HealthBanner />
      <LayoutSectionR >
        <h1 css={css`text-shadow: 3px 2px 3px gray;`}>Our services</h1>
        <h4>Whatever your needs, we are here with the care that is right for you.</h4>
        <Hr isDark />
        <p>provides skilled and supportive services through our handpicked,
          competent staff. All employees of Matrix Home Health are bonded,
          provided with worker’s compensation and professional liability
          insurance
          </p>
      </LayoutSectionR>
      <LayoutSectionR isRow>
        <LayoutSectionItem maxWidth='330'>
          <Img imgUrl="/imgs/bgs/3.jpg" width='300' height='200' />
          <h4>Home Health Care</h4>
          <Hr isDark />
          <p css={css`height:200px`}>  We help people recover from illness, injury or surgery, avoid unnecessary rehospitalization and manage long-term conditions with nursing, therapy and other services at home, all coordinated with physicians and other healthcare providers.
            </p>
          <Button widthAll buttonType="dark">
            Home Health Care
            </Button>
        </LayoutSectionItem>
        <LayoutSectionItem maxWidth='330'>
          <Img imgUrl="/imgs/bgs/4.jpg" width='300' height='200' />
          <h4>Palliative Care</h4>
          <Hr isDark />
          <p css={css`height:200px`}>
            Palliative care provides patients with relief from the symptoms, pain and stress of a serious illness—whatever the diagnosis.
            </p>
          <Button widthAll buttonType="light">
            Palliative Care
            </Button>
        </LayoutSectionItem>
        <LayoutSectionItem maxWidth='330'>
          <Img imgUrl="/imgs/bgs/5.jpg" width='300' height='200' />
          <h4>Hospice Care</h4>
          <Hr isDark />
          <p css={css`height:200px`}>
            We are here to provide physical, emotional, and spiritual care and support during a life-limiting illness, along with help for families and caregivers.
            </p>
          <Button widthAll buttonType="main">
            Hospice Care
            </Button>
        </LayoutSectionItem>
      </LayoutSectionR>
      <HealthBanner />
      <LayoutSectionR isRow height="600">
        <LayoutSectionItem maxWidth='500'>
          <h4>Our Insurance Contracts</h4>
          <Hr isDark />
          <p>
            We are Medi-Cal and Medicare certified agency which all the eligible patients under Medicaid and Medicare are able to receive our services without any out-of-pocket payment “100% paid by Medicare”. works alongside other type of health insurances and workers compensation programs and you, our clients patients, to simplify the process of reimbursement, claim, coverage identification, and other concerns related to using your insurance as payment for services procured. Currently, we accept following insurances:
          </p>
        </LayoutSectionItem>
        <LayoutSectionItem maxWidth='500'>
          <Img imgUrl="/imgs/bgs/6.jpg" width='400' />
          <br />
          <Button widthAll buttonType="dark">Contact US for more details</Button>
        </LayoutSectionItem>
      </LayoutSectionR>
      <LayoutSectionR height="600">
        <MuiTabsFilled />
      </LayoutSectionR>
      <LayoutSectionR imgUrl="/imgs/bgs/7.jpg">
         <LayoutSectionItem maxWidth='500' isBlur>
          <h4>What People Say About Us</h4>
          <Hr isDark />
         <MuiStepper />
        </LayoutSectionItem>
      </LayoutSectionR>
    </>
  )
}
