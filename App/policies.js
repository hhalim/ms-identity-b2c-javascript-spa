/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_signup_signin",
        forgotPassword: "B2C_1_pwd_reset",
        editProfile: "B2C_1_edit_profile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://ah3555b2ctest.b2clogin.com/ah3555b2ctest.onmicrosoft.com/B2C_1_signup_signin",
        },
        forgotPassword: {
            authority: "https://ah3555b2ctest.b2clogin.com/ah3555b2ctest.onmicrosoft.com/B2C_1_pwd_reset",
        },
        editProfile: {
            authority: "https://ah3555b2ctest.b2clogin.com/ah3555b2ctest.onmicrosoft.com/B2C_1_edit_profile"
        }
    },
    authorityDomain: "ah3555b2ctest.b2clogin.com"
}