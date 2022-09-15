import React from 'react'
import {Stack} from '@mui/material'
import ErrorIcon from "@mui/icons-material/Error";

const ErrorMsg = ({errTXT, errColor}) => {
    return (
        <Stack
          direction="row"
          spacing={1}
          m={1}
          sx={{
            color: errColor,
            alignItems: "flex-end",
          }}
        >
          <ErrorIcon  fontSize="small"/>
          <p style={{ fontSize: "small",fontWeight:'bold' }}>{errTXT}</p>
        </Stack>
      );
}

export default ErrorMsg