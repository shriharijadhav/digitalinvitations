import { C_IMAGE_UPLOAD_DONE_FOR_BRIDE, C_SAVE_BRIDE_AND_GROOM_BASIC_DETAILS, C_SAVE_ENGAGEMENT_DATE, C_SAVE_ENGAGEMENT_TIME, C_SAVE_EVENT_DATE, C_SAVE_EVENT_FIELD_DETAILS, C_SAVE_EVENT_NAME, C_SAVE_MEDIA_DETAILS, PREVIOUS_PAGE, PROCEED_TO_NEXT_PAGE, RESET_CURRENT_PAGE_TO_ONE, RESET_TEMP_NEW_CARD_DATA, UPDATE_EVENT_FIELD_DETAILS, UPDATE_FORM_ERROR } from "./actionTypes"

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

export const saveMediaDetails = (category,index,fieldName,data)=>{
    return{
        type:C_SAVE_MEDIA_DETAILS,category:category,index:index,fieldName:fieldName,payload:data
    }
}

export const function_imageUploadDoneForBride= (flag) => {
    console.log('glag',flag)
    return{
        type:C_IMAGE_UPLOAD_DONE_FOR_BRIDE,payload:flag
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