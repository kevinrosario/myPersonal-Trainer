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
  add: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
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
    margin: theme.spacing(3, 0, 2)
  },
  typography: {
    padding: theme.spacing(2)
  },
  deleteIcon: {
    marginRight: 5,
    backgroundColor: '#a60510',
    '&:hover': {
      backgroundColor: '#c20a16',
    }
  },
  addIcon: {
    backgroundColor: '#113b52',
    '&:hover': {
      backgroundColor: '#1F5673',
    }
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
  }
}));
