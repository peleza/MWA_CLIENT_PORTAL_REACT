import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import PrivateRoute from './views/private-route/PrivateRoute';
import { setCurrentUser } from './redux/actions/authAction'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import './App.scss'

const TheLayout = React.lazy(() => import('./containers/TheLayout'));
const AuthLayout = React.lazy(() => import('./containers/AuthLayout'));
const PsmtLayout = React.lazy(() => import('./containers/PsmtLayout'));
const PidvaLayout = React.lazy(() => import('./containers/PidvaLayout'));

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);
var jwt = require('jwt-simple');

if (localStorage.userData) {
	const decoded = jwt.decode(localStorage.userData, process.env.REACT_APP_PRIVATE_KEY)
	store.dispatch(setCurrentUser(decoded));
}



function App() {
	const getCurrentUser = useSelector(state => state.auth.set_user)

	/* Change theme color according to user */
	useEffect(() => {
		if (getCurrentUser.role_id === 1) {
			document.documentElement.style.setProperty('--secondaryColor', '#541877');
			document.documentElement.style.setProperty('--lightThemeColor', '#f1d9ff');
		} else if (getCurrentUser.role_id === 2) {
			document.documentElement.style.setProperty('--secondaryColor', '#008DBF');
			document.documentElement.style.setProperty('--lightThemeColor', '#e1f4fb');
		} else {
			document.documentElement.style.setProperty('--secondaryColor', '#920061');
		}
	})
	return (
		<Router>
			<React.Suspense fallback={loading}>
				<Switch>
					<Route exact path="/" name="Home" render={(props) => <TheLayout {...props} />} />
					<Route exact path="/login" name="Login" render={(props) => <AuthLayout {...props} />} />
					<Route exact path="/signup" name="SignUp" render={(props) => <AuthLayout {...props} />} />
					<Route exact path="/company-information" name="CompanyInformation" render={(props) => <AuthLayout {...props} />} />
					<Route exact path="/otp" name="Otp" render={(props) => <AuthLayout {...props} />} />
					<Route exact path="/subscription-payment" name="SubscriptionPayment" render={(props) => <AuthLayout {...props} />} />
					<Route exact path="/payment-option" name="PaymentOption" render={(props) => <AuthLayout {...props} />} />
					<Route exact path="/verify" name="Verify" render={(props) => <AuthLayout {...props} />} />
					<Route exact path="/forgot-password" name="ForgotPassword" render={(props) => <AuthLayout {...props} />} />
					<Route exact path="/reset-password" name="ResetPassword" render={(props) => <AuthLayout {...props} />} />
					<Route exact path="/company" name="Company" render={(props) => <TheLayout {...props} />} />
					<Route exact path="/partners" name="Partners" render={(props) => <TheLayout {...props} />} />
					<Route exact path="/faq" name="Faq" render={(props) => <TheLayout {...props} />} />
					<Route exact path="/blog" name="Blog" render={(props) => <TheLayout {...props} />} />
					<Route exact path="/background-checks" name="BackgroundChecks" render={(props) => <TheLayout {...props} />} />
					<Route exact path="/recruitment" name="RecruitmentFront" render={(props) => <TheLayout {...props} />} />
					<Route exact path="/insights-analytics" name="InsightsAnalytics" render={(props) => <TheLayout {...props} />} />
					<Route exact path="/kyc" name="KYC" render={(props) => <TheLayout {...props} />} />
					<Route exact path="/logged-out" name="LoggedOut" render={(props) => <TheLayout {...props} />} />

					<Route exact path="/psmt/signup" name="PsmtSignUp" render={(props) => <AuthLayout {...props} />} />
					<Route exact path="/psmt/company-information" name="PsmtCompanyInformation" render={(props) => <AuthLayout {...props} />} />
					<Route exact path="/psmt/dashboard" name="PsmtDashboard" render={(props) => <PsmtLayout {...props} />} />
					<Route exact path="/psmt/background-check" name="BackgroundCheck" render={(props) => <PsmtLayout {...props} />} />
					<Route exact path="/psmt/reports" name="Reports" render={(props) => <PsmtLayout {...props} />} />
					<Route exact path="/psmt/make-a-request" name="MakeRequest" render={(props) => <PsmtLayout {...props} />} />
					<Route exact path="/psmt/my-profile" name="MyProfile" render={(props) => <PsmtLayout {...props} />} />
					<Route exact path="/psmt/company-profile" name="CompanyProfile" render={(props) => <PsmtLayout {...props} />} />
					<Route exact path="/psmt/payments-postpay" name="PaymentsPostPay" render={(props) => <PsmtLayout {...props} />} />
					<Route exact path="/psmt/Payments-prepay" name="PaymentsPrepay" render={(props) => <PsmtLayout {...props} />} />
					<Route exact path="/psmt/recruitment" name="Recruitment" render={(props) => <PsmtLayout {...props} />} />
					<Route exact path="/psmt/analytics-information-reports" name="AnalyticsInformationReports" render={(props) => <PsmtLayout {...props} />} />
					<Route exact path="/admin/login" name="AdminLogin" render={(props) => <AuthLayout {...props} />} />
					<Route exact path="/psmt/OtpVerify" name="OtpPsmt" render={(props) => <AuthLayout {...props} />} />
					<Route exact path="/psmt/kyc-make-a-request" name="KYCMakeRequest" render={(props) => <PsmtLayout {...props} />} />
					<Route exact path="/psmt/kyc-dashboard" name="KYCDashboard" render={(props) => <PsmtLayout {...props} />} />
					<Route exact path="/psmt/kyc-reports" name="KYCReports" render={(props) => <PsmtLayout {...props} />} />
					<Route exact path="/psmt/tickets" name="Tickets" render={(props) => <PsmtLayout {...props} />} />

					<Switch>
						<PrivateRoute path="/pidva/dashboard" name="PsmtDashboard" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/sub-services" name="SubServices" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/sub-services-pricing" name="SubServicesPricing" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/package" name="Package" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/client-management" name="ClientManagement" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/client-details" name="ClientDetails" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/client-request" name="ClientRequest" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/client-contracts" name="Contracts" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/client-users" name="ClientUsers" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/team-management" name="TeamManagement" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/roles-management" name="RoleManagement" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/permissions" name="Permissions" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/team-360-view/:id" name="Team360View" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/bgc" name="RequestManagementBGC" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/kyc" name="RequestManagementKYC" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/request-detail/:id" name="RequestReportDetail" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/credit-management" name="CreditManagement" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/manage-sub-services" name="ManageSubServices" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/client-credits" name="ClientCredits" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/create-billing-contact" name="CreateBillingContact" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/credits-purchases-postpay" name="CreditsPurchasesPostPay" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/credits-purchases-prepay" name="CreditsPurchasesPrepay" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/client-invoices-postpay" name="ClientInvoicesPostPay" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/bgc-requests" name="BGCRequests" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/kyc-requests" name="KYCRequests" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/ticket-management" name="TicketManagement" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/my-profile" name="PidvaMyProfile" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/team-productivity" name="TeamProductivity" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/jobs-distribution" name="JobsDistribution" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/clock-in-out" name="ClockInOut" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/select-a-week" name="SelectAWeek" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/configurations" name="Configurations" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/education-faculty" name="Faculty" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/education-course" name="Course" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/education-specialization" name="Specialization" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/education-levels" name="Levels" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/education-awards" name="Awards" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/pidva/education-employment-configuration" name="EmploymentConfiguration" component={(props) => <PidvaLayout {...props} />} />

						<PrivateRoute path="/admin/dashboard" name="SuperAdminDashboard" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/my-profile" name="AdminMyProfile" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/sass-organization" name="SaaSOrganization" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/sass-users-requests" name="SassUsersRequests" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/saas-retention" name="SaasRetention" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/saas-users" name="SaasUsers" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/sass-360-view" name="Sass360View" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/sass-user-details/:id" name="SassUsersDetails" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/countries" name="Countries" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/category" name="AdminServices" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/industry" name="Industry" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/currency" name="Currency" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/services" name="AdminServices" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/sub-service" name="AdminSubServices" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/sub-service-requests" name="SubServicesRequests" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/subscription-management" name="SubscriptionManagement" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/saas-subscription/:id" name="SassSubscriptions" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/roles-management" name="AdminRoleManagement" component={(props) => <PidvaLayout {...props} />} />

						<PrivateRoute path="/admin/assign-role/:id" name="AdminAssignRole" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/team-members" name="AdminTeamManagement" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/data-source-credits" name="DataSourceCredits" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/data-source-credits/:id" name="DataSourceCreditsDetail" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/sass-billing-contacts" name="SaaSBillingContacts" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/sass-credits" name="SaaSCredits" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/sass-credits/:id" name="SassCreditsDetails" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/candidates" name="ProfileManagementCandidates" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/companies" name="ProfileManagementCompanies" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/merge-facility" name="ProfileManagementMergeFacility" component={(props) => <PidvaLayout {...props} />} />
						
						<PrivateRoute path="/admin/data-source" name="DataSourceManagement" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/data-source-configuration" name="DataSourceConfiguration" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/data-source-360-view" name="DataSource360View" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/sub-service-pricing" name="SubServicesPricing" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/data-report-creator" name="DataReportCreator" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/data-entry-form" name="DataEntryForm" component={(props) => <PidvaLayout {...props} />} />
						<PrivateRoute path="/admin/data-entry-form-creator" name="DataEntryFromCreator" component={(props) => <PidvaLayout {...props} />} />
					</Switch>
				</Switch>
			</React.Suspense>
		</Router>
	);
}

export default App;
