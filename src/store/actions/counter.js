import { SET_TODOLIST,SET_DRADTLIST,SET_PARTICIPATEDLIST,SET_UNASSIGNEDLIST } from '../types/counter'
import { createAction } from 'redux-actions'
import api from '@/common/api'

export const fetchTodolist = createAction(SET_TODOLIST, () =>{ return api.fetchTodoList() })
export const fetchDraftlist = createAction(SET_DRADTLIST, () =>{ return api.fetchDraftList() })
export const fetchParticipatedlist = createAction(SET_PARTICIPATEDLIST, () =>{ return api.fetchParticipatedList() })
export const fetchUnassignedlist = createAction(SET_UNASSIGNEDLIST, () =>{ return api.fetchUnassignedList() })
