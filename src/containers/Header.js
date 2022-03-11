import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <AppBar sx={{ boxShadow : 1 }}>
        <Toolbar>
            <Typography variant="title" component="h2">HELLO</Typography>
        </Toolbar>
    </AppBar>
  )
}
