import React from "react";

const admin = () => {
  return <div>admin</div>;
};

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      adminOnly: true,
    },
  };
}

export default admin;
