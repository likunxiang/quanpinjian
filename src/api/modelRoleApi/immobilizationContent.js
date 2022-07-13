import request from '@/utils/request'
import axios from 'axios'

// web-查询固化内容信息管理
export function getFixedData(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\fixedData\\getFixedDataList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询固化内容库信息管理
export function getFixedDataListByBTM(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\fixedData\\getFixedDataListByBTM_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}

// web-查询固化内容信息管理
export function getFixedMappingData(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\model\\fixedData\\getFixedMappingData_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}
