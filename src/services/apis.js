export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

export const saveNewCard = {
    API_ROUTE : BACKEND_BASE_URL + '/createNewCard'
}

export const fetchCardData = {
    API_ROUTE : BACKEND_BASE_URL + '/fetchCardDetails'
}