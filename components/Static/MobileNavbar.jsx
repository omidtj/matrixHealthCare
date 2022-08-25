import * as React from 'react';
import Link from 'next/link'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import TreeItem from '@mui/lab/TreeItem';
import { blue } from '@mui/material/colors';
import { Divider } from '@mui/material';

const MenuButtonStyle = {
    backgroundColor: blue[200],
    color: 'black',
    '&:hover': {
        backgroundColor: blue[700],
        color: 'white',
    }
}
const MobileNavbar = () => {
    return (
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ m: 1, height: 240, flexGrow: 1, maxWidth: 200, overflowY: 'auto' }}
        >
            <Link href="/">
                <Button variant="link"
                    sx={MenuButtonStyle} fullWidth>Home</Button>
            </Link>
            <Divider />
            <Link href="/about">
                <Button variant="link"
                    sx={MenuButtonStyle} fullWidth>About</Button>
            </Link>
            <Divider />
            <Link href="/contact">
                <Button variant="link"
                    sx={MenuButtonStyle} fullWidth>Contact</Button>
            </Link>
            <Divider />
            <TreeItem nodeId="1" label="Services">
                <Link href="/services/homehealth">
                    <Button variant="link"
                        fullWidth
                        sx={MenuButtonStyle}>Home Health</Button>
                </Link>
                <Divider />
                <Link href="/services/palliativecare">
                    <Button variant="link"
                        fullWidth
                        sx={MenuButtonStyle}>Palliative Care</Button>
                </Link>
                <Divider />
                <Link href="/services/hospicecare">
                    <Button variant="link"
                        fullWidth
                        sx={MenuButtonStyle}>Hospice Care</Button>
                </Link>
                <Divider />
                <Link href="/services/assistedliving">
                    <Button variant="link"
                        fullWidth
                        sx={MenuButtonStyle}>Assisted Living</Button>
                </Link>
                <Divider />
            </TreeItem>
            <TreeItem nodeId="2" label="Careers">
                <Link href="/careers">
                    <Button variant="link"
                        fullWidth
                        sx={MenuButtonStyle}>Careers</Button>
                </Link>
                <Divider />
                <Link href="/careers/volunteer">
                    <Button variant="link"
                        fullWidth
                        sx={MenuButtonStyle}>Volunteer</Button>
                </Link>
            </TreeItem>
        </TreeView>
    );
}
export default MobileNavbar