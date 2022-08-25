import React from "react";

const user = () => {
  return <div>user</div>;
};

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
    },
  };
}
export default user;
