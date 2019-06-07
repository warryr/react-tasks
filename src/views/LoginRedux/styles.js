import { makeStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logBox: {
    margin: theme.spacing(2),
    color: grey[500],
  },
  hint: {
    textAlign: 'left',
    fontSize: '14px',
    color: red[500],
  },
}));
