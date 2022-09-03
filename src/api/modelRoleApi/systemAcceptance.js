import request from '@/utils/request'
import axios from 'axios'

// 查询验收期限品类未设置列表
export function getNoDeadlineList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\deadline\\getUnDoneCatgList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询类型验收期限列表-未设置_1_0_1
export function getUnDoneCattypeDeadlineList_1_0_1(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\deadline\\getUnDoneCattList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// 设置品类验收期限
export function insertDeadline(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\deadline\\insertOfCatt_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-品类名称设置验收期限(一个个设置)
export function insertOfCatg(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\deadline\\insertOfCatg_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// 查询验收期限品类已设置列表
export function getDeadlineList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\deadline\\getDoneCatgList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询类型验收期限列表-已设置_1_0_1
export function getCattyeDoneDeadlineList_1_0_1(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\deadline\\getDoneCattList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// 查询变更记录
export function getDeadlineHistory(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\deadline\\getHistory_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}
