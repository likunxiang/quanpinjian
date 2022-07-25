import request from '@/utils/request'
import axios from 'axios'

// 获取交易规则列表
export function getBizRule(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\base\\getBizRule&DBC=w_a',
    method: 'post',
    data: data
  })
}

// 获取交易规则详情
export function getBizRuleById(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\base\\getBizRuleById&DBC=w_a',
    method: 'post',
    data: data
  })
}
