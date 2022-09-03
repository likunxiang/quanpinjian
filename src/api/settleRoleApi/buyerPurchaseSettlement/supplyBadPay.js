import request from '@/utils/request'
import axios from 'axios'

// web-查看供方违约赔偿支付列表
export function getList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demand2supplyDisobey\\getList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-结算管理-未结算列表
export function getUnPayListByMonth(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demand2supplyDisobey\\getUnPayListByMonth_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看供方收款账号信息
export function getSupplyBankInfo(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demand2supplyDisobey\\getSupplyBankInfo_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-提交付款证明
export function submitPayProve(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\order\\settle\\demand2supplyDisobey\\submitPayProve_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-结算管理-已结算
export function getPayListByMonth(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demand2supplyDisobey\\getPayListByMonth_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看付款证明
export function supplyObeygetPaidProve(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demand2supplyDisobey\\getPaidProve_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查看裁决结果信息
export function getJudgeResult(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\order\\settle\\demandDisobey\\getJudgeResult_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}
