import { C_ADD_NEW_FAMILY_MEMBER, C_CHANGE_PRIORITY_BETWEEN_BRIDE_AND_GROOM, C_CHANGE_PRIORITY_BETWEEN_FAMILY, C_CHANGE_PRIORITY_BETWEEN_PARENTS, C_CLEAR_PARENT_DETAILS, C_DELETE_ACTUAL_IMAGE, C_DELETE_ACTUAL_IMAGE_BRIDE_PARENT, C_DELETE_ACTUAL_IMAGE_GROOM_PARENT, C_DELETE_FAMILY_MEMBER_IMAGE, C_DELETE_MEMBER_BY_INDEX, C_DELETE_MEMBER_DETAILS_BY_INDEX, C_DELETE_PHOTO_FROM_GALLERY, C_ENGAGEMENT_ADDRESS_SAME_AS_WEDDING, C_HALDI_ADDRESS_SAME_AS_WEDDING, C_IMAGE_UPLOAD_DONE_FOR_BRIDE, C_SANGEET_ADDRESS_SAME_AS_WEDDING, C_SAVE_ACTUAL_IMAGE, C_SAVE_BRIDE_AND_GROOM_BASIC_DETAILS, C_SAVE_BRIDE_PARENT_ACTUAL_IMAGE, C_SAVE_BRIDE_PARENT_DETAILS, C_SAVE_ENGAGEMENT_ADDRESS, C_SAVE_ENGAGEMENT_DATE, C_SAVE_ENGAGEMENT_TIME, C_SAVE_EVENT_ADDRESS, C_SAVE_EVENT_ADDRESS_GOOGLE_MAP_LINK, C_SAVE_EVENT_DATE, C_SAVE_EVENT_FIELD_DETAILS, C_SAVE_EVENT_NAME, C_SAVE_EVENT_TIME, C_SAVE_FAMILY_ARRAY, C_SAVE_FAMILY_MEMBER_IMAGE, C_SAVE_GROOM_PARENT_ACTUAL_IMAGE, C_SAVE_GROOM_PARENT_DETAILS, C_SAVE_HALDI_ADDRESS, C_SAVE_HALDI_DATE, C_SAVE_HALDI_TIME, C_SAVE_MEDIA_DETAILS, C_SAVE_PHOTO_GALLERY, C_SAVE_SANGEET_ADDRESS, C_SAVE_SANGEET_DATE, C_SAVE_SANGEET_TIME, C_TOGGLE_ADD_ENGAGEMENT_DETAILS, C_TOGGLE_ADD_FAMILY_DETAILS, C_TOGGLE_ADD_HALDI_DETAILS, C_TOGGLE_ADD_INVITER_DETAILS, C_TOGGLE_ADD_PARENT_DETAILS, C_TOGGLE_ADD_SANGEET_DETAILS, C_UPDATE_GALLERY_DETAILS, HANDLE_CHANGE_FOR_MEMBER_DETAILS, PREVIOUS_PAGE, PROCEED_TO_NEXT_PAGE, RESET_CURRENT_PAGE_TO_ONE, RESET_TEMP_NEW_CARD_DATA, SAVE_LIVE_CARD_DETAILS, SAVE_USER_AUDIO_FILE, TOGGLE_REJECT_DEFAULT_AUDIO_FILES, UPDATE_EVENT_FIELD_DETAILS, UPDATE_FORM_ERROR, UPDATE_SELECTED_AUDIO_DETAILS, UPDATE_SELECTED_AUDIO_INDEX } from "./actionTypes"
import { apiConnector } from './../services/apiConnector';
import { fetchCardData, saveNewCard } from "../services/apis";

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