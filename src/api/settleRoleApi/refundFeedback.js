import request from '@/utils/request'
import axios from 'axios'

// web-查看采购/供应退货退款意见反馈列表-未回复
export function unreplyType1List(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\feedback\\unreplyType1List_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看采购退货退款意见反馈列表-已回复
export function replyType1List(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\feedback\\replyType1List_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看供应退货退款意见反馈列表-已回复
export function replyType2List(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\feedback\\replyType2List_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看回复详情
export function getReplyDetail(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\feedback\\getReplyDetail_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-回复反馈
export function reply(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\order\\feedback\\reply_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}
