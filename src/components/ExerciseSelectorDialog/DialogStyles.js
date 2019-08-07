import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.paper
    }
  },
  paper: {
    width: '100%',
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#1F5673',
    '&:hover': {
      backgroundColor: '#113b52',
    }
  }
}));
