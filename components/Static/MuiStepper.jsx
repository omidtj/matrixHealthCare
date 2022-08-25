import * as React from 'react';
import {Box,MobileStepper,Paper,Typography,Button,Avatar,Stack}  from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {useTheme } from '@emotion/react'
const steps = [
  {
    label: 'Patricia H',
    description: `“I am delighted to say that it is an honor to have Matrix Home Health as our home health provider at home.
    Their staff are professional , efficient and punctual. My husband and I are very satistied with their services and we are grateful and would not trade them for any other agencies.”`,
  },
  {
    label: 'Anna S',
    description:
      `“I am very satisfied with Matrix Palliative Care. Visiting Staff were so pleasant , courteous , and skilled.
      I have been to several home health agencies but none of them were specialized in palliative care and Matrix Pallitive Care is the BEST!”`,
  },
  {
    label: 'Danielle S',
    description: `“The hospice caregivers that took care of my husband are truly angels from above here with us on earth. This was the toughest situation,
    but they managed to guide us through this life experience.”`,
  },
  {
    label: 'Susan ( Margaret W. daughter )',
    description: `“It has been 2 weeks now.I brought home my mother's ashes on Friday and I have her death certificates.
    It still does not feel real. But I am so grateful for everything you did to help me keep mom at home. You were really great. Thank you!”`,
  },
  {
    label: 'Kathy (Rosemary A. Daughter)',
    description: `“For the past few years, My mom lived at her home in Rancho Palos Verdes under the care of Matrix Home Health then Matrix Palliative care and finally Matrix Hospice Inc.
    Too numerous angels to individually name, each of whom she personally treasured for their continued care, support and exceptional comfort care at the end!”`,
  },
];

export default function MuiStepper() {
  const Theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          <Avatar />
          <Typography> {steps[activeStep].label}</Typography>
        </Stack>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 ,color:'white',bgcolor:Theme.palette.primary.main }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next 
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
         
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
}
