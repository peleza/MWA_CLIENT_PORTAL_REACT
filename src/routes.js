import React from 'react';

const Home = React.lazy(() => import('./views/pages/Home/Home'));
const Login = React.lazy(() => import('./views/pages/auth/Login'));
const SignUp = React.lazy(() => import('./views/pages/auth/SignUp'));
const CompanyInformation = React.lazy(() => import('./views/pages/auth/CompanyInformation'));
const Otp = React.lazy(() => import('./views/pages/auth/Otp'));
const SubscriptionPayment = React.lazy(() => import('./views/pages/auth/SubscriptionPayment'));
const PaymentOption = React.lazy(() => import('./views/pages/auth/PaymentOption'));
const Verify = React.lazy(() => import('./views/pages/auth/Verify'));
const ForgotPassword = React.lazy(() => import('./views/pages/auth/ForgotPassword'));
const ResetPassword = React.lazy(() => import('./views/pages/auth/ResetPassword'));
const Company = React.lazy(() => import('./views/pages/Company/Company'));
const Partners = React.lazy(() => import('./views/pages/Partners/Partners'));
const Faq = React.lazy(() => import('./views/pages/Faq/Faq'));
const Blog = React.lazy(() => import('./views/pages/Blog/Blog'));
const BackgroundChecks = React.lazy(() => import('./views/pages/Products/BackgroundChecks'));
const KYC = React.lazy(() => import('./views/pages/Products/KYC'));
const InsightsAnalytics = React.lazy(() => import('./views/pages/Products/InsightsAnalytics'));
const RecruitmentFront = React.lazy(() => import('./views/pages/Products/Recruitment'));
const LoggedOut = React.lazy(() => import('./views/pages/auth/LoggedOut'));


/* PSMT routes */
const PsmtSignUp = React.lazy(() => import('./views/pages/PsmtAuth/SignUp'));
const PsmtCompanyInformation = React.lazy(() => import('./views/pages/PsmtAuth/CompanyInformation'));
const PsmtDashboard = React.lazy(() => import('./views/pages/PsmtDashboard/Dashboard/Dashboard'));
const BackgroundCheck = React.lazy(() => import('./views/pages/PsmtDashboard/BackgroundCheck/BackgroundCheck'));
const Reports = React.lazy(() => import('./views/pages/PsmtDashboard/BackgroundCheck/Reports'));
const MakeRequest = React.lazy(() => import('./views/pages/PsmtDashboard/BackgroundCheck/MakeRequest'));
const PaymentsPostPay = React.lazy(() => import('./views/pages/PsmtDashboard/BackgroundCheck/Payments-postpay'));
const PaymentsPrepay = React.lazy(() => import('./views/pages/PsmtDashboard/BackgroundCheck/Payments-prepay'));
const MyProfile = React.lazy(() => import('./views/pages/PsmtDashboard/UserPages/MyProfile'));
const CompanyProfile = React.lazy(() => import('./views/pages/PsmtDashboard/UserPages/CompanyProfile'));
const Recruitment = React.lazy(() => import('./views/pages/PsmtDashboard/Recruitment/Recruitment'));
const AnalyticsInformationReports = React.lazy(() => import('./views/pages/PsmtDashboard/AnalyticsInformationReports/AnalyticsInformationReports'));
const OtpPsmt = React.lazy(() => import('./views/pages/PsmtAuth/OtpPsmt'));
const KYCMakeRequest = React.lazy(() => import('./views/pages/PsmtDashboard/KYC/MakeRequest'));
const KYCDashboard = React.lazy(() => import('./views/pages/PsmtDashboard/KYC/KycDashboard'));
const KYCReports = React.lazy(() => import('./views/pages/PsmtDashboard/KYC/Reports'));
const Tickets = React.lazy(() => import('./views/pages/PsmtDashboard/Ticket/Ticket'));

/* PIDVA routes */
const PidvaDashboard = React.lazy(() => import('./views/pages/PidvaDashboard/Dashboard/Dashboard'));
const SubServices = React.lazy(() => import('./views/pages/PidvaDashboard/ServiceManagement/SubServices'));
const SubServicesPricing = React.lazy(() => import('./views/pages/PidvaDashboard/ServiceManagement/SubServicesPricing'));
const Package = React.lazy(() => import('./views/pages/PidvaDashboard/ServiceManagement/Package'));
const ClientManagement = React.lazy(() => import('./views/pages/PidvaDashboard/ClientManagement/ClientManagement'));
const ClientDetails = React.lazy(() => import('./views/pages/PidvaDashboard/ClientManagement/ClientDetails'));
const ClientRequest = React.lazy(() => import('./views/pages/PidvaDashboard/ClientManagement/ClientRequest'));
const ClientContracts = React.lazy(() => import('./views/pages/PidvaDashboard/ClientManagement/ClientContracts'));
const ClientUsers = React.lazy(() => import('./views/pages/PidvaDashboard/ClientManagement/ClientUsers'));
const TeamManagement = React.lazy(() => import('./views/pages/PidvaDashboard/TeamManagement/TeamManagement'));
const RoleManagement = React.lazy(() => import('./views/pages/PidvaDashboard/TeamManagement/RoleManagement'));
const Permissions = React.lazy(() => import('./views/pages/PidvaDashboard/TeamManagement/Permissions'));
const Team360View = React.lazy(() => import('./views/pages/PidvaDashboard/TeamManagement/Team360View'));
const TeamProductivity = React.lazy(() => import('./views/pages/PidvaDashboard/TeamManagement/TeamProductivity'));
const JobsDistribution = React.lazy(() => import('./views/pages/PidvaDashboard/TeamManagement/JobsDistribution'));
const ClockInOut = React.lazy(() => import('./views/pages/PidvaDashboard/TeamManagement/ClockInOut'));
const SelectAWeek = React.lazy(() => import('./views/pages/PidvaDashboard/TeamManagement/SelectAWeek'));
const RequestManagementBGC = React.lazy(() => import('./views/pages/PidvaDashboard/RequestsManagement/BGC'));
const RequestManagementKYC = React.lazy(() => import('./views/pages/PidvaDashboard/RequestsManagement/KYC'));
const RequestReportDetail = React.lazy(() => import('./views/pages/PidvaDashboard/RequestsManagement/RequestReportDetail'));
const CreditManagement = React.lazy(() => import('./views/pages/PidvaDashboard/CreditManagement/CreditManagement'));
const ManageSubServices = React.lazy(() => import('./views/pages/PidvaDashboard/CreditManagement/ManageSubServices'));
const ClientCredits = React.lazy(() => import('./views/pages/PidvaDashboard/CreditManagement/ClientCredits'));
const CreateBillingContact = React.lazy(() => import('./views/pages/PidvaDashboard/CreditManagement/ClientBillingContacts'));
const CreditsPurchasesPostPay = React.lazy(() => import('./views/pages/PidvaDashboard/CreditManagement/CreditsPurchasesPostPay'));
const CreditsPurchasesPrepay = React.lazy(() => import('./views/pages/PidvaDashboard/CreditManagement/CreditsPurchasesPrepay'));
const ClientInvoicesPostPay = React.lazy(() => import('./views/pages/PidvaDashboard/CreditManagement/ClientInvoicesPostPay'));
const BGCRequests = React.lazy(() => import('./views/pages/PidvaDashboard/CreditManagement/BGCRequests'));
const KYCRequests = React.lazy(() => import('./views/pages/PidvaDashboard/CreditManagement/KYCRequests'));
const TicketManagement = React.lazy(() => import('./views/pages/PidvaDashboard/TicketManagement/TicketManagement'));
const PidvaMyProfile = React.lazy(() => import('./views/pages/PidvaDashboard/UserPages/MyProfile'));
const Configurations = React.lazy(() => import('./views/pages/PidvaDashboard/Configurations/Configurations'));
const Faculty = React.lazy(() => import('./views/pages/PidvaDashboard/Configurations/Faculty'));
const Course = React.lazy(() => import('./views/pages/PidvaDashboard/Configurations/Course'));
const Specialization = React.lazy(() => import('./views/pages/PidvaDashboard/Configurations/Specialization'));
const Levels = React.lazy(() => import('./views/pages/PidvaDashboard/Configurations/Levels'));
const Awards = React.lazy(() => import('./views/pages/PidvaDashboard/Configurations/Awards'));
const EmploymentConfiguration = React.lazy(() => import('./views/pages/PidvaDashboard/Configurations/EmploymentConfiguration'));

/* Super Admin routes */
const AdminLogin = React.lazy(() => import('./views/pages/auth/AdminLogin'));
const SuperAdminDashboard = React.lazy(() => import('./views/pages/SuperAdminDashboard/Dashboard/Dashboard'));
const SaaSOrganization = React.lazy(() => import('./views/pages/SuperAdminDashboard/SassUsers/SaaSOrganization'));
const SassUsersRequests = React.lazy(() => import('./views/pages/SuperAdminDashboard/SassUsers/SassUsersRequests'));
const SaasRetention = React.lazy(() => import('./views/pages/SuperAdminDashboard/SassUsers/SaasRetention'));
const SaasUsers = React.lazy(() => import('./views/pages/SuperAdminDashboard/SassUsers/SaasUsers'));
const SassUsersDetails = React.lazy(() => import('./views/pages/SuperAdminDashboard/SassUsers/SassUsersDetails'));
const Sass360View = React.lazy(() => import('./views/pages/SuperAdminDashboard/SassUsers/Sass360View'));
const Countries = React.lazy(() => import('./views/pages/SuperAdminDashboard/UserPages/Countries'));
const Category = React.lazy(() => import('./views/pages/SuperAdminDashboard/UserPages/Category'));
const Industry = React.lazy(() => import('./views/pages/SuperAdminDashboard/UserPages/Industry'));
const Currency = React.lazy(() => import('./views/pages/SuperAdminDashboard/UserPages/Currency'));
const AdminServices = React.lazy(() => import('./views/pages/SuperAdminDashboard/ServiceManagement/Services'));
const AdminSubServices = React.lazy(() => import('./views/pages/SuperAdminDashboard/ServiceManagement/SubServices'));
const SubServicesRequests = React.lazy(() => import('./views/pages/SuperAdminDashboard/ServiceManagement/SubServicesRequests'));
const SubscriptionManagement = React.lazy(() => import('./views/pages/SuperAdminDashboard/SubscriptionManagement/SubscriptionManagement'));
const SassSubscriptions = React.lazy(() => import('./views/pages/SuperAdminDashboard/SubscriptionManagement/SassSubscriptions'));
const AdminRoleManagement = React.lazy(() => import('./views/pages/SuperAdminDashboard/TeamManagement/RoleManagement'));
const AdminAssignRole = React.lazy(() => import('./views/pages/SuperAdminDashboard/TeamManagement/AssignRole'));
const AdminTeamManagement = React.lazy(() => import('./views/pages/SuperAdminDashboard/TeamManagement/TeamManagement'));
const DataSourceCredits = React.lazy(() => import('./views/pages/SuperAdminDashboard/CreditManagement/DataSourceCredits'));
const DataSourceCreditsDetail = React.lazy(() => import('./views/pages/SuperAdminDashboard/CreditManagement/DataSourceCreditsDetail'));
const SaaSBillingContacts = React.lazy(() => import('./views/pages/SuperAdminDashboard/CreditManagement/SaaSBillingContacts'));
const SaaSCredits = React.lazy(() => import('./views/pages/SuperAdminDashboard/CreditManagement/SaaSCredits'));
const SassCreditsDetails = React.lazy(() => import('./views/pages/SuperAdminDashboard/CreditManagement/SassCreditsDetails'));
const ProfileManagementCandidates = React.lazy(() => import('./views/pages/SuperAdminDashboard/ProfileManagement/Candidates'));
const ProfileManagementCompanies = React.lazy(() => import('./views/pages/SuperAdminDashboard/ProfileManagement/Companies'));
const ProfileManagementMergeFacility = React.lazy(() => import('./views/pages/SuperAdminDashboard/ProfileManagement/MergeFacility'));

const DataSourceManagement = React.lazy(() => import('./views/pages/SuperAdminDashboard/DataSource/DataSource'));
const DataSourceConfiguration = React.lazy(() => import('./views/pages/SuperAdminDashboard/DataSource/DataSourceConfiguration'));
const DataSource360View = React.lazy(() => import('./views/pages/SuperAdminDashboard/DataSource/DataSource360View '));
const AdminSubServicesPricing = React.lazy(() => import('./views/pages/SuperAdminDashboard/ServiceManagement/SubServicesPricing'));
const AdminDataEntryForm = React.lazy(() => import('./views/pages/SuperAdminDashboard/ReportsManagement/DataEntryForm'));
const AdminDataReportCreator = React.lazy(() => import('./views/pages/SuperAdminDashboard/ReportsManagement/ReportCreator'));
const AdminDataEntryFromCreator = React.lazy(() => import('./views/pages/SuperAdminDashboard/ReportsManagement/DataEntryFromCreator'));
const AdminMyProfile = React.lazy(() => import('./views/pages/SuperAdminDashboard/UserPages/MyProfile'));


const routes = [
	{ path: '/', exact: true, name: 'Home', component: Home },
	{ path: '/home', name: 'Home', component: Home },
	{ path: '/login', exact: true, name: 'Login', component: Login },
	{ path: '/signup', exact: true, name: 'SignUp', component: SignUp },
	{ path: '/company-information', exact: true, name: 'CompanyInformation', component: CompanyInformation },
	{ path: '/otp', exact: true, name: 'Otp', component: Otp },
	{ path: '/subscription-payment', exact: true, name: 'SubscriptionPayment', component: SubscriptionPayment },
	{ path: '/payment-option', exact: true, name: 'PaymentOption', component: PaymentOption },
	{ path: '/verify', exact: true, name: 'Verify', component: Verify },
	{ path: '/forgot-password', exact: true, name: 'ForgotPassword', component: ForgotPassword },
	{ path: '/reset-password', exact: true, name: 'ResetPassword', component: ResetPassword },
	{ path: '/company', exact: true, name: 'Company', component: Company },
	{ path: '/partners', exact: true, name: 'Partners', component: Partners },
	{ path: '/faq', exact: true, name: 'Faq', component: Faq },
	{ path: '/blog', exact: true, name: 'Blog', component: Blog },
	{ path: '/background-checks', exact: true, name: 'BackgroundChecks', component: BackgroundChecks },
	{ path: '/kyc', exact: true, name: 'KYC', component: KYC },
	{ path: '/insights-analytics', exact: true, name: 'RecruitmentFront', component: RecruitmentFront },
	{ path: '/recruitment', exact: true, name: 'InsightsAnalytics', component: InsightsAnalytics },
	{ path: '/logged-out', exact: true, name: 'LoggedOut', component: LoggedOut },

	/* PSMT Routes */
	{ path: '/psmt/dashboard', exact: true, name: 'PsmtDashboard', component: PsmtDashboard },
	{ path: '/psmt/signup', exact: true, name: 'PsmtSignUp', component: PsmtSignUp },
	{ path: '/psmt/company-information', exact: true, name: 'PsmtCompanyInformation', component: PsmtCompanyInformation },
	{ path: '/psmt/background-check', exact: true, name: 'BackgroundCheck', component: BackgroundCheck },
	{ path: '/psmt/reports', exact: true, name: 'Reports', component: Reports },
	{ path: '/psmt/make-a-request', exact: true, name: 'MakeRequest', component: MakeRequest },
	{ path: '/psmt/payments-postpay', exact: true, name: 'PaymentsPostPay', component: PaymentsPostPay },
	{ path: '/psmt/Payments-prepay', exact: true, name: 'PaymentsPrepay', component: PaymentsPrepay },
	{ path: '/psmt/my-profile', exact: true, name: 'MyProfile', component: MyProfile },
	{ path: '/psmt/company-profile', exact: true, name: 'CompanyProfile', component: CompanyProfile },
	{ path: '/psmt/recruitment', exact: true, name: 'Recruitment', component: Recruitment },
	{ path: '/psmt/analytics-information-reports', exact: true, name: 'AnalyticsInformationReports', component: AnalyticsInformationReports },
	{ path: '/psmt/OtpVerify', exact: true, name: 'OtpPsmt', component: OtpPsmt },
	{ path: '/psmt/kyc-make-a-request', exact: true, name: 'KYCMakeRequest', component: KYCMakeRequest },
	{ path: '/psmt/kyc-dashboard', exact: true, name: 'KYCDashboard', component: KYCDashboard },
	{ path: '/psmt/kyc-reports', exact: true, name: 'KYCReports', component: KYCReports },
	{ path: '/psmt/tickets', exact: true, name: 'Tickets', component: Tickets },
	
	/* Pidva routes */
	{ path: '/pidva/dashboard', exact: true, name: 'PidvaDashboard', component: PidvaDashboard },
	{ path: '/pidva/sub-services', exact: true, name: 'SubServices', component: SubServices },
	{ path: '/pidva/sub-services-pricing', exact: true, name: 'SubServicesPricing', component: SubServicesPricing },
	{ path: '/pidva/package', exact: true, name: 'Package', component: Package },
	{ path: '/pidva/client-management', exact: true, name: 'ClientManagement', component: ClientManagement },
	{ path: '/pidva/client-details', exact: true, name: 'ClientDetails', component: ClientDetails },
	{ path: '/pidva/client-request', exact: true, name: 'ClientRequest', component: ClientRequest },
	{ path: '/pidva/client-contracts', exact: true, name: 'ClientContracts', component: ClientContracts },
	{ path: '/pidva/client-users', exact: true, name: 'ClientUsers', component: ClientUsers },
	{ path: '/pidva/team-management', exact: true, name: 'TeamManagement', component: TeamManagement },
	{ path: '/pidva/roles-management', exact: true, name: 'RoleManagement', component: RoleManagement },
	{ path: '/pidva/permissions', exact: true, name: 'Permissions', component: Permissions },
	{ path: '/pidva/team-360-view/:id', exact: true, name: 'Team360View', component: Team360View },
	{ path: '/pidva/team-productivity/', exact: true, name: 'TeamProductivity', component: TeamProductivity },
	{ path: '/pidva/jobs-distribution/', exact: true, name: 'JobsDistribution', component: JobsDistribution },
	{ path: '/pidva/clock-in-out/', exact: true, name: 'ClockInOut', component: ClockInOut },
	{ path: '/pidva/select-a-week/', exact: true, name: 'SelectAWeek', component: SelectAWeek },
	{ path: '/pidva/bgc', exact: true, name: 'RequestManagementBGC', component: RequestManagementBGC },
	{ path: '/pidva/kyc', exact: true, name: 'RequestManagementKYC', component: RequestManagementKYC },
	{ path: '/pidva/request-detail/:id', exact: true, name: 'RequestReportDetail', component: RequestReportDetail },
	{ path: '/pidva/credit-management', exact: true, name: 'CreditManagement', component: CreditManagement },
	{ path: '/pidva/manage-sub-services', exact: true, name: 'ManageSubServices', component: ManageSubServices },
	{ path: '/pidva/client-credits', exact: true, name: 'ClientCredits', component: ClientCredits },
	{ path: '/pidva/create-billing-contact', exact: true, name: 'CreateBillingContact', component: CreateBillingContact },
	{ path: '/pidva/credits-purchases-postpay', exact: true, name: 'CreditsPurchasesPostPay', component: CreditsPurchasesPostPay },
	{ path: '/pidva/credits-purchases-prepay', exact: true, name: 'CreditsPurchasesPrepay', component: CreditsPurchasesPrepay },
	{ path: '/pidva/client-invoices-postpay', exact: true, name: 'ClientInvoicesPostPay', component: ClientInvoicesPostPay },
	{ path: '/pidva/bgc-requests', exact: true, name: 'BGCRequests', component: BGCRequests },
	{ path: '/pidva/kyc-requests', exact: true, name: 'KYCRequests', component: KYCRequests },
	{ path: '/pidva/ticket-management', exact: true, name: 'TicketManagement', component: TicketManagement },
	{ path: '/pidva/my-profile', exact: true, name: 'PidvaMyProfile', component: PidvaMyProfile },
	{ path: '/pidva/configurations', exact: true, name: 'Configurations', component: Configurations },
	{ path: '/pidva/education-faculty', exact: true, name: 'Faculty', component: Faculty },
	{ path: '/pidva/education-course', exact: true, name: 'Course', component: Course },
	{ path: '/pidva/education-specialization', exact: true, name: 'Specialization', component: Specialization },
	{ path: '/pidva/education-levels', exact: true, name: 'Levels', component: Levels },
	{ path: '/pidva/education-awards', exact: true, name: 'Awards', component: Awards },
	{ path: '/pidva/education-employment-configuration', exact: true, name: 'EmploymentConfiguration', component: EmploymentConfiguration },

	/* Super Admin routes */
	{ path: '/admin/login', exact: true, name: 'AdminLogin', component: AdminLogin },
	{ path: '/admin/dashboard', exact: true, name: 'SuperAdminDashboard', component: SuperAdminDashboard },
	{ path: '/admin/my-profile', exact: true, name: 'AdminMyProfile', component: AdminMyProfile },
	{ path: '/admin/sass-organization', exact: true, name: 'SaaSOrganization', component: SaaSOrganization },
	{ path: '/admin/sass-users-requests', exact: true, name: 'SassUsersRequests', component: SassUsersRequests },
	{ path: '/admin/saas-retention', exact: true, name: 'SaasRetention', component: SaasRetention },
	{ path: '/admin/saas-users', exact: true, name: 'SaasUsers', component: SaasUsers },
	{ path: '/admin/sass-360-view', exact: true, name: 'Sass360View', component: Sass360View },
	{ path: '/admin/sass-user-details/:id', exact: true, name: 'SassUsersDetails', component: SassUsersDetails },
	{ path: '/admin/countries', exact: true, name: 'Countries', component: Countries },
	{ path: '/admin/category', exact: true, name: 'Category', component: Category },
	{ path: '/admin/industry', exact: true, name: 'Industry', component: Industry },
	{ path: '/admin/currency', exact: true, name: 'Currency', component: Currency },
	{ path: '/admin/services', exact: true, name: 'AdminServices', component: AdminServices },
	{ path: '/admin/sub-service', exact: true, name: 'AdminSubServices', component: AdminSubServices },
	{ path: '/admin/sub-service-requests', exact: true, name: 'SubServicesRequests', component: SubServicesRequests },
	{ path: '/admin/subscription-management', exact: true, name: 'SubscriptionManagement', component: SubscriptionManagement },
	{ path: '/admin/saas-subscription/:id', exact: true, name: 'SassSubscriptions', component: SassSubscriptions },
	{ path: '/admin/roles-management', exact: true, name: 'AdminRoleManagement', component: AdminRoleManagement },
	{ path: '/admin/assign-role/:id', exact: true, name: 'AdminAssignRole', component: AdminAssignRole },
	{ path: '/admin/team-members', exact: true, name: 'AdminTeamManagement', component: AdminTeamManagement },
	{ path: '/admin/data-source-credits', exact: true, name: 'DataSourceCredits', component: DataSourceCredits },
	{ path: '/admin/data-source-credits/:id', exact: true, name: 'DataSourceCreditsDetail', component: DataSourceCreditsDetail },
	{ path: '/admin/sass-credits', exact: true, name: 'SassCredits', component: SaaSCredits },
	{ path: '/admin/sass-credits/:id', exact: true, name: 'SassCreditsDetails', component: SassCreditsDetails },
	{ path: '/admin/sass-billing-contacts', exact: true, name: 'SaaSBillingContacts', component: SaaSBillingContacts },
	{ path: '/admin/candidates', exact: true, name: 'ProfileManagementCandidates', component: ProfileManagementCandidates },
	{ path: '/admin/companies', exact: true, name: 'ProfileManagementCompanies', component: ProfileManagementCompanies },
	{ path: '/admin/merge-facility', exact: true, name: 'ProfileManagementMergeFacility', component: ProfileManagementMergeFacility },

	{ path: '/admin/data-source', exact: true, name: 'DataSourceManagement', component: DataSourceManagement },
	{ path: '/admin/data-source-configuration', exact: true, name: 'DataSourceConfiguration', component: DataSourceConfiguration },
	{ path: '/admin/data-source-360-view', exact: true, name: 'DataSource360View', component: DataSource360View },
	{ path: '/admin/sub-service-pricing', exact: true, name: 'SubServicesPricing', component: AdminSubServicesPricing },
	{ path: '/admin/data-entry-form', exact: true, name: 'DataEntryForm', component: AdminDataEntryForm },
	{ path: '/admin/data-entry-form-creator', exact: true, name: 'DataEntryFromCreator', component: AdminDataEntryFromCreator },
	{ path: '/admin/data-report-creator', exact: true, name: 'DataReportCreator', component: AdminDataReportCreator },
];

export default routes;
