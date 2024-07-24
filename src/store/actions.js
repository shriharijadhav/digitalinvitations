import { C_ADD_NEW_FAMILY_MEMBER, C_CHANGE_PRIORITY_BETWEEN_BRIDE_AND_GROOM, C_CHANGE_PRIORITY_BETWEEN_FAMILY, C_CHANGE_PRIORITY_BETWEEN_PARENTS, C_CLEAR_PARENT_DETAILS, C_DELETE_ACTUAL_IMAGE, C_DELETE_ACTUAL_IMAGE_BRIDE_PARENT, C_DELETE_ACTUAL_IMAGE_GROOM_PARENT, C_DELETE_FAMILY_MEMBER_IMAGE, C_DELETE_MEMBER_BY_INDEX, C_DELETE_MEMBER_DETAILS_BY_INDEX, C_DELETE_PHOTO_FROM_GALLERY, C_ENGAGEMENT_ADDRESS_SAME_AS_WEDDING, C_HALDI_ADDRESS_SAME_AS_WEDDING, C_HANDLE_CHANGE_INVITER_DETAILS, C_IMAGE_UPLOAD_DONE_FOR_BRIDE, C_SANGEET_ADDRESS_SAME_AS_WEDDING, C_SAVE_ACTUAL_IMAGE, C_SAVE_BRIDE_AND_GROOM_BASIC_DETAILS, C_SAVE_BRIDE_PARENT_ACTUAL_IMAGE, C_SAVE_BRIDE_PARENT_DETAILS, C_SAVE_ENGAGEMENT_ADDRESS, C_SAVE_ENGAGEMENT_DATE, C_SAVE_ENGAGEMENT_TIME, C_SAVE_EVENT_ADDRESS, C_SAVE_EVENT_ADDRESS_GOOGLE_MAP_LINK, C_SAVE_EVENT_DATE, C_SAVE_EVENT_FIELD_DETAILS, C_SAVE_EVENT_NAME, C_SAVE_EVENT_TIME, C_SAVE_FAMILY_ARRAY, C_SAVE_FAMILY_MEMBER_IMAGE, C_SAVE_GROOM_PARENT_ACTUAL_IMAGE, C_SAVE_GROOM_PARENT_DETAILS, C_SAVE_HALDI_ADDRESS, C_SAVE_HALDI_DATE, C_SAVE_HALDI_TIME, C_SAVE_MEDIA_DETAILS, C_SAVE_PHOTO_GALLERY, C_SAVE_SANGEET_ADDRESS, C_SAVE_SANGEET_DATE, C_SAVE_SANGEET_TIME, C_TOGGLE_ADD_ENGAGEMENT_DETAILS, C_TOGGLE_ADD_FAMILY_DETAILS, C_TOGGLE_ADD_HALDI_DETAILS, C_TOGGLE_ADD_INVITER_DETAILS, C_TOGGLE_ADD_PARENT_DETAILS, C_TOGGLE_ADD_SANGEET_DETAILS, C_UPDATE_GALLERY_DETAILS, HANDLE_CHANGE_FOR_MEMBER_DETAILS, PREVIOUS_PAGE, PROCEED_TO_NEXT_PAGE, RESET_CURRENT_PAGE_TO_ONE, RESET_TEMP_NEW_CARD_DATA, SAVE_LIVE_CARD_DETAILS, SAVE_USER_AUDIO_FILE, SET_CARD_PREVIEW_DATA, TOGGLE_REJECT_DEFAULT_AUDIO_FILES, UPDATE_EVENT_FIELD_DETAILS, UPDATE_FORM_ERROR, UPDATE_SELECTED_AUDIO_DETAILS, UPDATE_SELECTED_AUDIO_INDEX } from "./actionTypes"
import { apiConnector } from './../services/apiConnector';
import { fetchCardData, saveNewCard } from "../services/apis";

// login actions
import { loginUser, reGenerateOTPObj, signupUser, verifyAccountObj } from "../services/apis"
import { ACCOUNT_VERIFICATION_SUCCESSFUL, DISABLE_OTP_REGENERATION, ENABLE_OTP_REGENERATION, INVALID_EMAIL, INVALID_FIRST_NAME, INVALID_LAST_NAME, INVALID_PASSWORD, LOGIN_FAILED, MATCH_PASSWORDS, OTP_PATTERN_MATCH, OTP_REGENERATION_SUCCESSFUL, PROCEED_TO_ACCOUNT_VERIFICATION, SELECT_LOGIN_FORM, SELECT_SIGNUP_FORM, SIGNUP_SUCCESSFUL, TOGGLE_SHOW_PASSWORD, UPDATE_LOGIN_FORM, USER_ALREADY_REGISTERED, VALID_EMAIL, WRONG_OTP_ENTERED } from "./actionTypes"



export const updateEventCardLink = (fieldName,data,cardId) => {
    console.log(fieldName,data,cardId)
    return{
        type:UPDATE_EVENT_FIELD_DETAILS,fieldName:fieldName,payload:data,cardId:cardId
    }
}

export const updateFormError = (errorName,errorMessage)=>{
    return{
        type:UPDATE_FORM_ERROR,errorName:errorName,payload:errorMessage
    }
}


// actions for creating a new event card

export const saveEventCardLink = (fieldName,data) => {
    console.log(fieldName,data)
    return{
        type:C_SAVE_EVENT_FIELD_DETAILS,fieldName:fieldName,payload:data
    }
}

export const savedEventName = (fieldName,data) => {
    return{
        type:C_SAVE_EVENT_NAME,fieldName:fieldName,payload:data
    }
}

export const saveEventDate = (newDateString,rawDateString) =>{
     return{
        type:C_SAVE_EVENT_DATE,payload:newDateString,rawDateString:rawDateString
    }
}
export const saveEngagementDate = (newDateString,rawDateString) =>{
    return{
        type:C_SAVE_ENGAGEMENT_DATE,payload:newDateString,rawDateString:rawDateString
    }
}
export const saveEngagementTime = (engagementTime) =>{
    return{
        type:C_SAVE_ENGAGEMENT_TIME,payload:engagementTime
    }
}
export const saveEventTime = (eventTime) =>{
    return{
        type:C_SAVE_EVENT_TIME,payload:eventTime
    }
}

export const saveEventAddress = (data) =>{
    return{
        type:C_SAVE_EVENT_ADDRESS,payload:data
    }
}

export const makeEngagementAddressSameAsWedding = (flag)=>{
    return{
        type:C_ENGAGEMENT_ADDRESS_SAME_AS_WEDDING,payload:flag
    }
}

// sangeet starts

export const saveSangeetDate = (newDateString,rawDateString) =>{
    return{
        type:C_SAVE_SANGEET_DATE,payload:newDateString,rawDateString:rawDateString
    }
}
export const saveSangeetTime = (engagementTime) =>{
    return{
        type:C_SAVE_SANGEET_TIME,payload:engagementTime
    }
}

export const saveSangeetAddress = (data) =>{
    return{
        type:C_SAVE_SANGEET_ADDRESS,payload:data
    }
}
export const makeSangeetAddressSameAsWedding = (flag)=>{
    return{
        type:C_SANGEET_ADDRESS_SAME_AS_WEDDING,payload:flag
    }
}
export const toggleAddSangeetDetails = (flag)=>{
    return{
        type:C_TOGGLE_ADD_SANGEET_DETAILS,payload:flag
    }
}

// sangeet ends

// haldi starts

export const saveHaldiDate = (newDateString,rawDateString) =>{
    return{
        type:C_SAVE_HALDI_DATE,payload:newDateString,rawDateString:rawDateString
    }
}
export const saveHaldiTime = (engagementTime) =>{
    return{
        type:C_SAVE_HALDI_TIME,payload:engagementTime
    }
}

export const saveHaldiAddress = (data) =>{
    return{
        type:C_SAVE_HALDI_ADDRESS,payload:data
    }
}
export const makeHaldiAddressSameAsWedding = (flag)=>{
    return{
        type:C_HALDI_ADDRESS_SAME_AS_WEDDING,payload:flag
    }
}
export const toggleAddHaldiDetails = (flag)=>{
    return{
        type:C_TOGGLE_ADD_HALDI_DETAILS,payload:flag
    }
}

// sangeet ends


export const toggleAddEngagementDetails = (flag)=>{
    return{
        type:C_TOGGLE_ADD_ENGAGEMENT_DETAILS,payload:flag
    }
}

export const saveEngagementAddress = (data) =>{
    return{
        type:C_SAVE_ENGAGEMENT_ADDRESS,payload:data
    }
}

export const resetTempNewCardData = () => {
    return{
        type:RESET_TEMP_NEW_CARD_DATA
    }
}

// bride & groom details
export const saveBrideAndGroomBasicDetails = (category,fieldName,data) => {
    return{
        type:C_SAVE_BRIDE_AND_GROOM_BASIC_DETAILS,category:category,fieldName:fieldName,payload:data
    }

}
export const saveActualImage = (image,personDetails) =>{
    console.log(image)
    return{
        type:C_SAVE_ACTUAL_IMAGE,payload:image,personDetails:personDetails
    }
}
export const deleteActualImage = (personDetails) =>{
    return{
        type:C_DELETE_ACTUAL_IMAGE,personDetails:personDetails
    }
}

export const saveMediaDetails = (category,index,fieldName,data)=>{
    return{
        type:C_SAVE_MEDIA_DETAILS,category:category,index:index,fieldName:fieldName,payload:data
    }
}

export const function_imageUploadDoneForBride= (flag) => {
    return{
        type:C_IMAGE_UPLOAD_DONE_FOR_BRIDE,payload:flag
    }
}


// parent details starts
export const toggleAddParentDetails = (flag)=>{
    return{
        type:C_TOGGLE_ADD_PARENT_DETAILS,payload:flag
    }
}
export const toggleAddFamilyDetails = (flag)=>{
    return{
        type:C_TOGGLE_ADD_FAMILY_DETAILS,payload:flag
    }
}

export const saveBrideParentDetails = (fieldName,data) => {
     return{
        type:C_SAVE_BRIDE_PARENT_DETAILS,fieldName:fieldName,payload:data
    }
}

export const saveGroomParentDetails = (fieldName,data) => {
    return{
       type:C_SAVE_GROOM_PARENT_DETAILS,fieldName:fieldName,payload:data
   }
}

export const saveBrideParentActualImage = (image,personDetails) =>{
    return{
        type:C_SAVE_BRIDE_PARENT_ACTUAL_IMAGE,payload:image,personDetails:personDetails
    }
}
export const deleteActualImage_brideParent = (personDetails) =>{
    return{
        type:C_DELETE_ACTUAL_IMAGE_BRIDE_PARENT,personDetails:personDetails
    }
}

export const deleteActualImage_groomParent = (personDetails) =>{
    return{
        type:C_DELETE_ACTUAL_IMAGE_GROOM_PARENT,personDetails:personDetails
    }
}


export const saveGroomParentActualImage = (image,personDetails) =>{
    return{
        type:C_SAVE_GROOM_PARENT_ACTUAL_IMAGE,payload:image,personDetails:personDetails
    }
}

export const clearParentDetails= ( ) =>{
    return{
        type:C_CLEAR_PARENT_DETAILS
    }
}

export const changePriorityBetweenParents = (value)=>{
    return{
        type:C_CHANGE_PRIORITY_BETWEEN_PARENTS,payload:value
    }
}

export const changePriorityBetweenFamily = (value)=>{
    return{
        type:C_CHANGE_PRIORITY_BETWEEN_FAMILY,payload:value
    }
}

export const changePriorityBetweenBrideAndGroom = (value)=>{
    return{
        type:C_CHANGE_PRIORITY_BETWEEN_BRIDE_AND_GROOM,payload:value
    }
}

export const saveEventAddress_Google_Map_link = (data) =>{
    return{
        type:C_SAVE_EVENT_ADDRESS_GOOGLE_MAP_LINK,payload:data
    }
}
// parent details ends


export const updateGalleryDetails = (newArray) =>{
    return{
        type:C_UPDATE_GALLERY_DETAILS,payload:newArray
    }
}

export const toggleAddInviterDetails = (flag) =>{
    return{
        type:C_TOGGLE_ADD_INVITER_DETAILS,payload:flag
    }
}
export const handleChangeForInviterDetails = (fieldName,data) =>{
    return{
        type:C_HANDLE_CHANGE_INVITER_DETAILS,fieldName:fieldName,payload:data
    }
}
// handle page events
export const resetCurrentPageToOne = () => {
    return{
        type:RESET_CURRENT_PAGE_TO_ONE
    }
}
export const proceedToNextPage = () => {
    return{
        type:PROCEED_TO_NEXT_PAGE
    }
}

export const previousPage = () => {
    return{
        type:PREVIOUS_PAGE
    }
}


export const savePhotoGallery = (fileArray) =>{
    return{
        type:C_SAVE_PHOTO_GALLERY,payload:fileArray
    }
}

export const deletePhotoFromGallery = (index) => {
    return{
        type:C_DELETE_PHOTO_FROM_GALLERY,payload:index
    }
}

export const toggleRejectDefaultAudioFiles = () => {
    return{
        type:TOGGLE_REJECT_DEFAULT_AUDIO_FILES
    }
}

export const updateSelectedAudioIndex = (index) => {
    return{
        type:UPDATE_SELECTED_AUDIO_INDEX,payload:index
    }
}

export const updateSelectedAudioDetails = (obj) => {
    return{
        type:UPDATE_SELECTED_AUDIO_DETAILS,payload:obj
    }
}

export const saveUserAudioFile = (file) => {
    return{
        type:SAVE_USER_AUDIO_FILE,payload:file
    }
}

export const saveFamilyArray = (updatedArray) => {
    return{
        type:C_SAVE_FAMILY_ARRAY, payload:updatedArray
    }
}

// family starts

export const deleteMemberByIndex = (index) => {
    return{
        type:C_DELETE_MEMBER_BY_INDEX, payload:index
    }
}

export const saveFamilyMemberImage = (index,image) => {
    return{
        type:C_SAVE_FAMILY_MEMBER_IMAGE,index:index,payload:image
    }
}

export const deleteFamilyMemberImage = (index)=>{
    return{
        type:C_DELETE_FAMILY_MEMBER_IMAGE,payload:index
    }
}

export const deleteMemberDetailsByIndex = (index) => {
    return {
        type:C_DELETE_MEMBER_DETAILS_BY_INDEX,payload:index
    }
}

export const handleChangeForMemberDetails = (index, fieldName, value) =>{
    console.log(index, fieldName, value)
    return {
        type:HANDLE_CHANGE_FOR_MEMBER_DETAILS,index:index,fieldName:fieldName,payload:value
    }
}

export const addNewFamilyMember = (familyMember) => {
    return{
        type:C_ADD_NEW_FAMILY_MEMBER,payload:familyMember
    }
}
// family cases ends



// preview- card actions start
export const setPreviewCardData = () => {
    return{
        type:SET_CARD_PREVIEW_DATA
    }
}


//  preview- card actions end




// API calls

export const makeApiCallToSaveNewCard = (data) =>{
    console.log(data)
    return async(dispatch) =>{
        try {
             const response  = await apiConnector('post',saveNewCard.API_ROUTE,data,{
                'Content-Type': 'multipart/form-data',
              },null)
            console.log(response)
        } catch (error) {
            
        }
    }
}


export const saveLiveCardDetails = (data) =>{
    return {
        type:SAVE_LIVE_CARD_DETAILS,payload:data
    }
}
export const makeApiCallToFetchCardData = (url) =>{
    return async(dispatch)=>{
        try {
           const response = await apiConnector('post',fetchCardData.API_ROUTE,{cardUrl:url},null,null) 
        //    console.log(response)
            dispatch(saveLiveCardDetails(response.data.data))
        } catch (error) {
            
        }
    }
}




export const updateLoginFormData = (fieldName,data) => {
    return{
        type:UPDATE_LOGIN_FORM,fieldName:fieldName,payload:data
    }
}

export const selectLoginForm = () => {
    return{
        type:SELECT_LOGIN_FORM
    }
}
export const selectSignUpForm = () => {
    return{
        type:SELECT_SIGNUP_FORM
    }
}

export const toggleShowPassword = () => {
    return{
        type:TOGGLE_SHOW_PASSWORD
    }
}


export function checkEmailValidity(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return {
            type:INVALID_EMAIL,payload:true
        }
    }else{
        return {
            type:INVALID_EMAIL,payload:false
        } 
    }
}

export function checkFirstNameValidity(name) {
    // Regular expression to match valid names (only alphabets, no spaces, and not empty)
    const nameRegex = /^[A-Za-z]+$/;
  
    // Check if the name matches the regular expression
     if(!nameRegex.test(name) && name.trim().length > 0){
        return {
            type:INVALID_FIRST_NAME,payload:true
        }
    }else{
        return {
            type:INVALID_FIRST_NAME,payload:false
        } 
    }
}

export function checkLastNameValidity(name) {
    // Regular expression to match valid names (only alphabets, no spaces, and not empty)
    const nameRegex = /^[A-Za-z]+$/;
  
    // Check if the name matches the regular expression
     if(!nameRegex.test(name) && name.trim().length > 0){
        return {
            type:INVALID_LAST_NAME,payload:true
        }
    }else{
        return {
            type:INVALID_LAST_NAME,payload:false
        } 
    }
}

export const checkPasswordValidity = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!passwordRegex.test(password)){
        return {
            type:INVALID_PASSWORD,payload:true
        }
    }else{
        return {
            type:INVALID_PASSWORD,payload:false
        } 
    }
}

export const matchPasswords = (password,confirmPassword) => {
   
    if(password !== confirmPassword){
        return {
            type:MATCH_PASSWORDS,payload:true
        }
    }else{
        return {
            type:MATCH_PASSWORDS,payload:false
        } 
    }
}

export const userAlreadyRegistered = (flag) => {
    return{
        type:USER_ALREADY_REGISTERED,payload:flag
    }

}
export const signupSuccessful = (flag)=>{
    return{
        type:SIGNUP_SUCCESSFUL,payload:flag
    } 
}


export const proceedToAccountVerification = (data) => {
    return{
        type:PROCEED_TO_ACCOUNT_VERIFICATION,payload:data
    }
}


export const signup = (signUpData) =>{
    console.log('signUpData',signUpData)
    return async(dispatch)=>{
        try {
            const response = await apiConnector('post', signupUser.SIGNUP_API, signUpData,null, null);
            console.log(response)

            if(response?.data?.isUserAlreadyExist){
                dispatch(userAlreadyRegistered(true));
            }

            if(response?.data?.success){
                dispatch(signupSuccessful(true));
                console.log(response.data)
                dispatch(proceedToAccountVerification(response.data.token))
            }else{
                dispatch(signupSuccessful(false))

            }


        } catch (error) {
            
        }
    }
}

export const loginFailed = (flag) => {
    return{
        type:LOGIN_FAILED
    }
}

export const login = (loginData) =>{
    // console.log(loginData)
    return async(dispatch)=>{
        try {
          const response = await apiConnector('post',loginUser.LOGIN_API, loginData,null, null);
        //   dispatch(saveLoginResponse(response?.data))
          console.log(response?.data)

        if(!response?.data?.loginSuccess){
           if(response?.data?.proceedToAccountVerificationScreen){
            dispatch(loginFailed(true));
            dispatch(proceedToAccountVerification(response?.data?.token))
           }
        }


        } catch (error) {
          console.log('failed')  
        }
    }
}


export const enableOtpRegeneration= () =>{
    return{
        type:ENABLE_OTP_REGENERATION
    }
}
export const disableOtpRegeneration= () =>{
    return{
        type:DISABLE_OTP_REGENERATION
    }
}

export const otpRegenerationSuccessful = (data) =>{
    return{
        type:OTP_REGENERATION_SUCCESSFUL,payload:data
    }
}

export const makeApiCallToGetNewOtp = (userEmail) =>{
    return async (dispatch) =>{
        try {
            const response = await apiConnector('post', reGenerateOTPObj.REGENERATE_OTP,{userEmail},null, null);
            console.log(response.data)
            dispatch(otpRegenerationSuccessful(response.data.token))
        } catch (error) {
           console.log('OTP regenerate API call failed: ') 
        }        
    }
}


export const isValidOtpPattern = (otp) =>{
    const otpRegex = /^\d{6}$/;
    if(otpRegex.test(otp)){
        return{
            type:OTP_PATTERN_MATCH,payload:true,enteredOtp:otp
        }
    }else{
        return{
            type:OTP_PATTERN_MATCH,payload:false,enteredOtp:otp
        }
    }
}
export const accountVerification_Successful = (flag) =>{
    return{
        type:ACCOUNT_VERIFICATION_SUCCESSFUL,payload:flag
    }
}
export const wrongOtpEntered = (flag) =>{
    return{
        type:WRONG_OTP_ENTERED,payload:flag
    }
}

export const makeApiCallToVerifyAccount = (userEmail,enteredOtp) =>{
    return async (dispatch) =>{
        try {
            const response = await apiConnector('post',verifyAccountObj.VERIFY_ACCOUNT,{email:userEmail,otpFromRequest:enteredOtp},null,null)
            console.log(response.data)
            // isOTPMatching
            if(!response.data.isOTPMatching){
                dispatch(wrongOtpEntered(true))
            }

            if(response.data.accountVerification === 'done'){
                dispatch(accountVerification_Successful(true))
                dispatch(wrongOtpEntered(false))

            }else{
                dispatch(accountVerification_Successful(false))
            }
        } catch (error) {
           console.log('OTP regenerate API call failed: ') 
           dispatch(accountVerification_Successful(false))

        }        
    }
    
}