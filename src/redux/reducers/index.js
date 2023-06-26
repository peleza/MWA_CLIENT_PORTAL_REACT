import { combineReducers } from 'redux';
import apiResReducer from './apiResReducers';
import authReducer from './authReducers';
import getTitleReducers from './getTitleReducers';
import AdminUsersReducers from './AdminUsersReducers';
import AdminCountryReducers from './AdminCountryReducers';
import AdminClientReducers from './AdminClientReducer';
import PidvaServiceManagementReducers from './PidvaServiceManagementReducers';
import PsmtReducers from './PsmtReducer';

export default combineReducers({
	apiRes: apiResReducer,
	auth: authReducer,
	title: getTitleReducers,
	AdminPidvaUsers: AdminUsersReducers,
	AdminCountry: AdminCountryReducers,
	AdminClientData : AdminClientReducers,
	PsmtData : PsmtReducers,
	PidvaServiceManagement: PidvaServiceManagementReducers
});
