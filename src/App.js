import './App.css';
import Container from '@material-ui/core/Container';
import SelectCountry from './components/SelectCountry'
import { makeStyles } from '@material-ui/core/styles';
import { Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height:'100vh',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth='sm' alignItems="center"
      justifycontent="center" className={classes.root}>  
        <SelectCountry />
      </Container>
    </div>
  );
}

export default App;
