/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from "react";
import { LayoutSectionR, LayoutSectionItem } from '../../containers'
import { RegisterForm } from '../../components/Customs'

const Register = () => {
  return (
    <>
      <LayoutSectionR>
        <h2>
          Register
        </h2>
      </LayoutSectionR>
      <LayoutSectionR
        imgUrl="/imgs/bgs/21.jpg"
        justifyContent="center"
        isRow
      >
        <LayoutSectionItem maxWidth="500" isBlur>
          <RegisterForm />
        </LayoutSectionItem>
      </LayoutSectionR>
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      adminOnly: true,
    },
  };
}

export default Register;
