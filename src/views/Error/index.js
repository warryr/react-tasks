import React from 'react';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';

const Error = () => {
  const classes = useStyles();
  return (
    <Typography component='h1' variant='h4' className={classes.h4}>
      404 - страница не найдена
    </Typography>
  );
};

export default Error;