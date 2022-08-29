import React from "react";
import Box from '@mui/material/Box';
import AllUserTable from "../../components/Customs/AllUserTable";
const allUser = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',m:2,width:'100%'}}>
      <AllUserTable />
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

export default allUser;
