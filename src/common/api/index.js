//api资源
import request from '@/utils/ajax';
const prefix = '/api/1.0/workflow/light'
export default {

  /**
   * 登录
   * @param username
   * @param password
   * @returns {*}
   */
  login({username,password}){
    return request.post('/workflow/oauth2/token',{
        grant_type: "password",
        scope: "*",
        client_id: "VQIWXSEUABLUIUPXCGXSYUAANUUEUWGQ",
        client_secret: "4814948755b2b0285de8b72084973469",
        username,
        password
      })
  },

  /**
   * 获取徽章标志
   * @returns {*}
   */
  fetchCounters(){
    return request.get(`${prefix}/counters`)
  },

  /**
   * 获取待办列表
   * @returns {*}
   */
  fetchTodoList(){
    return request.get(`${prefix}/todo`)
  },

  /**
   * 获取草稿
   * @returns {*}
   */
  fetchDraftList(){
    return request.get(`${prefix}/draft`)
  },

  /**
   * 获取参与列表
   * @returns {*}
   */
  fetchParticipatedList(){
    return request.get(`${prefix}/participated`)
  },

  /**
   * 获取未分配列表
   * @returns {*}
   */
  fetchUnassignedList(){
    return request.get(`${prefix}/unassigned`)
  },


  /**
   * 获取任务详情
   * @param processId
   * @param taskId
   * @returns {*}
   */
  fetchTaskDetail({processId,taskId}){
    return request.get(`${prefix}/project/${processId}/activity/${taskId}/steps`)
  },


  /**
   * 获取下一步
   * @param caseId
   * @param processId
   * @param taskId
   * @param stepId
   * @param app_index
   * @param step_pos
   * @returns {*}
   */
  fetchNextStep(caseId,{processId,taskId,stepId,app_index,step_pos}){
    let data = {
      app_index,
      step_pos,
      dyn_uid: null,
      pro_uid: processId,
      act_uid: taskId,
      step_uid: stepId
    }
    return request.post(`${prefix}/get-next-step/${caseId}`,data)
  },

  /**
   * 获取表单
   * @param processId
   * @param formId
   * @param caseId
   * @param delIndex
   * @returns {*}
   */
  fetchForm({processId,formId,caseId,delIndex}){
    return request.get(`${prefix}/project/${processId}/dynaformprocessed/${formId}?app_uid=${caseId}&del_index=${delIndex}`)
  },


  updateForm({caseId,dyn_uid,del_index,data}){
    return request.put(`${prefix}/${caseId}/variable?dyn_uid=${dyn_uid}&del_index=${del_index}`,{...data})
  },

  fetchAssignment({taskId,caseId,del_index}){
    return request.get(`${prefix}/task/${taskId}/case/${caseId}/${del_index}/assignment`)
  },

  routeCase(caseId){
    return request.put(`${prefix}/cases/${caseId}/route-case`)
  }
}
