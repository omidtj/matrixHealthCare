import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button, Hr, Img } from "../components/HtmlElements";
import { LayoutSectionR, LayoutSectionItem } from "../containers";

const About = () => {
  return (
    <>
      <LayoutSectionR withBG>
        <h2
          css={css`
            color: white;
          `}
        >
          ABOUT US
        </h2>
      </LayoutSectionR>
      <LayoutSectionR>
        <h4>
          Matrix Hospice Inc. has earned the joint Commission Gold Seal of
          Approval
        </h4>
        <Img imgUrl="/imgs/bgs/8.jpg" width="150" />
      </LayoutSectionR>
      <LayoutSectionR isRow>
        <LayoutSectionItem maxWidth="500">
          <h4>Our Story of Caring </h4>
          <Hr isDark />
          <p>
            Whatever your needs, we are here with the care that is right for
            you. Using our outcome directed treatment module, our goal is to
            empower our clients to regain independence in their home while
            increasing /improving comfort and the quality of health. Our focus
            is on providing medical and non-medical services and safe, secure
            and cost-effective continuity of care. Matrix home health adheres to
            meet, and/ or exceed national benchmarks for quality care as
            established by accreditation and regulatory agencies. All employees
            of Matrix Home Health are bonded and are provided with Workers
            Compensation and Professional Liability Insurance. All staff is
            required to pass an examination, submit at least two past employers
            as references, and maintain valid professional licenses.
          </p>
        </LayoutSectionItem>
        <LayoutSectionItem maxWidth="500">
          <Img imgUrl="/imgs/bgs/9.jpg" width="400" />
          <br />
          <p
            css={css`
              font-weight: bold;
            `}
          >
            &quot; Your loving and caring legacy will always live on through our
            dedicated care and services that we provide through Matrix Home
            Health, Matrix Palliative care and Matrix Hospice Inc. &quot;
          </p>
        </LayoutSectionItem>
      </LayoutSectionR>
    </>
  );
};

export default About;
