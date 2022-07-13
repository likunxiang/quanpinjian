<template>
	<div class="app-container">
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="name" label="字段名称" align="center">
			</el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-row>
						<el-button @click="openFieldAllocation(scope.row)" type="text" size="small">字段内容配置</el-button>
					</el-row>
				</template>
			</el-table-column>
		</el-table>
		<fieldAllocation v-if="isField" @close="closeFieldAllocation" :fieldObj="openRow"></fieldAllocation>
	</div>
</template>

<script>
	import fieldAllocation from '@/views/modelRole/communicateContentManage/components/fieldAllocation.vue'
	import {
		getFixedData
	} from '@/api/modelRoleApi/immobilizationContent.js'
	export default {
		name: "index",
		components: {
			fieldAllocation
		},
		data() {
			return {
				tableData: [],
				isField: false,
				openRow: {}
			};
		},
		methods: {
			openFieldAllocation(row) {
				this.isField = true
				this.openRow = row
			},
			closeFieldAllocation () {
				this.isField = false
			},
			async getFixedData() {
				this.loading = true
				await getFixedData({
					type: 3,
					name: '',
					bizType: '5',
					page: '1',
					size: '20'
				}).then(res => {
					this.loading = false
					console.log(res);
					if (res.Tag.length) {
						let data = res.Tag[0].Table
						this.tableData = data
						this.pageTotal = (this.page - 1) * 20 + 21
					} else {
						this.tableData = []
						this.pageTotal = (this.page - 1) * 20 + 1
					}
				})
			}
		},
		created() {
			this.getFixedData()
		}
	}
</script>

<style scoped lang="scss">
</style>
