import { C_IMAGE_UPLOAD_DONE_FOR_BRIDE, C_SAVE_BRIDE_AND_GROOM_BASIC_DETAILS, C_SAVE_ENGAGEMENT_DATE, C_SAVE_ENGAGEMENT_TIME, C_SAVE_EVENT_DATE, C_SAVE_EVENT_FIELD_DETAILS, C_SAVE_EVENT_NAME, C_SAVE_MEDIA_DETAILS, PREVIOUS_PAGE, PROCEED_TO_NEXT_PAGE, RESET_CURRENT_PAGE_TO_ONE, RESET_TEMP_NEW_CARD_DATA, UPDATE_EVENT_FIELD_DETAILS, UPDATE_FORM_ERROR } from "./actionTypes";
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
    currentPage:4,
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
            location:{
                locationName:'',
                locationAddress:'',
                locationCity:''
            },
            subEvents:{
                engagementDetails:{
                    engagementName:'Engagement',
                    raw_engagementDate:'',
                    engagementDate:'',
                    engagementTime:'',
                    location:{
                        locationName:'',
                        locationAddress:'',
                        locationCity:''
                    }
                }
            }
        },
        groomDetails:{
            firstName:'',
            lastName:'',
            imageUrl:'',
            parentDetails:[],
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
            imageUrl:'',
            brideImageCropDone:false,
            parentDetails:[],
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
        galleryDetails:[],
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
        }
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
        default:
            return state
            break;
    }
}

 