import { Container, Grid } from '@mui/material';
import React from 'react';
import QuestionBuilder from '../components/QuestionBuilder';
import QuizCard from '../components/QuizCard';
import QuizForm from '../components/QuizForm';
import Quiz from '../components/Quiz'
import QuizList from '../components/QuizList'

function MainPage(props) {
  return (
      <QuizList {...props}  navigate={props.navigate}/>
 
  );
}

export default MainPage;
