import { handleActions } from 'redux-actions'
import {SET_TOKEN,SET_TODOLIST,SET_UNASSIGNEDLIST,SET_PARTICIPATEDLIST,SET_DRADTLIST} from '../types'

export default handleActions({
  [SET_TOKEN] (state,action) {
    return {
      ...state,
      token:'Bearer ' + action.payload.token
    }
  },
  [SET_TODOLIST](state,action) {
    return {
      ...state,
      todoList: action.payload
    }
  },
  [SET_UNASSIGNEDLIST](state,action) {
    return {
      ...state,
      unassignedList: action.payload
    }
  },
  [SET_DRADTLIST](state,action) {
    return {
      ...state,
      draftList: action.payload
    }
  },
  [SET_PARTICIPATEDLIST](state,action) {
    return {
      ...state,
      participatedList: action.payload
    }
  }
}, {
  token: '',
  todoList:[],
  draftList:[],
  unassignedList:[],
  participatedList:[]
})
