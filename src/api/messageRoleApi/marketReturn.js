import request from '@/utils/request'
import axios from 'axios'

// 查询反馈信息列表
export function getList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\feedback\\getList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// 查询反馈详情
export function getDetail(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\feedback\\getDetail_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-回复反馈
export function feedbackReply(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\feedback\\reply_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}
