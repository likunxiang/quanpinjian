import request from '@/utils/request'
import axios from 'axios'

// web-查询品类采购资质列表（管制品类即为有采购资质的）
export function getList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\buyqualification\\info\\getList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-添加管制品类
export function addCategory(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\buyqualification\\info\\addCategory_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-删除管制品类
export function deleteClass(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\buyqualification\\info\\delete_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询品类资质审批统计列表
export function getApproveList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\buyqualification\\approve\\getStatictisByCGuid_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询品类资质用户列表
export function getUserList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\buyqualification\\approve\\getApproUserList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询品类资质用户列表-未审批
export function getWaitApproUserList(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\cat\\buyqualification\\getWaitApproUserList&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-统计用户申请的资质审批(通过/不通过)数量
export function getApprovedDetailCount(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\buyqualification\\approve\\getCountAF1And2_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-审批用户资质
export function updateApprove(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\buyqualification\\approve\\updateAF_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询品类资质用户列表-已审批
export function getApprovedUserList(data) {
  return request({
    url: '/QueryData?SqlCmdName=web\\cat\\buyqualification\\getApprovedUserList&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询用户资质详情
export function getUserIntelligence(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\buyqualification\\plates\\getUserQuaDetail_1_0_1,aprc\\web\\buyqualification\\plates\\getPlates_1_0_1,aprc\\web\\buyqualification\\plates\\getPlateFields_1_0_1,aprc\\web\\buyqualification\\plates\\getPlateFieldValues_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-发布采购资质信息-判断是否可以发布
export function isCanPublish(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\buyqualification\\info\\isCanPublish_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-发布采购资质信息-发布
export function publish(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\buyqualification\\info\\publish_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询供需需求信息发布记录
export function getDealRulePublishHistory(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\buyqualification\\info\\getPublishHistory_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询管制品类是否重复添加
export function getAddedFlag(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\cat\\buyqualification\\getAddedFlag&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询沟通类支撑跟踪列表
export function getPublishFlagList(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\cat\\chat\\getPublishStatisticList_1_0_2&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询交易类支撑跟踪列表
export function getPublishStatisticList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\cat\\sta\\getPublishFlagList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询品类交易跟踪管理列表-沟通类
export function getBriefMode1List(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\cat\\sta\\getChatCountList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询品类交易跟踪管理列表-交易类
export function getBriefMode2List(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\cat\\sta\\getDealCountList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询供方数量-沟通类
export function getMode1Suppliers(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\cat\\sta\\getSuppliers_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询供方数量-交易类
export function getMode2SupplierInfos(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\cat\\sta\\getSuppliers_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-按年查询订单数量-交易类
export function getOneCatOrderCountYear(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\cat\\sta\\getOneCatOrderCountYear_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-按月份查询订单数量-交易类
export function getOneCatOrderCountMonth(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\cat\\sta\\getOneCatOrderCountMonth_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询订单月份详情-交易类
export function getOneCatOrderDetailMonth(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\cat\\sta\\getOneCatOrderDetailMonth_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询未管制的品类列表
export function getCategoryList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\buyqualification\\info\\getUnLimitCatgList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}
