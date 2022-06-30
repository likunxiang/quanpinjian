<template>
	<el-dialog title="字段内容管理" :visible.sync="isOpen" width="700px" @close="beforeClose">
		<div>
			<el-row>
				<el-descriptions border :column="1" size="medium">
					<el-descriptions-item label="字段名称">{{fieldObj.plateFieldName}}</el-descriptions-item>
				</el-descriptions>
			</el-row>
			<el-row>
				<p>
					<span class="bold mr20">内容来源设置</span>
				</p>
			</el-row>
			<el-row>
			  <!-- 字段来源自建 -->
			  <el-row>
			    <el-button @click="openNewField">添加字段内容</el-button>
			    <el-button @click="openNewBatch">批量导入</el-button>
				<el-button @click="downModel">下载模板</el-button>
			  </el-row>
			  <el-row class="mt10">
			    <el-table :data='fieldBuildList' border>
			      <el-table-column prop="content" label="字段内容"></el-table-column>
			      <el-table-column prop="fieldName" label="操作">
			        <template slot-scope="scope">
			          <el-button type="text" @click="delField(scope.row)">删除</el-button>
			        </template>
			      </el-table-column>
			    </el-table>
			  </el-row>
			</el-row>
		</div>
		<newField v-if="isNew" @close="closeNewField" @submitNewField="submitNewField"></newField>
		<newBatch v-if="isBatch" @close="closeNewBatch" @submitNewBatch="submitNewBatch"></newBatch>
		<span slot="footer" class="dialog-footer">
		  <el-button @click="close">取 消</el-button>
		  <el-button type="primary" @click="close">确 定</el-button>
		</span>
	</el-dialog>
</template>

<script>
	import newField from '@/views/modelRole/communicateContentManage/components/newField.vue' // 批量导入
	import newBatch from '@/views/modelRole/communicateContentManage/components/newBatch.vue' // 批量新建字段
	import {
	  getPlateFieldDetail,
	  setPlateFieldContent,
	  deletePlateFieldContent
	} from '@/api/modelRoleApi/tradingContent.js'
	export default {
		name: "index",
		components: {
		  newField,
		  newBatch
		},
		props: {
			fieldObj: {
				type: Object,
				default: () => {
					return {}
				}
			},
		},
		data() {
			return {
				isOpen: true,
				fieldBuildList: [],
				isNew: false,
				isBatch: false,
			};
		},
		methods: {
			close() {
				this.isOpen = false
				this.$emit('close')
			},
			beforeClose() {
				this.close()
			},
			delField(row) {
			},
			downModel() {
				
			},
			// 新建字段模块
			openNewField() {
			  this.isNew = true
			},
			closeNewField() {
			  this.isNew = false
			},
			submitNewField(data) {
			  console.log(data);
			  this.setPlateFieldContent(data)
			},
			// 批量新建字段模块
			openNewBatch() {
			  this.isBatch = true
			},
			closeNewBatch() {
			  this.isBatch = false
			},
			submitNewBatch(data) {
			  console.log('数据', data);
			  this.setPlateFieldContent(data)
			},
			async setPlateFieldContent(data) {
			  if (typeof(data) === 'string' || (typeof(data) === 'object' && data.length == null)) {
			    var data1 = {}
			    data1 = {
			      plateFieldGuid: this.fieldObj.plateFieldGuid,
			      content: data.fixedDataGuid || data.trim()
			    }
			  } else {
			    var data1 = []
			    for (let i in data) {
			      if (data[i].trim() === '') {
			
			      } else {
			        let obj = {
			          plateFieldGuid: this.fieldObj.plateFieldGuid,
			          content: data.fixedDataGuid || data[i].trim()
			        }
			        console.log('datai', data.fixedDataGuid || data[i]);
			        data1.push(obj)
			      }
			    }
			  }
			  await setPlateFieldContent(JSON.stringify(data1)).then(res => {
			    console.log(res);
			    if (res.Tag[0] > 0) {
			      // this.$message({
			      //   type: 'success',
			      //   message: '操作成功!'
			      // });
			      // 刷新
			    } else {
			      this.$message({
			        type: 'error',
			        message: '操作失败!'
			      });
			    }
			
			  })
			},
		},
		created() {

		}
	};
</script>

<style lang="scss" scoped>
</style>
