import { Grid } from '@mui/material'
import React from 'react'

const PopularThemes = () => {
  return (
    <section>
        <h1 className='mb-8'>Popular Themes</h1>
        <Grid container spacing={4}>
            <Grid item md={5} xs={12}>
                <img src="/images/theme.png" alt="" />
            </Grid>
            <Grid item md={7} xs={12}>
                <img src="/images/theme2.png" alt="" />
            </Grid>
        </Grid>
    </section>
  )
}

export default PopularThemes