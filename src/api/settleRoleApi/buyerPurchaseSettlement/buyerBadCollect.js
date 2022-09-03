import request from '@/utils/request'
import axios from 'axios'

// web-查看需方违约处罚收取列表
export function getList(data) {
  return request({
    url: '/QueryData?SqlCmdName=web\\order\\settle\\demandDisobey\\ft1\\getList&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-结算管理-未结算列表
export function getUnPayListByMonth(data) {
  return request({
    url: '/QueryData?SqlCmdName=web\\order\\settle\\demandDisobey\\ft1\\getUnPayListByMonth&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-结算管理-已结算列表
export function getPayListByMonth(data) {
  return request({
    url: '/QueryData?SqlCmdName=web\\order\\settle\\supplyDisobey\\getPayListByMonth&DBC=w_a',
    method: 'post',
    data: data
  })
}