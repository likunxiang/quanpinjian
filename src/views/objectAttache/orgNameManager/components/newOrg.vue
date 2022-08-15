<template>
	<el-dialog :title="title" :visible.sync="isOpen" width="700px" @close="beforeClose">
		<el-row class="mt20 pb20 flex flex-center">
			<div style="flex-shrink: 0;margin-right: 20px;">机构名称</div>
			<el-input placeholder="请输入机构名称" v-model="inputField" clearable></el-input>
		</el-row>
		<el-row class="mt20 pb20 flex flex-center">
			<div style="flex-shrink: 0;margin-right: 20px;">签约主体</div>
			<div>
				<el-radio v-model="radio" label="1">机构</el-radio>
				<el-radio v-model="radio" label="2">个人</el-radio>
			</div>
		</el-row>
		<span slot="footer" class="dialog-footer">
			<el-button @click="close">取 消</el-button>
			<el-button type="primary" @click="submitNew" :disabled="!inputField.trim() || !radio">保存</el-button>
		</span>
	</el-dialog>
</template>

<script>
	import {
		insertOrg,
		updateOrg
	} from '@/api/objectAttacheApi/objectAttache.js'
	export default {
		name: "index",
		props: {
			pageType: {
				type: String,
				default: 'new'
			},
			row: {
				type: Object,
				default: () => {
					return {}
				}
			},
		},
		data() {
			return {
				isOpen: true,
				inputField: '',
				radio: '',
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
			async insertOrg() {
				await insertOrg({
					orgName: this.inputField,
					type: this.radio,
					curUserId: this.$store.state.user.adminId
				}).then(res => {
					if (res.OK == 'True') {

						if (res.Tag[0] > 0) {
							this.$message({
								type: 'success',
								message: '操作成功!'
							});
							this.$emit('refresh')
							this.close()
						} else {
							this.$message({
								type: 'error',
								message: '机构名称已存在!'
							});
						}

					}
				})
			},
			async updateOrg() {
				await updateOrg({
					orgGuid: this.row.orgGuid,
					orgName: this.inputField,
					type: this.radio,
					curUserId: this.$store.state.user.adminId
				}).then(res => {
					if (res.OK == 'True') {
					
						if (res.Tag[0] > 0) {
							this.$message({
								type: 'success',
								message: '操作成功!'
							});
							this.$emit('refresh')
							this.close()
						} else {
							this.$message({
								type: 'error',
								message: '机构名称已存在!'
							});
						}
					
					}
				})
			},
			submitNew() {
				if (this.pageType == 'new') {
					this.insertOrg()
				} else {
					this.updateOrg()
				}
			}
		},
		created() {
			let type = this.pageType 
			console.log(this.row);
			if (type == 'new') {
				this.title = '新建机构名称'
			} else {
				this.title = '编辑机构名称'
				this.inputField = this.row.orgName
				this.radio = this.row.type
			}
		}
	};
</script>

<style lang="scss" scoped>
</style>
