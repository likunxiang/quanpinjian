import request from '@/utils/request'

// 查询角色列表
export function listRole(query) {
  return request({
    url: '/ProxyService/aprc_web_system_rolelist',
    method: 'get',
    params: query
  })
}

// 查询角色详细
export function getRole(roleId) {
  return request({
    url: '/system/role/' + roleId,
    method: 'get'
  })
}

// 新增角色
export function addRole(data) {
  return request({
    url: '/system/role',
    method: 'post',
    data: data
  })
}

// 修改角色
export function updateRole(data) {
  return request({
    url: '/system/role',
    method: 'put',
    data: data
  })
}

// 角色数据权限
export function dataScope(data) {
  return request({
    url: '/ProxyService/aprc_web_system_role_upDataScope',
    method: 'post',
    data: data
  })
}

// 角色状态修改
export function changeRoleStatus(roleId, status) {
  const data = {
    roleId,
    status
  }
  return request({
    url: '/ProxyService/aprc_web_system_role_changeStatus',
    method: 'post',
    data: data
  })
}

// 删除角色
export function delRole(roleId) {
  return request({
    url: '/ProxyService/aprc_web_system_role_delById',
    method: 'post',
		data: data
  })
}

// 查询角色已授权用户列表
export function allocatedUserList(query) {
  return request({
    url: '/ProxyService/aprc_web_system_role_getAllocatedList',
    method: 'get',
    params: query
  })
}

// 查询角色未授权用户列表
export function unallocatedUserList(query) {
  return request({
    url: '/ProxyService/aprc_web_system_role_getUnAllocatedList',
    method: 'get',
    params: query
  })
}

// 取消用户授权角色
export function authUserCancel(data) {
  return request({
    url: '/ProxyService/aprc_web_system_role_auth_ancel',
    method: 'post',
    data: data
  })
}

// 批量取消用户授权角色
export function authUserCancelAll(data) {
  return request({
    url: '/ProxyService/aprc_web_system_role_auth_cancel_batch',
    method: 'post',
    params: data
  })
}

// 授权用户选择
export function authUserSelectAll(data) {
  return request({
    url: '/ProxyService/aprc_web_system_role_auth_cancel_all',
    method: 'post',
    params: data
  })
}