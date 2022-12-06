export const authCookieKey = 'tokenKey';


//export const disableAuthorization: boolean = false;
//export const authorizationServerUrl = 'http://localhost:35429';
//export const pathMatch = '/UMRRecruitment';
////export const authorizationServerUrl = 'http://172.16.205.67/UMRRecruitmentAuthorizationServer';
//export const scopes = ['umr_recruitment_web_api', 'offline_access', 'openid'];
//export const devTimeLoginId: string = 'test';
//export const devTimePassword: string = 'test';
//export const resourceServerUrl = 'http://localhost:14243';
////export const resourceServerUrl = 'http://172.16.205.67/UMRRecruitmentResourceServer';


//////////////////////////  172.16.1.11 Test  /////////////////////////////////
//export const disableAuthorization: boolean = true;
//export const authorizationServerUrl = 'http://www.umrtest.com/UMRPublicAPIAuthorizationServer';
//export const pathMatch = '/UMRPublic';
//export const scopes = ['UMRPublic', 'offline_access', 'openid'];
//export const resourceServerUrl = 'http://www.umrtest.com/UMRPublicAPIResourceServer';


//////////////////////////  172.16.1.104 PRODUCTION  //////////////////////////
//export const disableAuthorization: boolean = true;
//export const authorizationServerUrl = 'https://www.universalmedicalrecord.com/UMRPublicAPIAuthorizationServer';
//export const pathMatch = '/UMRPublic';
//export const scopes = ['UMRPublic', 'offline_access', 'openid'];
//export const resourceServerUrl = 'https://www.universalmedicalrecord.com/UMRPublicAPIResourceServer';


////////////////////////// Localhost /////////////////////////////////////////
export const disableAuthorization: boolean = true;
export const authorizationServerUrl = 'http://localhost:35427';
export const pathMatch = '/UMRPublic';
export const scopes = ['UMRPublic', 'offline_access', 'openid'];
//export const resourceServerUrl = 'http://localhost:2696';


//////////////////////////  SPIKE  ////////////////////////////////////////////
//export const disableAuthorization: boolean = true;
//export const authorizationServerUrl = 'http://172.16.205.67:1515';
//export const pathMatch = '/UMRPublic';
//export const scopes = ['UMRPublic', 'offline_access', 'openid'];
//export const resourceServerUrl = 'http://172.16.205.67:1516';


export const allPermissions = ['Add New Applicant', 'Allowed IP', 'Applicant Degree', 'Applicant Ownership', 'Applicant Skill', 'Applicant Transfer', 'Applicants', 'Assign Recruiter Role', 'Calendar', 'Cold Tracking', 'Configure Field Access Permission', 'Contact', 'Email', 'Follow-up', 'General Population', 'Hot Tracking', 'Information', 'Institution Information', 'Institution Type Information', 'Interview', 'Job Attributes', 'Job Skills', 'Manage Profile', 'Manage Recruiter', 'Manage Role', 'Others', 'Pending', 'Placement', 'Position Information', 'Profiles', 'Recruiter', 'Send Out', 'Settings', 'User Mail', 'User Mail Configuration', 'User Mail Template', 'User Settings', 'View By Applicant', 'View by Institution', 'Logout'];

///////// localhost ///////////
//export const resourceServerUrl = 'http://localhost:40123';

///////// umrtest ////////////
//export const resourceServerUrl = 'http://www.umrtest.com/publicjobAPI';

//////////// production ///////////////
export const resourceServerUrl = 'https://www.universalmedicalrecord.com/publicjobAPI';
