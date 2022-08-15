import request from '@/utils/request'

// web-查询机构名称信息列表
export function getOrgList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\org\\info\\getList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-新增机构名称
export function insertOrg(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\org\\info\\insert_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-编辑机构名称信息
export function updateOrg(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\org\\info\\update_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-删除机构名称信息
export function deleteOrg(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\org\\info\\delete_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-编辑注册验证号码管理
export function updatePhone(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\org\\info\\updatePhone_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}
