import request from '@/utils/request'
import axios from 'axios'

// web-查询节点交易规则管理列表
export function getDealRules(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\dealRule\\getCategoryDealRules_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询类型节点交易规则管理列表_1_0_1
export function getCattypeDealRules_1_0_1(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\dealRule\\getCattypeDealRules_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-设置交接节点
export function updateDealRule(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\dealRule\\updateDealRule_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询节点交易节点详情
export function getDealRuleByGuid(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\dealRule\\getByGuid_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询节点交易规则发布记录
export function getDealRulePublishHistory(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\dealRule\\getPublishHistory_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-发布节点交易规则
export function publishDealRule(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\dealRule\\publish_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-移除一行品类规则
export function deleteDealRule(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\dealRule\\delete_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}
