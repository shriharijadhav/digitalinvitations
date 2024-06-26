import { C_CHANGE_PRIORITY_BETWEEN_BRIDE_AND_GROOM, C_CHANGE_PRIORITY_BETWEEN_PARENTS, C_CLEAR_PARENT_DETAILS, C_DELETE_ACTUAL_IMAGE, C_DELETE_ACTUAL_IMAGE_BRIDE_PARENT, C_DELETE_ACTUAL_IMAGE_GROOM_PARENT, C_ENGAGEMENT_ADDRESS_SAME_AS_WEDDING, C_HALDI_ADDRESS_SAME_AS_WEDDING, C_IMAGE_UPLOAD_DONE_FOR_BRIDE, C_SANGEET_ADDRESS_SAME_AS_WEDDING, C_SAVE_ACTUAL_IMAGE, C_SAVE_BRIDE_AND_GROOM_BASIC_DETAILS, C_SAVE_BRIDE_PARENT_ACTUAL_IMAGE, C_SAVE_BRIDE_PARENT_DETAILS, C_SAVE_ENGAGEMENT_ADDRESS, C_SAVE_ENGAGEMENT_DATE, C_SAVE_ENGAGEMENT_TIME, C_SAVE_EVENT_ADDRESS, C_SAVE_EVENT_ADDRESS_GOOGLE_MAP_LINK, C_SAVE_EVENT_DATE, C_SAVE_EVENT_FIELD_DETAILS, C_SAVE_EVENT_NAME, C_SAVE_EVENT_TIME, C_SAVE_GROOM_PARENT_ACTUAL_IMAGE, C_SAVE_GROOM_PARENT_DETAILS, C_SAVE_HALDI_ADDRESS, C_SAVE_HALDI_DATE, C_SAVE_HALDI_TIME, C_SAVE_MEDIA_DETAILS, C_SAVE_SANGEET_ADDRESS, C_SAVE_SANGEET_DATE, C_SAVE_SANGEET_TIME, C_TOGGLE_ADD_ENGAGEMENT_DETAILS, C_TOGGLE_ADD_HALDI_DETAILS, C_TOGGLE_ADD_PARENT_DETAILS, C_TOGGLE_ADD_SANGEET_DETAILS, C_UPDATE_GALLERY_DETAILS, PREVIOUS_PAGE, PROCEED_TO_NEXT_PAGE, RESET_CURRENT_PAGE_TO_ONE, RESET_TEMP_NEW_CARD_DATA, UPDATE_EVENT_FIELD_DETAILS, UPDATE_FORM_ERROR } from "./actionTypes";
import { resetData_TempNewCardData } from "./reset_tempNewCardData";

const initialState = {
    allCardsData:[
        {
            cardId:1,
            cardStatus:'active',
            paymentStatus:'PAID',
            cardLink:'pratham & swati',
            eventDetails:{
                eventName:'Wedding',
                date:'20 Jun,2024',
                time:'12.32 pm',
                location:{
                    locationName:'Shrinath Palace',
                    locationAddress:'Old Akluj Road',
                    locationCity:'Pandharpur'
                },
                subEvents:[
                    {
                        sub_eventId:1,
                        sub_eventName:"Haldi",
                        time:'date',
                        date:'date',
                        location:''
                    },
                    {
                        sub_eventId:2,
                        sub_eventName:"Sangit",
                        time:'date',
                        date:'date',
                        location:''
                    }
                ]
            },
            groomDetails:{
                firstName:'firstName',
                lastName:'lastName',
                imageUrl:'imageUrl',
                parentDetails:[
                    {
                        firstName:'firstName',
                        lastName:'lastName',
                        relationWithGroom:'relationWithGroom'
                    },
                    {
                        firstName:'firstName',
                        lastName:'lastName',
                        relationWithGroom:'relationWithGroom'
                    }
                ],
                socialMediaLinks:[
                    {
                        socialMediaName:'',
                        profileUrl:'profileUrl',
                    },
                    {
                        socialMediaName:'Instagram',
                        profileUrl:''
                    }
                ]
            },
            brideDetails:{
                firstName:'firstName',
                lastName:'lastName',
                imageUrl:'',
                parentDetails:[
                    {
                        firstName:'',
                        lastName:'',
                        relationWithGroom:''
                    }
                ],
                socialMediaLinks:[
                    {
                        socialMediaName:'',
                        profileUrl:''
                    }
                ]
            },
            galleryDetails:[
                {},{},{}
            ],
            videoGalleryDetails:[
                {},{}, {}
            ],
            InviterDetails:{
                firstName:'firstName',
                lastName:'lastName',
                email:'email',
                contactNumber:'contactNumber',
                whatsappName:'whatsappName',
                location:'location'
            },
            backgroundMusicDetails:{
                audioFileSrc:'url',
            }
        },
        {
            cardId:2,
            eventDetails:{
                date:'date',
                time:'time',
                location:'location',
                subEvents:[
                    {
                        sub_eventId:1,
                        sub_eventName:"Haldi",
                        time:'date',
                        date:'date',
                        location:''
                    },
                    {
                        sub_eventId:2,
                        sub_eventName:"Sangit",
                        time:'date',
                        date:'date',
                        location:''
                    }
                ]
            },
            groomDetails:{
                firstName:'firstName',
                lastName:'lastName',
                imageUrl:'imageUrl',
                parentDetails:[
                    {
                        firstName:'firstName',
                        lastName:'lastName',
                        relationWithGroom:'relationWithGroom'
                    },
                    {
                        firstName:'firstName',
                        lastName:'lastName',
                        relationWithGroom:'relationWithGroom'
                    }
                ],
                socialMediaLinks:[
                    {
                        socialMediaName:'',
                        profileUrl:'profileUrl',
                    },
                    {
                        socialMediaName:'',
                        profileUrl:''
                    }
                ]
            },
            brideDetails:{
                firstName:'firstName',
                lastName:'lastName',
                imageUrl:'',
                parentDetails:[
                    {
                        firstName:'',
                        lastName:'',
                        relationWithGroom:''
                    }
                ],
                socialMediaLinks:[
                    {
                        socialMediaName:'',
                        profileUrl:''
                    }
                ]
            },
            galleryDetails:[
                {},{},{}
            ],
            videoGalleryDetails:[
                {},{}, {}
            ],
            InviterDetails:{
                firstName:'firstName',
                lastName:'lastName',
                email:'email',
                contactNumber:'contactNumber',
                whatsappName:'whatsappName',
                location:'location'
            },
            backgroundMusicDetails:{
                audioFileSrc:'url',
            }
        },
        {
            cardId:3,
            eventDetails:{
                date:'date',
                time:'time',
                location:'location',
                subEvents:[
                    {
                        sub_eventId:1,
                        sub_eventName:"Haldi",
                        time:'date',
                        date:'date',
                        location:''
                    },
                    {
                        sub_eventId:2,
                        sub_eventName:"Sangit",
                        time:'date',
                        date:'date',
                        location:''
                    }
                ]
            },
            groomDetails:{
                firstName:'firstName',
                lastName:'lastName',
                imageUrl:'imageUrl',
                parentDetails:[
                    {
                        firstName:'firstName',
                        lastName:'lastName',
                        relationWithGroom:'relationWithGroom'
                    },
                    {
                        firstName:'firstName',
                        lastName:'lastName',
                        relationWithGroom:'relationWithGroom'
                    }
                ],
                socialMediaLinks:[
                    {
                        socialMediaName:'',
                        profileUrl:'profileUrl',
                    },
                    {
                        socialMediaName:'Instagram',
                        profileUrl:''
                    }
                ]
            },
            brideDetails:{
                firstName:'firstName',
                lastName:'lastName',
                imageUrl:'',
                parentDetails:[
                    {
                        firstName:'',
                        lastName:'',
                        relationWithGroom:''
                    }
                ],
                socialMediaLinks:[
                    {
                        socialMediaName:'',
                        profileUrl:''
                    }
                ]
            },
            galleryDetails:[
                {},{},{}
            ],
            videoGalleryDetails:[
                {},{}, {}
            ],
            InviterDetails:{
                firstName:'firstName',
                lastName:'lastName',
                email:'email',
                contactNumber:'contactNumber',
                whatsappName:'whatsappName',
                location:'location'
            },
            backgroundMusicDetails:{
                audioFileSrc:'url',
            }
        },
        {
            cardId:4,
            eventDetails:{
                date:'date',
                time:'time',
                location:'location',
                subEvents:[
                    {
                        sub_eventId:1,
                        sub_eventName:"Haldi",
                        time:'date',
                        date:'date',
                        location:''
                    },
                    {
                        sub_eventId:2,
                        sub_eventName:"Sangit",
                        time:'date',
                        date:'date',
                        location:''
                    }
                ]
            },
            groomDetails:{
                firstName:'firstName',
                lastName:'lastName',
                imageUrl:'imageUrl',
                parentDetails:[
                    {
                        firstName:'firstName',
                        lastName:'lastName',
                        relationWithGroom:'relationWithGroom'
                    },
                    {
                        firstName:'firstName',
                        lastName:'lastName',
                        relationWithGroom:'relationWithGroom'
                    }
                ],
                socialMediaLinks:[
                    {
                        socialMediaName:'',
                        profileUrl:'profileUrl',
                    },
                    {
                        socialMediaName:'Instagram',
                        profileUrl:''
                    }
                ]
            },
            brideDetails:{
                firstName:'firstName',
                lastName:'lastName',
                imageUrl:'',
                parentDetails:[
                    {
                        firstName:'',
                        lastName:'',
                        relationWithGroom:''
                    }
                ],
                socialMediaLinks:[
                    {
                        socialMediaName:'',
                        profileUrl:''
                    }
                ]
            },
            galleryDetails:[
                {},{},{}
            ],
            videoGalleryDetails:[
                {},{}, {}
            ],
            InviterDetails:{
                firstName:'firstName',
                lastName:'lastName',
                email:'email',
                contactNumber:'contactNumber',
                whatsappName:'whatsappName',
                location:'location'
            },
            backgroundMusicDetails:{
                audioFileSrc:'url',
            }
        }
    ],
    currentPage:1,
    totalPages:10,
    tempNewCardData: {
        cardId:1,// created by appWrite
        cardStatus:'',
        paymentStatus:'',
        cardLink:'',
        selectedTemplate: '',
        eventDetails:{
            eventName:'',
            raw_eventDate:'',
            eventDate:'',
            eventTime:'',
            eventAddress:'',
            eventAddressGoogleMapLink:'',
            isEngagementAddressSameAsWedding:false,
            addEngagementDetails:false,
            isSangeetAddressSameAsWedding:false,
            addSangeetDetails:false,
            isHaldiAddressSameAsWedding:false,
            addHaldiDetails:false,
            addParentDetails:false,
            priorityBetweenBrideAndGroom:'bride',
            priorityBetweenParents:'brideParents',
            subEvents:{
                engagementDetails:{
                    engagementName:'Engagement',
                    raw_engagementDate:'',
                    engagementDate:'',
                    engagementTime:'',
                    engagementAddress:'',
                },
                sangeetDetails:{
                    sangeetName:'Sangeet Ceremony',
                    raw_sangeetDate:'',
                    sangeetDate:'',
                    sangeetTime:'',
                    sangeetAddress:'',
                },
                haldiDetails:{
                    haldiName:'Haldi Ceremony',
                    raw_haldiDate:'',
                    haldiDate:'',
                    haldiTime:'',
                    haldiAddress:'',
                }
            }
        },
        groomDetails:{
            firstName:'',
            lastName:'',
            groomActualImage:null,
            imageUrl:'',
            parentDetails:{
                motherDetails:{
                    firstName:'',
                    lastName:'',
                    groomMotherActualImage:null,      
                },
                fatherDetails:{
                    firstName:'',
                    lastName:'',
                    groomFatherActualImage:null, 
                }
            },
            socialMediaLinks:[
                {
                id:0,
                instagramLink:''
                },
                {
                id:1,
                facebookLink:''
                },
                {
                id:2,
                youtubeLink:''
                }
            ]
        },
        brideDetails:{
            firstName:'',
            lastName:'',
            brideActualImage:null,
            imageUrl:'',
            brideImageCropDone:false,
            parentDetails:{
                motherDetails:{
                    firstName:'',
                    lastName:'',
                    brideMotherActualImage:null,      
                },
                fatherDetails:{
                    firstName:'',
                    lastName:'',
                    brideFatherActualImage:null, 
                }
            },
            socialMediaLinks:[
                {
                id:0,
                instagramLink:''
                },
                {
                id:1,
                facebookLink:''
                },
                {
                id:2,
                youtubeLink:''
                }
            ]
        },
        galleryDetails:[1,3,5],
        videoGalleryDetails:[],
        InviterDetails:{
            firstName:'',
            lastName:'',
            email:'',
            contactNumber:'',
            whatsappName:'',
            location:''
        },
        backgroundMusicDetails:{
            audioFileSrc:'',
        },
        availableCovers:[
            {
                id:1,
                imgUrl:''
            },
            {
                id:2,
                imgUrl:''
            },
            {
                id:3,
                imgUrl:''
            },
            {
                id:4,
                imgUrl:''
            },
            {
                id:5,
                imgUrl:''
            },
            {
                id:6,
                imgUrl:''
            },
            {
                id:7,
                imgUrl:''
            },
            {
                id:8,
                imgUrl:''
            }
        ]
    },
    tempEditExistingCardData:{

    },
    formErrorObj:{
        emptyCardLink:'',
    }

}

export const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case UPDATE_EVENT_FIELD_DETAILS:
            const tempArray = state.allCardsData.map(card=>{
                if(card.cardId === Number(action.cardId)) {
                     card.cardLink = action.payload
                    return card
                }else{
                    return card
                }
            })
            // return updated temp array
            return {
                ...state,allCardsData:tempArray
            }
            break;
        case UPDATE_FORM_ERROR:
            console.log('x',action.payload,action.errorName)
            return{
                ...state,formErrorObj:{...state.formErrorObj,[action.errorName]:action.payload}
            }

        break;



        // create a new event card cases
        case C_SAVE_EVENT_FIELD_DETAILS:
            return {
                ...state,tempNewCardData:{...state.tempNewCardData,[action.fieldName]:action.payload}
            }
        break;
        case C_SAVE_EVENT_NAME:
            return {
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,[action.fieldName]:action.payload}}
            }
        break;
        case C_SAVE_EVENT_DATE:
            return {
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,eventDate:action.payload,raw_eventDate:JSON.stringify(action.rawDateString)}}
            }
        break;
        case PROCEED_TO_NEXT_PAGE:
        if(state.currentPage < state.totalPages){
            return{
                ...state,currentPage:state.currentPage+1
            }
        }else{
            return state
        }
        break;

        case RESET_CURRENT_PAGE_TO_ONE:
            return{
                ...state,currentPage:1
            }
        break;
        case RESET_TEMP_NEW_CARD_DATA:
            return{
                ...state,tempNewCardData:resetData_TempNewCardData
            }
        break;
        case PREVIOUS_PAGE:
            if (state.currentPage >=2) {
                return{
                    ...state,currentPage:state.currentPage-1
                }
            } else {
                return state
            }
        break;
        case C_SAVE_BRIDE_AND_GROOM_BASIC_DETAILS:
            if (action.category === 'brideDetails') {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,brideDetails:{...state.tempNewCardData.brideDetails,[action.fieldName]:action.payload}}
                }
            } else {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,groomDetails:{...state.tempNewCardData.groomDetails,[action.fieldName]:action.payload}}
                }
            }

        break;
        case C_SAVE_MEDIA_DETAILS:
            if (action.category === 'brideDetails') {
                let dummySocialArray = state.tempNewCardData.brideDetails.socialMediaLinks.map(item=>{
                    if (item.id === Number(action.index)) {
                            if (item.id === 0) {
                                item.instagramLink = action.payload
                                return item
                            } else if(item.id === 1) {
                                item.facebookLink = action.payload
                                return item
                            }else{
                                item.youtubeLink = action.payload
                                return item
                            }
                    } else {
                        return item
                    }
                })
                
                // now return the sate
                return {
                    ...state,tempNewCardData:{...state.tempNewCardData,brideDetails:{...state.tempNewCardData.brideDetails,socialMediaLinks:dummySocialArray}}
                }
            } else {
                let dummySocialArrayGroom = state.tempNewCardData.groomDetails.socialMediaLinks.map(item=>{
                    if (item.id === Number(action.index)) {
                            if (item.id === 0) {
                                item.instagramLink = action.payload
                                return item
                            } else if(item.id === 1) {
                                item.facebookLink = action.payload
                                return item
                            }else{
                                item.youtubeLink = action.payload
                                return item
                            }
                    } else {
                        return item
                    }
                })
                
                // now return the sate
                return {
                    ...state,tempNewCardData:{...state.tempNewCardData,groomDetails:{...state.tempNewCardData.groomDetails,socialMediaLinks:dummySocialArrayGroom}}
                }
            }

        break;
        case C_IMAGE_UPLOAD_DONE_FOR_BRIDE:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,brideDetails:{...state.tempNewCardData.brideDetails,brideImageCropDone:action.payload}}
            }
        break;
        case C_SAVE_ENGAGEMENT_DATE:
            return {
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,subEvents:{...state.tempNewCardData.eventDetails.subEvents,engagementDetails:{...state.tempNewCardData.eventDetails.subEvents.engagementDetails,engagementDate:action.payload,raw_engagementDate:JSON.stringify(action.rawDateString)}}}}
            }

        break;
        case C_SAVE_ENGAGEMENT_TIME:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,subEvents:{...state.tempNewCardData.eventDetails.subEvents,engagementDetails:{...state.tempNewCardData.eventDetails.subEvents.engagementDetails,engagementTime:action.payload}}}}
            }

        break;
        case C_SAVE_ACTUAL_IMAGE:
            if (action.personDetails === 'brideDetails') {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,brideDetails:{...state.tempNewCardData.brideDetails,brideActualImage:action.payload}}
                }
            } else {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,groomDetails:{...state.tempNewCardData.groomDetails,groomActualImage:action.payload}}
                }
            }
            
        break;
        case C_DELETE_ACTUAL_IMAGE:
            if (action.personDetails === 'brideDetails') {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,brideDetails:{...state.tempNewCardData.brideDetails,brideActualImage:null}}
                }
            } else {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,groomDetails:{...state.tempNewCardData.groomDetails,groomActualImage:null}}
                }
            } 

        break;
        case C_SAVE_EVENT_TIME:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,eventTime:action.payload}}
            }
        break;
        case C_SAVE_EVENT_ADDRESS:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,eventAddress:action.payload}}
            }
        break;
        case C_SAVE_ENGAGEMENT_ADDRESS:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,subEvents:{...state.tempNewCardData.eventDetails.subEvents,engagementDetails:{...state.tempNewCardData.eventDetails.subEvents.engagementDetails,engagementAddress:action.payload}}}}
            }
        break;
        case C_ENGAGEMENT_ADDRESS_SAME_AS_WEDDING:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,isEngagementAddressSameAsWedding:action.payload}}
            }

        break;
        case C_TOGGLE_ADD_ENGAGEMENT_DETAILS:
            if(action.payload){
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,addEngagementDetails:action.payload}}
                }
            }else{
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,isEngagementAddressSameAsWedding:false,addEngagementDetails:action.payload,subEvents:{...state.tempNewCardData.eventDetails.subEvents,engagementDetails:{
                        engagementName:'Engagement',
                        raw_engagementDate:'',
                        engagementDate:'',
                        engagementTime:'',
                        engagementAddress:'',
                    }}}}
                } 
            }
        break;

        // sangeet starts
        case C_TOGGLE_ADD_SANGEET_DETAILS:
            if(action.payload){
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,addSangeetDetails:action.payload}}
                }
            }else{
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,isSangeetAddressSameAsWedding:false,addSangeetDetails:action.payload,subEvents:{...state.tempNewCardData.eventDetails.subEvents,sangeetDetails:{
                        sangeetName:'Sangeet',
                        raw_sangeetDate:'',
                        sangeetDate:'',
                        sangeetTime:'',
                        sangeetAddress:'',
                    }}}}
                } 
            }
        break;
        case C_SAVE_SANGEET_DATE:
            return {
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,subEvents:{...state.tempNewCardData.eventDetails.subEvents,sangeetDetails:{...state.tempNewCardData.eventDetails.subEvents.sangeetDetails,sangeetDate:action.payload,raw_sangeetDate:JSON.stringify(action.rawDateString)}}}}
            }

        break;
        case C_SANGEET_ADDRESS_SAME_AS_WEDDING:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,isSangeetAddressSameAsWedding:action.payload}}
            }

        break;
        case C_SAVE_SANGEET_TIME:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,subEvents:{...state.tempNewCardData.eventDetails.subEvents,sangeetDetails:{...state.tempNewCardData.eventDetails.subEvents.sangeetDetails,sangeetTime:action.payload}}}}
            }

        break;
        case C_SAVE_SANGEET_ADDRESS:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,subEvents:{...state.tempNewCardData.eventDetails.subEvents,sangeetDetails:{...state.tempNewCardData.eventDetails.subEvents.sangeetDetails,sangeetAddress:action.payload}}}}
            }
        break;


        // sangeet ends
 
        // haldi starts
        case C_TOGGLE_ADD_HALDI_DETAILS:
            if(action.payload){
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,addHaldiDetails:action.payload}}
                }
            }else{
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,isHaldiAddressSameAsWedding:false,addHaldiDetails:action.payload,subEvents:{...state.tempNewCardData.eventDetails.subEvents,haldiDetails:{
                        haldiName:'Haldi Ceremony',
                        raw_haldiDate:'',
                        haldiDate:'',
                        haldiTime:'',
                        haldiAddress:'',
                    }}}}
                } 
            }
        break;
        case C_SAVE_HALDI_DATE:
            return {
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,subEvents:{...state.tempNewCardData.eventDetails.subEvents,haldiDetails:{...state.tempNewCardData.eventDetails.subEvents.haldiDetails,haldiDate:action.payload,raw_haldiDate:JSON.stringify(action.rawDateString)}}}}
            }

        break;
        case C_HALDI_ADDRESS_SAME_AS_WEDDING:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,isHaldiAddressSameAsWedding:action.payload}}
            }

        break;
        case C_SAVE_HALDI_TIME:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,subEvents:{...state.tempNewCardData.eventDetails.subEvents,haldiDetails:{...state.tempNewCardData.eventDetails.subEvents.haldiDetails,haldiTime:action.payload}}}}
            }

        break;
        case C_SAVE_HALDI_ADDRESS:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,subEvents:{...state.tempNewCardData.eventDetails.subEvents,haldiDetails:{...state.tempNewCardData.eventDetails.subEvents.haldiDetails,haldiAddress:action.payload}}}}
            }
        break;


        // haldi ends
 
        // parent details starts
        case C_TOGGLE_ADD_PARENT_DETAILS:
            console.log(action.payload)
            if(action.payload){
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,addParentDetails:action.payload}}
                }
            }else{
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,addParentDetails:action.payload,brideDetails:{...state.tempNewCardData.brideDetails,parentDetails:{
                        motherDetails:{
                            firstName:'',
                            lastName:'',
                            image:'',      
                        },
                        fatherDetails:{
                            firstName:'',
                            lastName:'',
                            image:'', 
                        }}},groomDetails:{...state.tempNewCardData.groomDetails,parentDetails:{
                            motherDetails:{
                                firstName:'',
                                lastName:'',
                                image:'',      
                            },
                            fatherDetails:{
                                firstName:'',
                                lastName:'',
                                image:'', 
                            }}}}}
                } 
            }

        break;

        case C_SAVE_BRIDE_PARENT_DETAILS:
            if (action.fieldName === 'brideMotherFirstName') {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,brideDetails:{...state.tempNewCardData.brideDetails,parentDetails:{...state.tempNewCardData.brideDetails.parentDetails,motherDetails:{...state.tempNewCardData.brideDetails.parentDetails.motherDetails,firstName:action.payload}}}}
                } 
            }else if(action.fieldName === 'brideMotherLastName'){
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,brideDetails:{...state.tempNewCardData.brideDetails,parentDetails:{...state.tempNewCardData.brideDetails.parentDetails,motherDetails:{...state.tempNewCardData.brideDetails.parentDetails.motherDetails,lastName:action.payload}}}}
                }
            }
            
            
            if (action.fieldName === 'brideFatherFirstName') {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,brideDetails:{...state.tempNewCardData.brideDetails,parentDetails:{...state.tempNewCardData.brideDetails.parentDetails,fatherDetails:{...state.tempNewCardData.brideDetails.parentDetails.fatherDetails,firstName:action.payload}}}}
                }
            }else if (action.fieldName === 'brideFatherLastName'){
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,brideDetails:{...state.tempNewCardData.brideDetails,parentDetails:{...state.tempNewCardData.brideDetails.parentDetails,fatherDetails:{...state.tempNewCardData.brideDetails.parentDetails.fatherDetails,lastName:action.payload}}}}
                }  
            }

        break;

        case C_SAVE_GROOM_PARENT_DETAILS:
            if (action.fieldName === 'groomMotherFirstName') {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,groomDetails:{...state.tempNewCardData.groomDetails,parentDetails:{...state.tempNewCardData.groomDetails.parentDetails,motherDetails:{...state.tempNewCardData.groomDetails.parentDetails.motherDetails,firstName:action.payload}}}}
                } 
            }else if(action.fieldName === 'groomMotherLastName'){
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,groomDetails:{...state.tempNewCardData.groomDetails,parentDetails:{...state.tempNewCardData.groomDetails.parentDetails,motherDetails:{...state.tempNewCardData.groomDetails.parentDetails.motherDetails,lastName:action.payload}}}}
                }
            }else if (action.fieldName === 'groomFatherFirstName') {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,groomDetails:{...state.tempNewCardData.groomDetails,parentDetails:{...state.tempNewCardData.groomDetails.parentDetails,fatherDetails:{...state.tempNewCardData.groomDetails.parentDetails.fatherDetails,firstName:action.payload}}}}
                }
            }else if (action.fieldName === 'groomFatherLastName'){
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,groomDetails:{...state.tempNewCardData.groomDetails,parentDetails:{...state.tempNewCardData.groomDetails.parentDetails,fatherDetails:{...state.tempNewCardData.groomDetails.parentDetails.fatherDetails,lastName:action.payload}}}}
                }  
            }

 
        break;

        case C_SAVE_BRIDE_PARENT_ACTUAL_IMAGE:
            if (action.personDetails === 'brideMotherImage') {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,brideDetails:{...state.tempNewCardData.brideDetails,parentDetails:{...state.tempNewCardData.brideDetails.parentDetails,motherDetails:{...state.tempNewCardData.brideDetails.parentDetails.motherDetails,brideMotherActualImage:action.payload}}}}
                }
            } else if(action.personDetails === 'brideFatherImage') {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,brideDetails:{...state.tempNewCardData.brideDetails,parentDetails:{...state.tempNewCardData.brideDetails.parentDetails,fatherDetails:{...state.tempNewCardData.brideDetails.parentDetails.fatherDetails,brideFatherActualImage:action.payload}}}}
                }
            }

        break;

        case C_DELETE_ACTUAL_IMAGE_BRIDE_PARENT:
            if (action.personDetails === 'brideMotherImage') {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,brideDetails:{...state.tempNewCardData.brideDetails,parentDetails:{...state.tempNewCardData.brideDetails.parentDetails,motherDetails:{...state.tempNewCardData.brideDetails.parentDetails.motherDetails,brideMotherActualImage:null}}}}
                }
            } else {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,brideDetails:{...state.tempNewCardData.brideDetails,parentDetails:{...state.tempNewCardData.brideDetails.parentDetails,fatherDetails:{...state.tempNewCardData.brideDetails.parentDetails.motherDetails,brideFatherActualImage:null}}}}
                }
            } 

        break;
        case C_DELETE_ACTUAL_IMAGE_GROOM_PARENT:
            if (action.personDetails === 'groomMotherImage') {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,groomDetails:{...state.tempNewCardData.groomDetails,parentDetails:{...state.tempNewCardData.groomDetails.parentDetails,motherDetails:{...state.tempNewCardData.groomDetails.parentDetails.motherDetails,groomMotherActualImage:null}}}}
                }
            } else {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,groomDetails:{...state.tempNewCardData.groomDetails,parentDetails:{...state.tempNewCardData.groomDetails.parentDetails,fatherDetails:{...state.tempNewCardData.groomDetails.parentDetails.motherDetails,groomFatherActualImage:null}}}}
                }
            } 

        break;

        case C_SAVE_GROOM_PARENT_ACTUAL_IMAGE:
            if (action.personDetails === 'groomMotherImage') {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,groomDetails:{...state.tempNewCardData.groomDetails,parentDetails:{...state.tempNewCardData.groomDetails.parentDetails,motherDetails:{...state.tempNewCardData.groomDetails.parentDetails.motherDetails,groomMotherActualImage:action.payload}}}}
                }
            } else if(action.personDetails === 'groomFatherImage') {
                return{
                    ...state,tempNewCardData:{...state.tempNewCardData,groomDetails:{...state.tempNewCardData.groomDetails,parentDetails:{...state.tempNewCardData.groomDetails.parentDetails,fatherDetails:{...state.tempNewCardData.groomDetails.parentDetails.fatherDetails,groomFatherActualImage:action.payload}}}}
                }
            }

        break;
        case C_CLEAR_PARENT_DETAILS:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,priorityBetweenParents:'brideParents'},groomDetails:{...state.tempNewCardData.groomDetails,parentDetails:{
                    motherDetails:{
                        firstName:'',
                        lastName:'',
                        brideMotherActualImage:null,      
                    },
                    fatherDetails:{
                        firstName:'',
                        lastName:'',
                        brideFatherActualImage:null, 
                    }
                }},
            brideDetails:{...state.tempNewCardData.brideDetails,parentDetails:{
                motherDetails:{
                    firstName:'',
                    lastName:'',
                    brideMotherActualImage:null,      
                },
                fatherDetails:{
                    firstName:'',
                    lastName:'',
                    brideFatherActualImage:null, 
                }
            }}
            
            }
            }
        break;

        case C_CHANGE_PRIORITY_BETWEEN_PARENTS:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,priorityBetweenParents:action.payload}}
            }

        break;

        case C_CHANGE_PRIORITY_BETWEEN_BRIDE_AND_GROOM:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,priorityBetweenBrideAndGroom:action.payload}}
            }

        break;

        case C_SAVE_EVENT_ADDRESS_GOOGLE_MAP_LINK:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,eventDetails:{...state.tempNewCardData.eventDetails,eventAddressGoogleMapLink:action.payload}}
            }

        break;

        // parent details ends
 
        case C_UPDATE_GALLERY_DETAILS:
            return{
                ...state,tempNewCardData:{...state.tempNewCardData,galleryDetails:action.payload}
            }
        break;
 
 
        default:
            return state
            break;
    }
}

 