import { FETCH_STORIES, FETCH_STORIES_FAILED, FETCH_STORY_DETAIL, FETCH_STORY_DETAIL_FAILED } from "../constants";

const initialState = {
    stories:{},
    story:{},
    error:{}
}

export default function(state = initialState,action){
    switch (action.type) {
        case FETCH_STORIES:
            return{
                ...state,
                stories:action.payload
            }
        case FETCH_STORIES_FAILED:
            return{
                ...state,
                error:action.payload
            }
        case FETCH_STORY_DETAIL:
            return{
                ...state,
                story:action.payload
            }
        case FETCH_STORY_DETAIL_FAILED:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}