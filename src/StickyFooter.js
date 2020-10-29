import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core/';
import {green, purple } from '@material-ui/core/colors';


export default function StickyFooter() {

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h2" component="h1" gutterBottom>
        Simple Memory Game!
      </Typography>
      <Typography variant="h4" gutterBottom>
          Select a picture category
      </Typography>
      <Grid container spacing={3} direction="row" justify="space-evenly" alignItems="center">
        <Button variant="contained" color="primary">Animals</Button>
        <Button variant="contained" color="primary">Food</Button>
        <Button variant="contained" color="primary">Smash Characters</Button>
      </Grid>
    </Container>
  );
}