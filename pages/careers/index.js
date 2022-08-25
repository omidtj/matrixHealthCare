import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Button, Hr, Img } from '../../components/HtmlElements'
import { LayoutSectionR, LayoutSectionItem } from '../../containers'

const AssistedLiving = () => {
    return (
        <>
            <LayoutSectionR withBG>
                <h2 css={css`color:white`}>CAREERS</h2>
            </LayoutSectionR>
            <LayoutSectionR isRow>
                <LayoutSectionItem maxWidth='1000'>
                    <p>
                        Each of our team members has a special part to play in our mission of providing exceptional, compassionate healthcare at home to thousands of patients and families each and every day. We are looking for talented, passionate people - from nurses to social workers to therapists to aides – who can help us make a difference where it matters most, to our patients and their families.
                   </p>
                   <br />
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='500'>
                    <h4>Current Openings Roles</h4>
                    <Hr isDark />
                    <p>
                        <br />
                        <strong css={css`font-weight: bold;font-size: large;`}>
                            Registered Nurses Registered Nurse (RN)
                        </strong><br />
                        The Registered Nurse will use the nursing process to assess and manage the patient’s medical needs. The Registered Nurse identifies other disciplines needed to maximize patient’s progress toward goals. The Registered Nurse will be the patient’s advocate and will be in communication with the primary MD and Case Manager, as the patient’s condition requires.
​ ​                       <br /><br />
                        <strong css={css`font-weight: bold;font-size: large;`}>
                            Licensed Vocational Nurses (LVN)
                        </strong><br />
                        The Licensed Vocational Nursing provides skilled nursing care to patients following a plan of care established by the physician in consultation with the Case Manager/RN and the interdisciplinary team members.
                        ​<br /><br />
                        <strong css={css`font-weight: bold;font-size: large;`}>
                            Physical Therapists (PT)
                        </strong><br />
                        Work with patients and families to promote daily living activities. Teaching patients how to properly use therapeutic exercise techniques. Contact us for further information concerning the position.
                        ​ ​<br /><br />
                        <strong css={css`font-weight: bold;font-size: large;`}>
                            Speech &#38; Language Pathologists (ST)
                        </strong><br />
                        Speech services begin with initial screening for communication and , swallowing disorders and continue with assessment and diagnosis, consultation for the provision of advice regarding management, intervention , counseling and treatment through follow-up visits.
                        ​<br /><br />
                        <strong css={css`font-weight: bold;font-size: large;`}>
                            Home Health Aid (HHA)
                        </strong><br />
                        State certified, the Home Health Aide has been certified by State and trained to provide hands-on, personal care providing physical and emotional support to patients at their home under the direction of a registered nurse. Additional services such as light housekeeping or laundry may also be required depending on the customized plan of care as outlined by the registered nurse.
                        ​ <br /><br />
                        <strong css={css`font-weight: bold;font-size: large;`}>
                            Homemakers/Companions
                        </strong><br />
                        Respite Care Homemaker – Companion may not provide any personal care or perform any duties that require the training, skill or competency of a home health aide, licensed nurse or certified therapist unless directed by agency staff with further orientation and education.

                    </p>
                </LayoutSectionItem>
                <LayoutSectionItem maxWidth='500'>
                    <Img imgUrl="/imgs/bgs/16.jpg" width='400' />
                </LayoutSectionItem>
            </LayoutSectionR>
        </>
    )
}

export default AssistedLiving
