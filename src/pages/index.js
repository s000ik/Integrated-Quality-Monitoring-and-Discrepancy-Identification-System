import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const now = new Date();

const DownloadButton = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px 0' }}>
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
        </div>

    );
};


const LookerStudioReport = () => {
  return (
    <>
    <iframe
      src="https://lookerstudio.google.com/embed/reporting/0dcb9a07-35b3-4337-bfc8-b75e7ec9f3df/page/DBskD"
      frameBorder="0"
      width="1125"
      height="875"
      style={{ border: 0 }}
      allowFullScreen
    ></iframe>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px 0' }}>
    <div>
      <h2>Generated Report</h2>
      <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <p>Report-UttarPradesh.pdf</p>
        <p>Generated on 19-12-2023</p>
      </div>
    </div>
      {/* <a
        href={fileUrl}
        download
        style={{
          backgroundColor: '#4C51BF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          cursor: 'pointer',
          textDecoration: 'none', // Remove underline from links
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
        }}
      > */}
    <button
      style={{
        backgroundColor: '#4C51BF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
      }}
      onClick={() => {
        fetch('../../DetailedReports/Report.pdf') // Assuming this is the correct relative path from your server
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.blob();
          })
          .then(blob => {
            // Process the blob here, such as displaying or downloading the PDF
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
      }}
    >
      Download
    </button>
  </div>
</>

  );
};

const MyComponent = () => {
  const openPdfInNewTab = () => {
    window.open('../../DetailedReports/Report.pdf', '_blank');
  };
  return (
    <button onClick={openPdfInNewTab}>Open PDF in new tab</button>
  );
};

const Page = () => (
  <>
    <Head>
      <title>
        Overview | Ministry of Rural Development Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 0
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <LookerStudioReport />
          </Grid>
        </Grid>
        
      </Container>

    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
