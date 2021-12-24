import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllQuizzes } from '../actions/QuizActions';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Container,
  Paper,
  Link,
} from '@mui/material';

import testImage from '../images/3307.jpg';

export class QuizList extends Component {
  componentDidMount() {
    this.props.getAllQuizzes();
  }
  render() {
    let { someQuizzes } = this.props;
    return (
      <>
        <Typography
          component='h2'
          variant='h3'
          sx={{ textAlign: 'center', marginBottom: '20px' }}
        >
          Квизы
        </Typography>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {someQuizzes &&
            someQuizzes.length > 0 &&
            someQuizzes.map((quiz) => {
              return (
                <Card sx={{ width: 345}}>
                  <CardMedia
                    component='img'
                    height='140'
                    src={testImage}
                    alt='test'
                  />
                  <CardContent>
                    {/* <a key={quiz._id} href={`quiz/${quiz._id}`}> */}
                    <Typography
                      gutterBottom
                      variant='h5'
                      component='p'
                      sx={{ textAlign: 'left' }}
                    >
                      {quiz.name}
                    </Typography>
                    {/*  <Typography sx={{fontSize: '13px'}}>Автор квиза</Typography> */}
                  </CardContent>
                  <CardActions>
                    <Button size='small'>
                      <Link
                        sx={{ textDecoration: 'none' }}
                        key={quiz._id}
                        href={`/quiz/${quiz._id}`}
                      >
                        Пройти
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ quizBuilder: { someQuizzes } }) => ({
  someQuizzes,
});

export default connect(mapStateToProps, { getAllQuizzes })(QuizList);
