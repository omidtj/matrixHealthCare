import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button, Hr, Img } from "../../components/HtmlElements";
import { LayoutSectionR, LayoutSectionItem } from "../../containers";
import { useRouter } from "next/router";

const HomeHealth = () => {
  const router = useRouter();

  return (
    <>
      <LayoutSectionR withBG>
        <h2
          css={css`
            color: white;
          `}
        >
          HOME HEALTH CARE
        </h2>
      </LayoutSectionR>
      <LayoutSectionR isRow>
        <LayoutSectionItem maxWidth="500">
          <p>
            Homecare is health care or supportive care provided by a health care
            professionals in the individual home where the patient or client is
            living, as opposed to care provided in group accommodations like
            clinics or nursing homes. Homecare is also known as domiciliary
            care, social care or in-home care. Home health care helps patient
            remain safely at home and live as independently as possible during
            recovery from a surgery, injury or illness, managing a serious or
            chronic disease or dealing with multiple diagnoses. Matrix Home
            Health provide their patients necessary tools and resources to help
            them control their disease, achieve their attainable health goals,
            in order to live life to its fullest. Based on patient doctor’s
            orders and their clinical needs, Matrix clinical team comes to your
            home to provide health care services at the comfort of patient’s
            residence such as skilled nursing, home health aides, and physical,
            occupational and speech therapies We work with you the patient and
            patient’s physician to develop a comprehensive plan of care to
            manage medications and provide adequate teaching about patient’s
            change of condition. Our team also assist the patient to understand
            the expected course of your the illness and watch being attentive to
            all the health related warning signs and symptoms. Matrix work
            closely patient’s physician to treat potential health problems
            before they become serious.
          </p>
        </LayoutSectionItem>
        <LayoutSectionItem maxWidth="500">
          <Img imgUrl="/imgs/bgs/3.jpg" width="400" />
          <br />
        </LayoutSectionItem>
        <LayoutSectionItem maxWidth="500">
          <p
            css={css`
              font-weight: bold;
            `}
          >
            Home health care services are generally covered by Medicare Medicaid
            without any out of pocket and other Insurance plans by considering
            their deductible and co-pay. Our administriative staff can help to
            determine each patient’s service eligibility.
          </p>
          <Hr isDark />
          <p>
            Home health care services are generally covered by Medicare and many
            Medicaid and Insurance plans. Our staff can help determine each
            patient’s eligibility.
          </p>
          <br />
          <Button
            widthAll
            buttonType="dark"
            onClick={() => router.push("/contact")}
          >
            Connect With Us Today{" "}
          </Button>
        </LayoutSectionItem>
      </LayoutSectionR>
    </>
  );
};

export default HomeHealth;
