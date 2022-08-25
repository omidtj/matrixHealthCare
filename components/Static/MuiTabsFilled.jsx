import React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Chip from '@mui/material/Chip';

const blue = {
    200: '#455a64',
    400: '#607d8b',
    500: '#031b2e'
};

const Tab = styled(TabUnstyled)`
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 200px;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[200]};
    color: white;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;
  gap:10px;
`;

const TabsList = styled(TabsListUnstyled)`
  
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;
`;

export default function UnstyledTabsCustomized() {
    return (
        <>
            <TabsUnstyled defaultValue={0} >
            <TabsList>
                <Tab>HEALTH PLANS</Tab>
                <Tab>IPAS</Tab>
                <Tab>WORKERS COMPS</Tab>
                <Tab>HOSPITALS</Tab>
            </TabsList>
            <TabPanel value={0}>
                    <Chip label="Medicare" />
                    <Chip label="Medi-Cal" variant="outlined" />
                    <Chip label="AIDS Healthcare Foundation " />
                    <Chip label="Alignment Healthcare" variant="outlined"/>
                    <Chip label="Blue Shield of CA" />
                    <Chip label="California Physicians" variant="outlined"/>
                    <Chip label="Easy Choice" />
                    <Chip label="Gold Coast" variant="outlined"/>
                    <Chip label="Health Net of CA" />
                    <Chip label="Health Net Federal" variant="outlined"/>
                    <Chip label="LA Care" />
                    <Chip label="Molina Healthcare" variant="outlined"/>
                    <Chip label="Universal Care, Inc. dba" />
                    <Chip label="United Healthcare" variant="outlined"/>
                    <Chip label="United Healthcare -Tricare" />
               
            </TabPanel>
            <TabPanel value={1}>
                    <Chip label="Access IPA" />
                    <Chip label="Advantage IPA" variant="outlined"/>
                    <Chip label="Access Senior" />
                    <Chip label="AHMC" variant="outlined"/>
                    <Chip label="Imperial Health " />
                    <Chip label="Prospect Medical" variant="outlined" />
            </TabPanel>
            <TabPanel value={2}>
                    <Chip label="ACPN – American" />
                    <Chip label="CAREWORKS" variant="outlined" />
                    <Chip label="Evolutions Healthcare" />
                    <Chip label="Galaxy Health Network" variant="outlined"/>
                    <Chip label="Health Smart Network" />
                    <Chip label="MedComp USA dba" variant="outlined"/>
                    <Chip label="OneCare Care" />
                    <Chip label="OPTUM" variant="outlined"/>
                    <Chip label="Prime Health Services" />
                    <Chip label="Priority Care Solutions" variant="outlined"/>
                    <Chip label="Progressive Medical" />
                    <Chip label="USA Managed Care Organization" variant="outlined"/>
            </TabPanel>
            <TabPanel value={3}>
                    <Chip label="Alhambra Hospital-Medical Center" />
                    <Chip label="Garfield Medical-Center" variant="outlined" />
                    <Chip label="Greater El Monte-Community Hospital" />
                    <Chip label="Monterey Park-Hospital" variant="outlined"/>
                    <Chip label="San Gabriel Valley-Medical Center" />
                    <Chip label="Whittier Hospital-Medical Center" variant="outlined"/>
            </TabPanel>
        </TabsUnstyled>
    
        </>
        );
}
