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
		<fieldAllocation v-if="isField" @close="closeFieldAllocation" :row="openRow"></fieldAllocation>
	</div>
</template>

<script>
	import fieldAllocation from '@/views/modelRole/communicateContentManage/components/fieldAllocation.vue'
	export default {
		name: "index",
		components: {
			fieldAllocation
		},
		data() {
			return {
				tableData: [{
					name: '岗位类型',
					id: '1',
				}, {
					name: '岗位薪酬',
					id: '2',
				}, ],
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
			}
		},
		created() {

		}
	}
</script>

<style scoped lang="scss">
</style>
