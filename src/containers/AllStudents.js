import {  Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudents } from '../redux/actions/studentActions';
import Student from './Student';

export default function AllStudents() {

  const students = useSelector((state) => state.allStudents.students);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchStudents())
   },[]);


  return (
    <Container sx={{ marginTop : 10 }}>
        <Grid container spacing={2} >

        {
          students.length !== 0 ? students.map(student => {
            return (
              <Student student={student} />
            )
          } )
          : '...Loading'
        }    
        </Grid>
    </Container>
  )
}
