import {
  makeStyles
} from '@material-ui/core/styles';

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
  edit: {
    color: 'white',
    backgroundColor: '#23a829',
    '&:hover': {
      backgroundColor: '#1a7d1e',
    }
  },
  add: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    backgroundColor: '#1F5673',
    '&:hover': {
      backgroundColor: '#113b52',
    }
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
  },
  typography: {
    padding: theme.spacing(2)
  },
  fab: {
    marginRight: 5
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  exerciseForms: {
    width: '100%',
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  dialogActions: {
    width: '100%',
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}));
