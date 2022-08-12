<template>
	<div class="pages">
		<div class="flex flex-center mb20">
			<el-input placeholder="请输入联系电话" clearable v-model="searchVal" @keyup.enter.native="search"
				style="width: 200px;margin-right: 20px;" @clear="search">
				<i class="el-icon-search el-input__icon" slot="suffix" @click="search" />
			</el-input>
			<div class="" v-if="isToSearch">搜索结果：{{searchResult}}</div>
		</div>
		<el-table v-loading="loading" :data="tableData" border style="width: 100%">
			<el-table-column prop="userName" label="姓名" align="center">
			</el-table-column>
			<el-table-column prop="nation" label="区号" align="center">
			</el-table-column>
			<el-table-column prop="phonenumber" label="联系电话" align="center">
			</el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-row>
						<el-button @click="openDetail(scope.row)" type="text" size="small">资质详情</el-button>
					</el-row>
				</template>
			</el-table-column>
		</el-table>
		<pages :total="pageTotal" @changePage="changePage" :page="page"></pages>
		<intelligenceDetail v-if="isDetail" @close="closeDetail" @refresh="getUserList" :row="openRow"
			:categoryName="row.categoryName"></intelligenceDetail>
	</div>
</template>

<script>
	import {
		getUserList
	} from '@/api/operationRoleApi/catDealManagement.js'
	import pages from '@/views/components/common/pages.vue'
	import intelligenceDetail from '@/views/operationRole/catDealManagement/catUserAptitude/onePans/intelligenceDetail.vue'
	export default {
		name: "index",
		components: {
			pages,
			intelligenceDetail
		},
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
				searchVal: '',
				isToSearch: false,
				searchResult: 0,
				tableData: [],
				isDetail: false,
				page: 1,
				pageTotal: 0,
				openRow: {},
				loading: true
			};
		},
		methods: {
			search() {
				if (this.searchVal.length > 0) {
					this.isToSearch = true
				} else {
					this.isToSearch = false
				}
				this.page = 1
				this.getUserList()
			},
			openDetail(row) {
				this.openRow = row
				this.isDetail = true
			},
			closeDetail() {
				this.isDetail = false
			},
			changePage(page) {
				this.page = page
				this.getUserList()
			},
			async getUserList() {
				this.loading = true
				await getUserList({
					categoryGuid: this.row.categoryGuid,
					approveFlag: 0,
					page: this.page,
					size: '20',
					curUserId: this.$store.state.user.adminId,
					phonenumber: this.searchVal,
				}).then(res => {
					this.loading = false
					console.log(res);
					let data = []
					if (res.Tag.length) {
						data = res.Tag[0].Table
					} else {
						data = []
					}
					this.tableData = data
					this.searchResult = this.tableData.length
					this.pageTotal = this.tableData.length > 0 ? (this.page - 1) * 20 + 21 : (this.page - 1) *
						20 + 1
				})
			}
		},
		created() {
			this.getUserList()
		}
	}
</script>

<style scoped lang="scss">
	.pages {
		min-height: 78vh;
		padding-bottom: 68px;
	}
</style>
