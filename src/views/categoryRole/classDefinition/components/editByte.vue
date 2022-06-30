<template>
	<el-dialog title="编辑字节标题" :visible.sync="isOpen" width="700px" @close="beforeClose">
		<el-input v-model="editName" :placeholder="row.name"></el-input>
		<span slot="footer" class="dialog-footer">
			<el-button type="primary" @click="submit" :disabled="editName && editName == row.name">保存</el-button>
		</span>
	</el-dialog>
</template>

<script>
	import {
		updateTitleByGuid
	} from '@/api/categoryRole/classDefinition.js'
	export default {
		name: "index",
		props: {
			row: {
				type: Object,
				default: () => {
					return {}
				}
			},
			length: {
				type: Number,
				default: 0,
			}
		},
		data() {
			return {
				isOpen: true,
				editName: '',
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
			submit() {
				this.updateTitleByGuid()
			},
			async updateTitleByGuid() {
				let n = this.length
				let n1 = n + 1
				let name = this.editName ? this.editName : '品类' + n1 + '段字节标题'
				await updateTitleByGuid({
					titleGuid: this.row.titleGuid,
					name: name
				}).then(res => {
					console.log(res);
					if (res.OK == 'True') {
						if (res.Tag[0] > 0) {
							this.$emit('refresh')
							this.close()
						} else {
							this.$message({
								type: 'error',
								message: '操作失败!'
							});
						}
					}
				})
			}
		},
		created() {
			console.log(this.row);
		}
	};
</script>

<style lang="scss" scoped>
</style>
