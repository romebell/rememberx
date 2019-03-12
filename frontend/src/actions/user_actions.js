import * as UsersAPIUtils from '../util/user_api_utils';
export const RECEIVE_USER = `RECEIVE_USER`;


const receiveUser = user => ({
 type: RECEIVE_USER,
 user
});

export const requestUser = id => dispatch => (
 UsersAPIUtils.getUser(id)
   .then(user => dispatch(receiveUser(user)))
);