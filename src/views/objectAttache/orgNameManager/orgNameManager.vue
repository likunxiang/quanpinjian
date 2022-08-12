<template>
	<div class="app-container">
		<div class="flex jsb flex-center">
			<searchCom @toSearch='search' :searchResult='searchResult' placeholderText='请输入你要找的机构名称'></searchCom>
			<div>
				<el-button type="primary" @click="openNew">新建机构名称</el-button>
			</div>
		</div>
		<el-table :data="tableData" border v-loading="loading">
			<el-table-column prop="nickName" label="机构名称" align="center"></el-table-column>
			<el-table-column prop="registerTime" label="签约主体" align="center"></el-table-column>
			<el-table-column prop="nickName" label="创建日期" align="center"></el-table-column>
			<el-table-column prop="nation" label="合作终止日期" align="center"></el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button type="text" @click="editOrg(scope.row)">编辑机构名称</el-button>
					<el-button type="text" @click="delOrg(scope.row)">删除机构名称</el-button>
					<el-button type="text" @click="registerVerify(scope.row)">注册验证号码管理</el-button>
					<el-button type="text" @click="signLog(scope.row)">签约记录管理</el-button>
					
				</template>
			</el-table-column>
		</el-table>
		<pages @changePage="changePage" :total="pageTotal" :page="page"></pages>
		<newOrganization v-if="isNew" @close="closeNew" @refresh="orgGetList"></newOrganization>
	</div>
</template>

<script>
	import searchCom from '@/views/components/common/searchCom.vue'
	import pages from '@/views/components/common/pages'
	import {
		orgGetList,
		orgInsertOrgName,
		orgUpdateOrgName,
		orgDelOrgName,
	} from '@/api/choseManagerApi/choseManagerCom.js'
	export default {
		name: "index",
		components: {
			searchCom,
			pages,
		},
		data() {
			return {
				loading: false,
				tableData: [],
				page: 1,
				pageTotal: 0,
				searchResult: 0,
				searchVal: '',
				isNew: false,
				openRow: {}
			};
		},
		methods: {
			search(data) {
				this.searchVal = data
				this.page = 1
				//
			},
			changePage(page) {
				this.page = page
				//
			},
			openNew() {
				this.isNew = true
			},
			closeNew() {
				this.isNew = false
			},
			editOrg(row) {
				this.openRow = row
			},
			delOrg(row) {
				this.openRow = row
			},
			registerVerowrify() {
				this.openRow = row
			},
			signLog(row) {
				this.openRow = row
			},
			async orgGetList() {
				this.loading = true
			 await orgGetList({
					orgName: this.searchVal,
					size: '20',
					page: this.page,
					curUserId: this.$store.state.user.adminId,
					orgPathContent1: this.guidList[1] ? this.guidList[1] : '',
					orgPathContent2: this.guidList[2] ? this.guidList[2] : '',
					orgPathContent3: this.guidList[3] ? this.guidList[3] : '',
					orgPathContent4: this.guidList[4] ? this.guidList[4] : '',
					orgPathContent5: this.guidList[5] ? this.guidList[5] : '',
					orgPathContent6: this.guidList[6] ? this.guidList[6] : '',
					orgPathContent7: this.guidList[7] ? this.guidList[7] : '',
					orgPathContent8: this.guidList[8] ? this.guidList[8] : '',
					orgPathContent9: this.guidList[9] ? this.guidList[9] : '',
					orgPathContent10: this.guidList[10] ? this.guidList[10] : '',
					lastOrgPathContentGuid: this.lastOrgPathContentGuid
				}).then(res => {
					this.loading = false
					if (res.OK == 'True') {

						console.log(res);
						if (res.Tag.length > 0) {
							let data = res.Tag[0].Table
							this.tableData = data
						} else {
							this.tableData = []
						}
						this.searchResult = this.tableData.length
						this.pageTotal = this.tableData.length > 0 ? (this.page - 1) * 20 + 21 : (this.page -
							1) * 20 + 1
					}
				})
			},
		},
		created() {
			this.orgGetList()
		}
	}
</script>

<style scoped lang="scss">
</style>
