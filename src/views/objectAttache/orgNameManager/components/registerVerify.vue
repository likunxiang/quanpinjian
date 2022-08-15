<template>
	<el-dialog title="注册验证号码管理" :visible.sync="isOpen" width="700px" @close="beforeClose">
		<el-row class="mt20 pb20 flex flex-center">
			<div style="flex-shrink: 0;margin-right: 20px;">机构名称</div>
			<div>{{row.orgName}}</div>
		</el-row>
		<el-row>
			<div style="background: #F2F2F2;padding: 10px;">请完善填写合同签约中的联系电话信息（机构在【机构供应管理系统】注册时，需要通过该信息进行白名单注册验证）</div>
		</el-row>
		<el-row class="mt20 pb20 flex flex-center">
			<div style="flex-shrink: 0;margin-right: 20px;">国家/区号</div>
			<div>中国大陆（+86）</div>
		</el-row>
		<el-row class="mt20 pb20 flex flex-center">
			<div style="flex-shrink: 0;margin-right: 20px;">联系电话</div>
			<el-input placeholder="请输入" v-model="phonenumber" clearable></el-input>
		</el-row>
		<span slot="footer" class="dialog-footer">
			<el-button @click="close">取 消</el-button>
			<el-button type="primary" @click="submitNew" :disabled="!phonenumber.trim()">保存</el-button>
		</span>
	</el-dialog>
</template>

<script>
	import {
		updatePhone
	} from '@/api/objectAttacheApi/objectAttache.js'
	export default {
		name: "index",
		props: {
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
				phonenumber: '',
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
			async updatePhone() {
				await updatePhone({
					orgGuid: this.row.orgGuid,
					phonenumber: this.phonenumber,
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
							let msg = '【' + this.row.orgName + '】已注册，不需要再机构注册验证。'
							// 不可以发布
							this.$alert(msg, '', {
							  confirmButtonText: '知道了',
							  callback: action => {
								  this.$emit('refresh')
								  this.close()
							  }
							});
						}

					}
				})
			},
			submitNew() {
				this.updatePhone()
			}
		},
		created() {
			this.phonenumber = this.row.phonenumber || ''
		}
	};
</script>

<style lang="scss" scoped>
</style>
