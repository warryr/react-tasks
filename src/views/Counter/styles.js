import { makeStyles } from '@material-ui/core';

export const useButtonStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1, 2),
  },
}));

export const useHeadingStyles = makeStyles(theme => ({
  h3: {
    margin: theme.spacing(3),
  },
}));