import request from '@/utils/request'
import axios from 'axios'

// web-查询品类id的共用接口
export function existsByCGuid(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\cat\\info\\existsByCGuid_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// 品类不存在的时候，调用此接口删除该交易模式
export function deleteByDealModeGuid(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\dealMode\\delete_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// 品类不存在的时候，调用此接口删除供方指派规则
export function deletePublishFlag(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\model\\supplyassign\\deletePublishFlag&DBC=w_m',
    method: 'post',
    data: data
  })
}

// 品类不存在的时候，调用此接口删除供应报价信息
export function deleteByGuid(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\model\\supplyprice\\deleteByGuid&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询供需需求信息列表
export function getDealModes(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\dealMode\\getCatgList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询品类类型供需需求信息列表_1_0_1
export function getCattypeDealModes_1_0_1(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\dealMode\\getCattypeList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-发布供需需求信息-判断是否可以发布
export function isDealModeCanPublish(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\dealMode\\isCanPublish_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询需要一起发布的供需需求信息
export function getNeedPublishDealMode(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\dealMode\\getNeedPublish_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// 清除发布供需需求信息产生的临时值
export function clearTemporaryValue(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\dealMode\\clearTemporaryValue_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-发布供需需求信息(一个个发布)
export function publishDealMode1(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\dealMode\\publishOfCatg_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-发布供需需求信息
export function publishDealMode(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\dealMode\\publishOfCattype_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询供需需求信息发布记录
export function getDealModePublishHistory(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\dealMode\\getPublishHistory_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询供应报价信息发布记录
export function getPublishHistorySupplyprice(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\supplyPrice\\getPublishHistory_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}


// web-查询供方指派发布记录
export function getPublishHistorySupplyassign(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\supplyassign\\getPublishHistory_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询简历发布记录
export function getPublishHistoryChat(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\model\\chat\\getPublishHistory&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询采购/供应需求信息配置列表
export function getDemandOrSupplyBaseInfo(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\model\\getDemandOrSupplyBaseInfo&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询已添加的板块列表
export function getPlates(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\plates\\getAddedPlates_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询可添加的板块列表
export function getFreePlates(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\plates\\getFreePlates_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-添加板块
export function addPlate(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\addPlate_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-添加板块判断板块是否已经添加
export function getPlateAddFlag(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\model\\getPlateAddFlag&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-编辑板块别名
export function updatePlateAlias(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\updatePlateAlias_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-删除板块名称
export function deletePlate(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\deletePlate_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询板块类型配置列表
export function getPlateTypes(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\model\\getPlateTypes_1_0_2&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询板块类型是否存在
export function existPlateType(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\model\\existPlateType&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-新建板块类型
export function insertPlateTypes(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\model\\insertPlateTypes_1_0_2&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-删除板块类型
export function deletePlateType(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\model\\deletePlateType&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-板块类型关联板块名称
export function relatePlateType(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\model\\relatePlateType&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询已添加的字段名称配置列表
export function getPlateFields(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\plates\\getAddedPlateFields_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询可添加的库字段名称列表
export function getFreePlateFields(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\plates\\getFreePlateFields_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询需方已经添加的字段名称列表
export function getPlateFieldFromDemand(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\plates\\getDemandAddedFields_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// // web-判断供方必填的固化字段名称是否已经配置
// export function getRequireFieldsOfSupply(data) {
//   axios.defaults.baseURL = '/api'
//   return request({
//     xf_url: '/api',
//     url: '/QueryData?SqlCmdName=web\\model\\getRequireFieldsOfSupply&DBC=w_m',
//     method: 'post',
//     data: data
//   })
// }

// web-判断供方必填的固化字段名称是否已经配置  1yue23新版
export function getRequireFieldsOfSupply(data,code) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\plates\\getRequireFieldsOfSupply_' + code + '&DBC=w_a',
    method: 'post',
    data: data
  })
}

// 
export function existPlateField(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\model\\existPlateField&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-添加库字段名称配置（采购方）
export function addPlateFieldFromDemand(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\insertPlateFieldS1_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-添加库字段名称配置（供应方）
export function addPlateFieldFromSupply(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\addPFieldFromDe_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-新建库字段名称配置
export function insertPlateField(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\insertPlateFieldS2_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-字段名称关联板块名称
export function relateField2Plate(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\relateField2Plate_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// // web-字段名称关联板块类型
// export function relateField2PlateType(data) {
//   axios.defaults.baseURL = '/api'
//   return request({
//     xf_url: '/api',
//     url: '/ExSql?SqlCmdName=web\\model\\relateField2PlateType&DBC=w_m',
//     method: 'post',
//     data: data
//   })
// }

// web-删除字段名称
export function deletePlateField(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\deleteField_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-判断字段名称是否关联完整
export function getPlateFieldRelateFlag(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\model\\getPlateFieldRelateFlag&DBC=w_m',
    method: 'post',
    data: data
  })
}

// 板块字段内容配置

// web-查询字段内容配置列表
export function getPlateFieldContents(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\plates\\getFieldContents_1_0_1&DBC=w_a',
	url: '/QueryData?SqlCmdName=aprc\\web\\model\\plates\\getPlateFieldDetail_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-设置字段内容来源
export function setPlateFieldContentSource(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\setFieldContSource_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-设置供/需方操作设置
export function setSDOperation(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\setSDOperation_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-添加字段内容（固化库/自建库）
export function setPlateFieldContent(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\setPlateFieldContent_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-删除/移除字段内容（固化库/自建库）
export function deletePlateFieldContent(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\deletePlateFieldCont_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询字段内容详情
export function getPlateFieldDetail(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\plates\\getPlateFieldDetail_1_0_1&DBC=w_a',
	url: '/QueryData?SqlCmdName=aprc\\web\\model\\plates\\getFieldContents_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-修改板块名称排序
export function updatePlateNorder(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\updatePlateNorder_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}


// web-修改板块字段名称排序
export function updatePlateFieldNorder(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\plates\\updatePlateFieldNorder_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-根据板块名称guid查询板块类型列表
export function getPlateTypesByPlateGuid(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\model\\getPlateTypesByPlateGuid&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-根据板块类型guid查询板块字段名称列表
export function getPlateFieldsByPlateTypeGuid(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/QueryData?SqlCmdName=web\\model\\getPlateFieldsByPlateTypeGuid&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-根据板块名称Guid查询板块字段名称列表
export function getPlateFieldsByPlateGuid(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\plates\\getPlateFieldsByPlateGuid_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}




// web-查询供应报价信息列表
export function getSupplyPriceList(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\supplyPrice\\getCatgList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询类型供应报价信息列表_1_0_1
export function getCattypeList_1_0_1(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\supplyPrice\\getCattypeList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询供方指派规则列表
export function getAssigns(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\supplyassign\\getAssigns_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-更新指派规则设置
export function setRuleType(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\supplyassign\\updRuleType_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询指派规则
export function getRuleType(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\supplyassign\\getRuleType_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-发布指派规则
export function updatePublishFlag(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\supplyassign\\updPublishFlag_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}


// web-发布供应报价信息-发布
export function supplypricePublish(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\supplyPrice\\publishOfCattype_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-发布供应报价信息-判断是否可以发布
export function supplypriceIsCanPublish(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\supplyPrice\\isCanPublish_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询需要一起发布的供应报价信息
export function getNeedPublishSupplyPrice(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\supplyPrice\\getNeedPublish_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-发布供应报价信息-发布(一个个发布)
export function publish1(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\supplyPrice\\publishOfCatg_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

//清除发布供应报价信息产生的临时值
export function clearTemporaryValuePrice(data) {
  return request({
    url: '/ExSql?SqlCmdName=aprc\\web\\model\\supplyPrice\\clearTemporaryValue_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}


// web-编辑板块类型别名_1_0_1
export function updatePlateTypeAlias_1_0_1(data) {
  axios.defaults.baseURL = '/api'
  return request({
    xf_url: '/api',
    url: '/ExSql?SqlCmdName=web\\model\\updatePlateTypeAlias_1_0_1&DBC=w_m',
    method: 'post',
    data: data
  })
}

// web-查询可添加的库字段名称列表
export function getFreeFieldContents(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\plates\\getFreeFieldContents_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}
