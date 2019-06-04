import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab value={false} />
          <Tab label="О нас"  component={Link} to='/about'/>
          <Tab label="Счетчики" component={Link} to='/counters'/>
        </Tabs>
      </AppBar>
    </div>
  )
};