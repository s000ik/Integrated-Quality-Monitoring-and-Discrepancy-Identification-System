import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import ArrowTopRightOnSquareIcon from '@heroicons/react/24/solid/ArrowTopRightOnSquareIcon';
import ChevronUpDownIcon from '@heroicons/react/24/solid/ChevronUpDownIcon';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery
} from '@mui/material';
import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';
import { items } from './config';
import { SideNavItem } from './side-nav-item';
import React, { useState, useEffect } from 'react';
// import MyImage from './path/to/Group 9.svg';

// function MyComponent() {
//   // Function to refresh the page, placed inside your component
  const refreshPage = () => {
    window.location.reload();
  };

 // Function to handle file uploads
const handleFileChange = async (e) => {
  const file = e.target.files[0];
//   const formData = new FormData();
//   formData.append('file', file);

//   try {
//     const response = await fetch('/upload', { // Your server endpoint
//       method: 'POST',
//       body: formData,
//     });

//     if (response.ok) {
//       console.log('File uploaded successfully');
//     } else {
//       console.error('File upload failed');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

}

export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  function saveFilesToDataForMLModel() {
    // Get the uploaded files
    const fileInputB = document.getElementById('data-source-b');
    const fileInputC = document.getElementById('data-source-c');
    const filesB = fileInputB.files;
    const filesC = fileInputC.files;

    // Create a FormData object to send the files to the server
    const formData = new FormData();

    // Append the files to the FormData object
    for (let i = 0; i < filesB.length; i++) {
      formData.append('filesB', filesB[i]);
    }
    for (let i = 0; i < filesC.length; i++) {
      formData.append('filesC', filesC[i]);
    }

    // Send the FormData object to the server using fetch or XMLHttpRequest
    fetch('/save-files', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });}

  const content = (
    
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: 'inline-flex',
              height: 32,
              width: 32
            }}
          >
            <Logo />
            
            <div>
      {/* Directly using the SVG path in the img source attribute */}
      {/* <img src="Group9.png" alt="Description of image" /> */}
    </div>
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
              p: '12px'
            }}
          >
            <div>
              <Typography
                color="inherit"
                variant="subtitle1"
              >
                IQMDIS
              </Typography>
              {/* <Typography
                color="neutral.400"
                variant="body2"
              >
                Production
              </Typography> */}
            </div>
            <SvgIcon
              fontSize="small"
              sx={{ color: 'neutral.500' }}
            >
              {/* <ChevronUpDownIcon /> */}
            </SvgIcon>
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0
            }}
          >
            
            
            {items.map((item) => {
              const active = item.path ? (pathname === item.path) : false;

              

              
              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
            </Stack>
          </Box>
          <Divider sx={{ borderColor: 'neutral.700' }} />
          <Box
            sx={{
            px: 2,
            py: 3
            }}
          >
            <Typography
            color="neutral.100"
            variant="subtitle2"
            >
            {/* <IconWithName name="Input QM Data" /> */}
            Input QM Data
            </Typography>

            <Box
            sx={{
              display: 'flex',
              mt: 0,
              mx: 'auto',
              width: '160px',
              '& img': {
              width: '100%'
              }
            }}
            >
            {/* <img
              alt=" Smart India Hackathon"
              src="/assets/IQMDIS-kit-pro.png"
            /> */}
            </Box>
                 
      <div>
      <Button
      component="a"
      fullWidth
      sx={{
        mt: 2,
        backgroundColor: '#6577B3',
        color: 'white',
        textTransform: 'none',
        justifyContent: 'flex-start',
        '&:hover': {
          backgroundColor: 'darkblue'
        }
      }}
      target="_blank"
      variant="contained"
    >
      E-form Data
      {/* <input
        type="file"
        id="data-source-a"
        accept=".csv"
        onChange={handleFileChange}
        style={{
          opacity: 0,
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
        webkitdirectory=""
      /> */}
      <input 
    type="file" 
    id="data-source-c" 
    accept=".csv" 
    onChange={(e) => handleFileChange(e, 'sourceC')} 
    style={{ 
      opacity: 0, // Make the file input invisible
      position: 'absolute', // Take it out of flow
      width: '100%', // Expand to cover the button
      height: '100%' // Expand to cover the button
    }} 
  />
    </Button>


          <Button
  component="a"
  fullWidth
  sx={{
    mt: 2,
    backgroundColor: '#6577B3', // Adjust the color to match your theme
    color: 'white', // Adjust the text color to match your theme
    textTransform: 'none', // Prevent uppercase transform
    justifyContent: 'flex-start', // Align text to the left
    '&:hover': {
      backgroundColor: 'darkblue' // Darken the button on hover
    }
  }}
  target="_blank"
  variant="contained"
>
  National QM Data 
  <input 
    type="file" 
    id="data-source-b" 
    accept=".csv" 
    onChange={(e) => handleFileChange(e, 'sourceC')} 
    style={{ 
      opacity: 0, // Make the file input invisible
      position: 'absolute', // Take it out of flow
      width: '100%', // Expand to cover the button
      height: '100%' // Expand to cover the button
    }} 
  />
</Button>


<Button
  component="a"
  fullWidth
  sx={{
    mt: 2,
    backgroundColor: '#6577B3', // Adjust the color to match your theme
    color: 'white', // Adjust the text color to match your theme
    textTransform: 'none', // Prevent uppercase transform
    justifyContent: 'flex-start', // Align text to the left
    '&:hover': {
      backgroundColor: 'darkblue' // Darken the button on hover
    }
  }}
  target="_blank"
  variant="contained"
>
  State QM Data
  <input 
    type="file" 
    id="data-source-c" 
    accept=".csv" 
    onChange={(e) => handleFileChange(e, 'sourceC')} 
    style={{ 
      opacity: 0, // Make the file input invisible
      position: 'absolute', // Take it out of flow
      width: '100%', // Expand to cover the button
      height: '100%' // Expand to cover the button
    }} 
  />
</Button>

      </div>

      <div style={{ paddingTop: '13px' }}>
  
      
      {/* Refresh Button */}
      
      
      <button
  
  style={{
  
    backgroundColor: '#6876af', // Green background to match your other buttons
    border: 'none',
    color: 'white',
    padding: '8px 16px', // Smaller padding for a smaller button
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '14px', // Smaller font size for a smaller button
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '20px', // More pronounced border-radius for rounded edges
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.24), 0 0 2px 0 rgba(0,0,0,0.12)', // subtle shadow
    transition: 'background-color 0.3s', // Smooth transition for hover effect
  }}
>
Upload Files
</button>
      </div>

          <Button
            component="a"
            endIcon={(
              <SvgIcon fontSize="small">
                <ArrowTopRightOnSquareIcon />
              </SvgIcon>
            )}
            fullWidth
            href="https://pmgsy.nic.in/quality-monitoring"
            sx={{ mt: 2 }}
            target="_blank"
            variant="contained"
          >
            OMMAS
          </Button>
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
