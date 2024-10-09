import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };
    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };
    case ActionTypes.ADD_COMMENT:
      if (state.comments.some((el) => el.dishId === action.payload.dishId)){
        let id = state.comments[state.comments.length-1].id + 1;
        return {...state, errMess: null, comments : state.comments.concat({...action.payload,id:id})};
      }
      else
       return {...state, errMess: null, comments: state.comments};
    default:
      return state;
  }
};