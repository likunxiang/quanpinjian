import request from '@/utils/request'
import axios from 'axios'

// web-查看需方违约赔偿支付列表
export function getList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demandDisobey\\ft2\\getList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-结算管理-未结算列表
export function getUnPayListByMonth(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demandDisobey\\ft2\\getUnPayListByMonth_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看供方收款账号信息
export function getSupplyBankInfo(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demandDisobey\\ft2\\getSupplyBankInfo_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-提交付款证明
export function submitPayProve(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\order\\settle\\demandDisobey\\ft2\\submitPayProve_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-结算管理-已结算
export function getPayListByMonth(data) {
  return request({
    // url: '/QueryData?SqlCmdName=web\\order\\settle\\demandDisobey\\ft2\\getPayListByMonth&DBC=w_m',
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demandDisobey\\ft2\\getPaidListByMonth_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看付款证明
export function getPaidProve(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demandDisobey\\ft2\\getPaidProve_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}
