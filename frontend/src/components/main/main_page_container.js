import {connect} from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import MainPage from './main_page';

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(null, mapDispatchToProps)(MainPage);