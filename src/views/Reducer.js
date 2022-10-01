import { reducerCases } from "./constants";
import { testimonials } from "../assets/data";
export const initialState = {
    faq: null,
    testimonialsData: testimonials,
    testimonial_index: 0,
}

const reducer =(state, action) =>{
    switch(action.type){
        case reducerCases.SET_FAQ: 
            return{
                ...state,
                faq: action.value
            }
        case reducerCases.SET_TESTIMONIALS_DATA: 
            return{
                ...state,
                testimonialsData: action.value
            }
        case reducerCases.SET_TESTIMONIAL_INDEX: 
            return{
                ...state,
                testimonial_index: action.value
            }
        default:  
            return state;
    }
};

export default reducer;