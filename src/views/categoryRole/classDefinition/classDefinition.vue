<template>
	<div class="app-container">
		<div class="flex flex-center">
			<div style="width: 100px;font-weight: bold;">品类类型</div>
			<div>{{pageTitle}}</div>
		</div>
		<div class="flex mt10">
			<div class="bold" style="width: 100px;">采购路径</div>
			<div>{{demandPathName}}</div>
		</div>
		<div class="flex mt10">
			<div class="bold" style="width: 100px;">供应路径</div>
			<div>{{supplyPathName}}</div>
		</div>
		<el-divider></el-divider>
		<el-tree :data="tableData" :props="defaultProps" @node-expand="getSon" @node-click="chooseRow">
		</el-tree>
	</div>
</template>

<script>
	import {
		getTopParentList,
		getSonList,
	} from '@/api/categoryRole/categoryCommon.js'
	export default {
		name: "index",
		data() {
			return {
				tableData: [],
				defaultProps: {
					children: 'children',
					label: 'name',
				},
				guid: '',
				pageTitle: '',
				demandPathName: '',
				supplyPathName: '',
				code: '',
				openRow: {},
				treeTitle: [],
			};
		},
		methods: {
			// 尝试
			getTableData() {
				getTopParentList({
					sdPathGuid: this.guid,
					curUserId: this.$store.state.user.adminId,
				}).then(res => {
					if (res.Tag.length) {
						let data = res.Tag[0].Table
						for (let i in data) {
							if (data[i].hasSon == '1') {
								data[i].children = [{
									name: '加载中...'
								}]
							}
						}
						this.tableData = data
					} else {
						this.tableData = []
					}
					console.log('tableData', this.tableData);
					this.tableData = this.clone(this.tableData)
				})
			},
			getSon(data) {
				console.log('hasSon', data.hasSon);
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
			chooseRow(data, node, nodeself) {
				this.treeTitle = []
				this.getParent(node)
				this.openRow = data
				if (data.hasSon === '0') {
					this.toBuild()
				} else {
					return
				}
			},
			getParent(node) {
				console.log('node111', node);
				let nodeObj = node
				let nodeTitle = node.data.name
				let level = node.level
				this.treeTitle.push(nodeTitle)
				if (level > 1) {
					this.getParent(nodeObj.parent)
				} else {
					return
				}
			},
			toBuild() {
				let obj = this.openRow
				obj.title = this.pageTitle
				obj.demandPathName = this.demandPathName
				obj.supplyPathName = this.supplyPathName
				obj.code = this.code
				let treeTitle = this.treeTitle
				if (typeof(treeTitle) == 'string') {
				  obj.treeTitle = treeTitle
				} else {
				  obj.treeTitle = treeTitle.reverse().join(" > ")
				}
				this.$router.push({
					path: "classBuilder",
					query: obj,
				});
			}
		},
		created() {
			this.pageTitle = this.$route.query.title
			this.demandPathName = this.$route.query.demandPathName
			this.supplyPathName = this.$route.query.supplyPathName
			this.guid = this.$route.query.sdPathGuid
			this.code = this.$route.query.code
			console.log('query', this.$route.query);
			this.getTableData()
		}
	}
</script>

<style scoped lang="scss">
</style>
