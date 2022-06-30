<template>
	<el-row>
		<el-table :data="tableData" border style="width: 100%" v-loading="loading">
			<el-table-column prop="cattypeName" align="center" label="品类类型">
			</el-table-column>
			<el-table-column prop="demandPathName" align="center" label="采购路径">
			</el-table-column>
			<el-table-column prop="supplyPathName" align="center" label="供应路径">
			</el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button @click="toManage(scope.row)" type="text" size="small">场景下品类名称定义管理</el-button>
					<!-- <el-button type="text" size="small" @click="toSort(scope.row)">场景品类排序</el-button> -->
				</template>
			</el-table-column>
		</el-table>
	</el-row>
</template>

<script>
	import {
		getFixedList
	} from '@/api/categoryRole/giveScene.js'
	export default {
		name: "index",
		props: {
			parentObj: {
				type: Object,
				default: () => {
					return {}
				}
			},
			code: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				tableData: [],
				loading: true
			};
		},
		methods: {
			toManage(row) {
				let obj = row
				obj.title = row.cattypeName
				obj.code = this.code
				this.$router.push({
					path: "classDefinition/classDefinition",
					query: obj,
				});
			},
			async getFixedList() {
				this.loading = true
				await getFixedList().then(res => {
					this.loading = false
					console.log(res);
					if (res.Tag.length) {
						let data = res.Tag[0].Table
						this.tableData = data
					} else {
						this.tableData = []
					}
				})
			}
		},
		created() {
			this.getFixedList()
		}
	}
</script>

<style scoped lang="scss">
</style>
