import React from "react";
import Box from '@mui/material/Box';
import {ExpireTable} from "../../components/Customs";
const Expire = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
      <ExpireTable />
    </Box>
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

export default Expire;
