import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const ParentCounter = props => {
  const classes = useStyles();
  return (
    <Container fixed>
      <Typography component='h1' variant='h4' className={classes.h4}>
        Parent Counter
      </Typography>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={props.onAdd}>
        Add counter
      </Button>
      {props.ableToDel ? (
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          onClick={props.onDelete}>
          Delete first counter
        </Button>
      ) : (
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          disabled>
          Delete first counter
        </Button>
      )}
      <Button
        variant='contained'
        color='default'
        className={classes.button}
        onClick={props.onReset}>
        Reset counters
      </Button>
    </Container>
  );
};

ParentCounter.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  ableToDel: PropTypes.bool.isRequired,
};

export default ParentCounter;
