<template>
	<el-dialog title="查看需求场景" :visible.sync="isOpen" width="700px" @close="beforeClose">
		<div class="flex flex-center mb10 mt10">
			<div class="input-text">品类名称</div>
			<div>{{openRow.categoryName}}</div>
		</div>
		<div class="flex flex-center ">
			<div class="input-text">品类类型</div>
			<div>{{openRow.cattypeName}}</div>
		</div>
		<el-divider></el-divider>
		<div v-for="(item,index) in demandObj" :key="index">
			<div class="flex flex-center mb10">
				<div class="input-text">采购路径</div>
				<div>{{item.demandPathName}}</div>
			</div>
			<div class="flex flex-center mb10">
				<div class="input-text">供应路径</div>
				<div>{{item.supplyPathName}}</div>
			</div>
			<div style="padding-bottom: 40px;">
				<el-tree :data="item.tree" :props="defaultProps" node-key="id" @node-expand="getSon" ></el-tree>
			</div>
		</div>
	</el-dialog>
</template>

<script>
	import {
		getRelationOfParByCGuid
	} from '@/api/categoryRole/giveClass.js'
	import {
		getTopParentList,
		getSonList,
	} from '@/api/categoryRole/categoryCommon.js'
	export default {
		name: "index",
		props: {
			openRow: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		data() {
			return {
				isOpen: true,
				tableData: [],
				defaultProps: {
					children: 'children',
					label: 'name',
				},
				demandObj: {}
			};
		},
		methods: {
			close() {
				this.isOpen = false
				this.$emit('closeNew')
			},
			beforeClose() {
				this.close()
			},
			
			async getTopParentList(id,index) {
				await getTopParentList({
					sdPathGuid: id,
					curUserId: this.$store.state.user.adminId,
				}).then(res => {
					this.loading = false
					if (res.Tag.length) {
						let data = res.Tag[0].Table
						for (let i in data) {
							if (data[i].hasSon == '1') {
								data[i].children = [{
									name: '加载中...'
								}]
							}
						}
						this.demandObj[index].tree = data
					} else {
						this.demandObj[index].tree = []
					}
					console.log('demandObj', this.demandObj);
					this.demandObj = this.clone(this.demandObj)
				})
			},
			
			async getRelationOfParByCGuid() {
				await getRelationOfParByCGuid({
					categoryGuid: this.openRow.categoryGuid,
					curUserId: this.$store.state.user.adminId,
				}).then(res => {
					console.log(res);
					if (res.Tag.length) {
						let data = res.Tag[0].Table
						this.demandObj = data
						for (let i in data) {
							this.getTopParentList(data[i].sdPathGuid,i)
						}
					} else {
						this.demandObj = {}
					}
				})
			},
			getSon(data) {
				if (data.hasSon == '1') {
					this.getSonList(data)
				} else {
					return
				}

			},
			async getSonList(data) {
				let id = data.guid
				await getSonList({
					parentGuid: id,
					curUserId: this.$store.state.user.adminId,
				}).then(res => {
					console.log(res);
					if (res.Tag.length) {
						// let data = res.Tag[0].Table
						let arr = res.Tag[0].Table
						for (let i in arr) {
							if (arr[i].hasSon == '1') {
								arr[i].children = [{
									name: '加载中...'
								}]
							}
						}
						data.children = arr
					} else {
						data.children = []
					}
				})
			},
		},
		created() {
			this.getRelationOfParByCGuid()
		}
	};
</script>

<style lang="scss" scoped>
	.input-text {
		width: 120px;
		font-weight: bold;
	}
</style>
