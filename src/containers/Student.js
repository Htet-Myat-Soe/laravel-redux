import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Student({ student }) {
  return (
    <Grid item xs={4}>
      <Link to={"/students/"+student.id}>
          <Card sx={{ boxShadow : 1 }} key={student.id}>
            <CardContent>
              <Typography variant='title' component="h2">
                {student.name}
              </Typography>
            </CardContent>
          </Card>  
      </Link>
    </Grid>

  )
}
