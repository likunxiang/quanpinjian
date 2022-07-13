import request from '@/utils/request'

// web-查询字段内容列表
export function getValueList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\fixedData\\getValueList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-新建字段内容
export function insertValue(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\fixedData\\insertValue_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-删除字段内容
export function delValue(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\fixedData\\delValue_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}