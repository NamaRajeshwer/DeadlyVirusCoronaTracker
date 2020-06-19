import React from 'react';
import {Card,CardContent,Typography,Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames'


const Cards = (data) => {

debugger;
    const comfirmed= data.data && data.data.confirmed && data.data.confirmed.value;
    const recovered= data.data && data.data.recovered && data.data.recovered.value;
    const deaths= data.data && data.data.deaths && data.data.deaths.value;
    const lastdate= data.data && data.data.lastUpdate;
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.infected)} >
                    <CardContent>
    <Typography color="textSecondary" gutterBottom>Infected</Typography>
  
    <Typography variant="h5"> {comfirmed}
    <CountUp start={0} duration={2.5} separator="," />
    </Typography>
    <Typography color="textSecondary" >{new Date(lastdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of infected cases of COVID-19. </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.recovered)}>
                    <CardContent>
    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
    <Typography variant="h5">{recovered}
        <CountUp  start={0} duration={2.5} separator="," />
    </Typography>
    <Typography color="textSecondary" >{new Date(lastdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19. </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
    <Typography variant="h5">{deaths}
    <CountUp  start={0} duration={2.5} separator="," />
    </Typography>
    <Typography color="textSecondary" >{new Date(lastdate).toDateString()}</Typography>
                        <Typography variant="body2"> Number of deaths caused by COVID-19. </Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}
export default Cards;
