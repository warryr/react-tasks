import { makeStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

export const useStyles = makeStyles(theme => ({
  containerBox: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '29%',
    margin: theme.spacing(5, 2),
    color: grey[700],
  },
  h4: {
    margin: theme.spacing(3),
  },
  paragraph: {
    margin: theme.spacing(2, 0),
  },
  image: {
    width: '100px',
    height: '100px',
  },
}));
