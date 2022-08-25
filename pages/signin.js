/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from "react"
import { LayoutSectionR, LayoutSectionItem } from '../containers'
import { SigninForm } from '../components/Customs'
const Signin = () => {
  return (
    <>
      <LayoutSectionR>
        <h2>
          Sign In
        </h2>
      </LayoutSectionR>
      <LayoutSectionR
        imgUrl="/imgs/bgs/21.jpg"
        justifyContent="center"
        isRow
      >
        <LayoutSectionItem maxWidth="500" isBlur>
          <SigninForm />
        </LayoutSectionItem>
      </LayoutSectionR>
    </>
  );
};

export default Signin;
