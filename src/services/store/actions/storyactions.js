import $ from 'jquery';
import csrftoken from '../../../utils/getCSRFCookie';
import { FETCH_STORIES, FETCH_STORIES_FAILED, FETCH_STORY_DETAIL, FETCH_STORY_DETAIL_FAILED, FETCH_STORIES_BY_AUTHOR } from '../constants';

export const fetchStories = () => dispatch =>{
    $.ajax({
        url:'api/stories/',
        type:"GET",
        headers:{
            'X-CSRFTOKEN':csrftoken
        },
        success:function(res){
            dispatch({
                type:FETCH_STORIES,
                payload:res
            })
        },
        error:function(res){
            dispatch({
                type:FETCH_STORIES_FAILED,
                payload:res
            })
        }
    })
}

export const fetchStoryDetail = (id) => dispatch =>{
    $.ajax({
        url:'api/stories/'+id+'/',
        type:"GET",
        headers:{
            'X-CSRFTOKEN':csrftoken
        },
        success:function(res){
            dispatch({
                type:FETCH_STORY_DETAIL,
                payload:res
            })
        },
        error:function(res){
            dispatch({
                type:FETCH_STORY_DETAIL_FAILED,
                payload:res
            })
        }
    })
}

export const fetchStoriesByAuthor = (author_id) => dispatch =>{
    $.ajax({
        url:'/api/stories/?author_id='+author_id,
        type:'GET',
        headers:{
            'X-CSRFTOKEN':csrftoken
        },
        success:function(res){
            dispatch({
                type:FETCH_STORIES_BY_AUTHOR,
                payload:res
            })
        }
    })
}