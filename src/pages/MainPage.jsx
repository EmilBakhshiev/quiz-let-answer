import { Container, Grid } from '@mui/material';
import React from 'react';
import QuestionBuilder from '../components/QuestionBuilder';
import QuizCard from '../components/QuizCard';
import QuizForm from '../components/QuizForm';
import Quiz from '../components/Quiz'

function MainPage() {
  return (
      <QuizForm />
    /* <Container sx={{ padding: 5 }} maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item>
          <QuizCard />
        </Grid>
        <Grid item>
          <QuizCard />
        </Grid>
        <Grid item>
          <QuizCard />
        </Grid>
        <Grid item>
          <QuizCard />
        </Grid>
      </Grid>
    </Container> */
  );
}

export default MainPage;
