import React, { useState, useEffect } from 'react';
import { Box , Container } from '@material-ui/core/';
import StickyFooter from './StickyFooter';
import unsplash from './api';

function App() {
  const [data, updateData] = useState([]);

  useEffect(() => {
    const grabData = async () => {
      const response = await unsplash('cats');
      const json = await response.json();
      console.log(json);
    }
    grabData();
  }, [data]);

  return (
    <Container>
      <Box my={4}>
        <StickyFooter/>
      </Box>
    </Container>
  );
}

export default App;
