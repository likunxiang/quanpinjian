<template>
	<div class="app-container">
		<el-table v-loading="loading" :data="tableData" border style="width: 100%">
			<el-table-column prop="cattypeName" align="center" label="品类类型">
			</el-table-column>
			<el-table-column prop="demandPathName" align="center" label="采购路径">
			</el-table-column>
			<el-table-column prop="supplyPathName" align="center" label="供应路径">
			</el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button @click="toManage(scope.row)" type="text" size="small">需求场景管理</el-button>
					<!-- <el-button type="text" size="small" @click="toSort(scope.row)">场景品类排序</el-button> -->
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import {
		getFixedList
	} from '@/api/categoryRole/giveScene.js'
	export default {
		name: "index",
		props: {
			guid: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				tableData: [],
				loading: true,
			};
		},
		methods: {
			toManage(row) {
				let obj = row
				obj.title = row.cattypeName
				this.$router.push({
					path: "purchaseSceneManage",
					query: obj,
				});
			},
			// toSort(row) {
			//   let obj = {}
			//   obj.title = '个人采购 > ' + row.typeName
			//   this.$router.push({
			//     path: "/giveScene/sceneTypeSort",
			//     query: obj,
			//   });
			// },
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
		mounted() {
			this.getFixedList()
		}
	};
</script>

<style lang="scss">
</style>
