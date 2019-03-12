import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';
import { requestUser } from '../actions/user_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
