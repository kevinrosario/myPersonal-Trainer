import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import { initiateSignOut } from '../../actions/user';

function SignOut({
  user,
  dispatch,
  enqueueSnackbar
}) {
  useEffect(() => {
    dispatch(initiateSignOut(user, enqueueSnackbar));
  }, []);

  return ('');
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(withSnackbar(SignOut));
