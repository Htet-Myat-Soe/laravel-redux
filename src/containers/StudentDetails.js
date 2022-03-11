import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { removeSelectedStudent, selectedStudent } from '../redux/actions/studentActions';

export default function StudentDetails() {

  const { stdId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if(stdId && stdId !== "") {
      dispatch(selectedStudent(stdId));
    }
      return () => {
        dispatch(removeSelectedStudent());
      }
    
  },[stdId]);

  const student = useSelector(state => state.student);

  const { name, age, email, image} = student;  

  return (
    <Container sx={{ marginTop : 10 }}>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`http://127.0.0.1:8000/images/students/${image}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Age</strong> : {age}
        </Typography>
      </CardContent>
    </Card>
    </Container>
  )
}
