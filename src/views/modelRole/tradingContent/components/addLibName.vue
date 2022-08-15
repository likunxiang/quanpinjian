<template>
	<el-dialog title="添加库名称" :visible.sync="isOpen" width="700px" @close="beforeClose" append-to-body>
		<el-row>
			<el-descriptions border :column="1" size="medium">
				<el-descriptions-item label="字段名称">{{fieldObj.plateFieldName}}</el-descriptions-item>
				<el-descriptions-item label="字段内容来源">{{contentSources}}</el-descriptions-item>
			</el-descriptions>
		</el-row>
		<el-row>
			<div class="flex flex-center mb20 mt20">
				<el-input placeholder="请输入你要找的字段名称" clearable v-model="searchVal" @keyup.enter.native="search"
					style="width: 200px;margin-right: 20px;" @clear="clearSearch">
					<i class="el-icon-search el-input__icon" slot="suffix" @click="search" />
				</el-input>
				<div class="" v-if="isToSearch">搜索结果</div>
			</div>
		</el-row>
		<el-row>
			<el-radio-group v-model="radioField">
				<el-row class="mb10" v-for='(field,index) in fieldList' :key="index">
					<el-radio :label="field.fixedDataCode" @change="changeField">{{field.fixedDataName}}</el-radio>
				</el-row>
			</el-radio-group>
		</el-row>
		<span slot="footer" class="dialog-footer">
			<el-button @click="close">取 消</el-button>
			<el-button type="primary" @click="submit" :disabled="radioField<=0">确 定</el-button>
		</span>
	</el-dialog>
</template>

<script>
	import {
		getFreeFieldContents
	} from '@/api/modelRoleApi/tradingContent.js'
	export default {
		name: "index",
		props: {
			fieldObj: {
				type: Object,
				default: () => {
					return {}
				}
			},
			categoryGuid: {
				type: String,
				default: ''
			},
			contentSources: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: 'demand'
			},
			bizType: {
				type: String,
				default: '1'
			},
		},
		data() {
			return {
				isOpen: true,
				searchVal: '',
				searchResult: 0,
				fieldList: [],
				radioField: 0,
				chooseField: {}
			};
		},
		methods: {
			search() {
				this.getFixedData()
			},
			clearSearch() {
				this.search()
			},
			close() {
				this.isOpen = false
				this.$emit('close')
			},
			beforeClose() {
				this.close()
			},
			submit() {
				let data = this.chooseField
				this.$emit('getField', data)
				this.close()
			},
			changeField(val) {
				console.log(val);
				for (let i in this.fieldList) {
					if (this.fieldList[i].fixedDataCode === val) {
						this.chooseField = this.fieldList[i]
					}
				}
				console.log(this.chooseField);

			},
			async getFreeFieldContents() {
				console.log('fieldObj',this.fieldObj);
				await getFreeFieldContents({
					categoryGuid: this.categoryGuid,
					bizType: this.bizType,
					catTreeCode: this.type,
					name: this.searchVal,
					curUserId: this.$store.state.user.adminId,
				}).then(res => {
					console.log(res);
					if (res.Tag.length) {
						let data = res.Tag[0].Table
						this.fieldList = data
						this.searchResult = this.fieldList.length
					} else {
						this.fieldList = []
						this.searchResult = this.fieldList.length
					}
				})
			}
		},
		created() {
			this.getFreeFieldContents()
		}
	};
</script>

<style lang="scss" scoped>
</style>
