import request from '@/utils/request'
import axios from 'axios'

// web-查询类型服务定价列表_1_0_1
export function getCattypeList_1_0_1(data) {
  return request({
    url: '/QueryData?SqlCmdName=aprc\\web\\servicefee\\getCattypeList_1_0_1&DBC=w_a',
    method: 'post',
    data: data
  })
}
