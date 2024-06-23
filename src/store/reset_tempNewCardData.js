export const resetData_TempNewCardData = {
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
        groomActualImage:null,
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
        brideActualImage:null,
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
};
