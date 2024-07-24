export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

export const saveNewCard = {
    API_ROUTE : BACKEND_BASE_URL + '/createNewCard'
}

export const fetchCardData = {
    API_ROUTE : BACKEND_BASE_URL + '/fetchCardDetails'
}



export const signupUser = {
    SIGNUP_API : BACKEND_BASE_URL + '/signup',
}

export const loginUser = {
    LOGIN_API : BACKEND_BASE_URL + '/login',
}

export const reGenerateOTPObj = {
    REGENERATE_OTP : BACKEND_BASE_URL + '/reGenerateOTP',
}

export const verifyAccountObj = {
    VERIFY_ACCOUNT : BACKEND_BASE_URL + '/otpVerification',
}