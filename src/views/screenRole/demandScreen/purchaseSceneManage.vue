<template>
	<div class="app-container">
		<div class="flex">
			<div class="bold" style="width: 120px;">品类类型</div>
			<div>{{pageTitle}}</div>
		</div>
		<div class="flex mt10">
			<div class="bold" style="width: 120px;">采购路径</div>
			<div>{{demandPathName}}</div>
		</div>
		<div class="flex mt10">
			<div class="bold" style="width: 120px;">供应路径</div>
			<div>{{supplyPathName}}</div>
		</div>
		<el-divider></el-divider>
		<el-button type="primary" @click="openNew">新建</el-button>
		<el-button type="primary" @click="openNewBatch">批量新建</el-button>
		<!-- <el-button type="primary" @click="openLead">批量导入</el-button>
		<el-button type="primary" @click="openTemplate">下载模板</el-button> -->
		<el-divider></el-divider>

		<div class="">
			<template>
				<el-tree v-loading="loading" :data="tableData" :props="defaultProps" node-key="id" @node-expand="getSon"
					@node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter"
					@node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd"
					@node-drop="handleDrop" draggable @node-contextmenu="rightClick" :allow-drop="allowDrop">
				</el-tree>
			</template>
		</div>

		<div v-show="menuVisible" class="menu-box" :style="{left: menuX + 'px',top: menuY + 'px'}">
			<el-menu id="menu" @select="handleSelect" text-color="#000">
				<el-menu-item index="1" class="menuItem">
					<span slot="title">编辑需求场景</span>
				</el-menu-item>
				<el-menu-item index="2" class="menuItem">
					<span slot="title">删除需求场景</span>
				</el-menu-item>
			</el-menu>
		</div>

		<el-dialog title="新建需求场景" width="700px" v-if="isNew" :visible.sync="isNew" destroy-on-close>
			<div class="mt20">
				<span class="mr20">品类类型</span>
				<span>{{pageTitle}}</span>
			</div>
			<div class="input-box">
				<div class="flex flex-center">
					<div class="input-text">父级场景</div>
					<el-input type="text" :value="fatherSceneSure.name" placeholder="请选择" suffix-icon="el-icon-search"
						@focus="openFather" />

				</div>
				<div class="flex flex-center mt10">
					<div class="input-text"></div>
					<div>{{treeTitleString}}</div>
				</div>
				<div class="flex flex-center mt20">
					<div class="input-text">需求场景</div>
					<el-input type="text" v-model="addSceneName" placeholder="请输入" />
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="closeNew">取 消</el-button>
				<el-button type="primary" @click="sumbitAdd" :disabled="!addSceneName.trim()">确 定</el-button>
			</span>
		</el-dialog>

		<el-dialog title="选择父级场景" width="700px" :visible.sync="isFather">
			<div class="mt20">
				<span class="mr20">品类类型</span>
				<span>{{pageTitle}}</span>
			</div>
			<!-- <el-tree :data="tableData" :lazy="true" :props="defaultProps" :load="againOne" @node-click="fatherChoose" default-expand-all> -->
			<el-tree :data="tableData" :props="defaultProps" @node-expand="getSon" @node-click="fatherChoose">
			</el-tree>
			<span slot="footer" class="dialog-footer">
				<el-button @click="closeFather">取 消</el-button>
				<el-button type="primary" @click="submitFather" :disabled="!fatherScene.guid">确 定</el-button>
			</span>
		</el-dialog>

		<el-dialog title="批量导入" width="700px" :visible.sync="isLead">
			<div class="mt20">
				<span class="mr20">品类类型</span>
				<span>{{pageTitle}}</span>
			</div>
			<div class="input-box">
				<div class="flex flex-center">
					<div class="input-text">父级场景</div>
					<el-input type="text" :value="fatherSceneSure.label" placeholder="请选择" suffix-icon="el-icon-search"
						@focus="openFather" />
				</div>
				<div class="flex mt20">
					<div style="height: 32px;line-height: 32px;width: 100px;">需求场景</div>
					<el-upload ref="upload" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
						:on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove"
						show-file-list multiple :limit="1" :on-progress="uploading" :on-success="uploadSuccess"
						:on-exceed="handleExceed" :auto-upload="false" :file-list="fileList">
						<el-button size="small" type="primary">点击上传</el-button>
						<div slot="tip" class="el-upload__tip">请按照模板格式导入</div>
					</el-upload>
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="closeNew">取 消</el-button>
				<el-button type="primary" @click="submitUpload">确 定</el-button>
			</span>
		</el-dialog>

		<el-dialog title="编辑需求场景" width="700px" :visible.sync="isEdit">
			<div class="mt20">
				<span class="mr20">品类类型</span>
				<span>{{pageTitle}}</span>
			</div>
			<div class="input-box">
				<div class="flex flex-center">
					<div class="input-text">父级场景</div>
					<el-input type="text" :value="editFather.name" :disabled="true" />
				</div>
				<div class="flex flex-center mt10">
					<div class="input-text"></div>
					<div>{{treeTitleString}}</div>
				</div>

				<div class="flex flex-center mt20">
					<div class="input-text">需求场景</div>
					<el-input type="text" v-model="editScreen" placeholder="请输入" />
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="closeEdit">取 消</el-button>
				<el-button type="primary" @click="submitEdit" :disabled="!editScreen">确 定</el-button>
			</span>
		</el-dialog>

		<newBatch v-if="isBatch" @close="closeNewBatch" title="批量新建" @submitNewBatch="submitBatch"
			@openFather="openFather" :fatherSceneSureName="fatherSceneSure.name" :treeTitleString="treeTitleString">
		</newBatch>

	</div>
</template>

<script>
	import {
		getTopParentList,
		getSonList,
		insertType3,
		updateType3,
		deleteType3,
		updateType3Norder,
		existNTByCatTreeGuid
	} from '@/api/categoryRole/categoryCommon.js'
	import newBatch from '@/views/screenRole/demandScreen/components/newBatch.vue'
	export default {
		name: "index",
		components: {
			newBatch
		},
		data() {
			return {
				pageTitle: '',
				demandPathName: '',
				supplyPathName: '',
				tableData: [],
				defaultProps: {
					children: 'children',
					label: 'name',
				},
				isNew: false, // 新建弹窗的开关
				addSceneName: '', // 新增的场景名字
				isLead: false, // 批量导入的开关
				isTemplate: false, // 导入模板的开关
				isFather: false, // 选择父级场景开关
				isEdit: false, // 编辑类名
				editSelf: {}, // 将要修改的对象
				editFather: {}, // 将要修改的对象的父亲
				editScreen: '', // 修改完的场景
				menuVisible: false,
				menuX: '',
				menuY: '',
				fatherScene: {}, // 选中的父级
				fatherSceneSure: {}, // 确认选中的父级
				fileList: [],
				loadingPop: '',
				editNode: {},
				editData: {},
				currentGuid: '', // 拖拽的id
				oldNorder: '', // 拖拽的对象
				newNorder: '', // 放入的对象
				guid: '',
				fatherCode: '',
				isBatch: false, // 批量新建弹窗
				parentData: {}, // 将要拖拽的父亲节点
				loading: true,
				treeTitle: [], // 从属关系数组
				treeTitleString: '', // 从属关系展示
			};
		},
		watch: {
			menuVisible(value) {
				if (value) {
					document.body.addEventListener('click', this.closeMenu)
				} else {
					document.body.removeEventListener('click', this.closeMenu)
				}
			}
		},
		methods: {
			openNewBatch() {
				this.fatherSceneSure = {}
				this.treeTitle = []
				this.treeTitleString = ''
				this.isBatch = true
			},
			closeNewBatch() {
				this.isBatch = false
			},
			// 尝试
			getTableData() {
				this.loading = true
				getTopParentList({
					sdPathGuid: this.guid,
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
						this.tableData = data
					} else {
						this.tableData = []
					}
					console.log('tableData', this.tableData);
					this.tableData = this.clone(this.tableData)
				})
			},
			getSon(data, node, self) {
				this.closeMenu()
				console.log('hasSon', data);
				console.log('node', node);
				console.log('self', self);
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
					this.loading = false
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
			// 尝试结束
			fatherChoose(data, node, nodeself) {
				this.treeTitle = []
				this.treeTitleString = ''
				this.getParent(node)
				console.log(data);
				this.fatherScene = data
			},
			getParent(node) {
				console.log('node111', node);
				let nodeObj = node
				let nodeTitle = node.data.name
				let level = node.level
				console.log('nodeLevel', level);
				this.treeTitle.push(nodeTitle)
				if (level > 1) {
					this.getParent(nodeObj.parent)
				} else {
					let treeTitle = this.treeTitle

					if (typeof(treeTitle) == 'string') {
						this.treeTitleString = treeTitle
					} else {
						if (this.isEdit) {
							treeTitle.shift()
							this.treeTitleString = treeTitle.reverse().join(" > ")
						} else {
							this.treeTitleString = treeTitle.reverse().join(" > ")
						}
					}
				}
			},
			handleDragStart(node, ev) {
				this.closeMenu()
			},
			handleDragEnter(draggingNode, dropNode, ev) {
				console.log('tree drag enter: ', dropNode.label);
			},
			handleDragLeave(draggingNode, dropNode, ev) {
				// console.log('tree drag leave: ', dropNode.label);
			},
			handleDragOver(draggingNode, dropNode, ev) {
				console.log('tree drag over: ', dropNode.label);
			},
			handleDragEnd(draggingNode, dropNode, dropType, ev) {
				console.log('tree drag end1: ', dropNode && dropNode.label, dropType);
				this.currentGuid = draggingNode.data.guid
				this.oldNorder = draggingNode.data.norder
				this.newNorder = dropNode.data.norder
				if (this.oldNorder === this.newNorder) {
					return
				}

			},
			handleDrop(draggingNode, dropNode, dropType, ev) {
				this.parentData = dropNode.parent.data
				let data = this.parentData
				console.log('拖拽结束时', data);
				this.updateType3Norder(data)
			},
			allowDrop(draggingNode, dropNode, type) {
				// console.log('正在拖拽的节点', draggingNode);

				// console.log('将要放入的节点', dropNode);

				if (draggingNode.data.level === dropNode.data.level) {
					//fatherId 是父节点id
					if (draggingNode.data.parentGuid === dropNode.data.parentGuid) {
						return type === 'prev' || type === 'next'
					} else {
						return false;
					}
				} else {
					// 不同级进行处理
					return false;
				}
			},
			// 编辑场景
			openEdit() {
				this.isEdit = true
				this.treeTitle = []
				this.treeTitleString = ''
				this.getParent(this.editNode)
				this.closeMenu()
				console.log(this.editSelf);
			},
			closeEdit() {
				this.isEdit = false
			},
			submitEdit() {
				updateType3({
					guid: this.editSelf.guid,
					name: this.editScreen,
					curUserId: this.$store.state.user.adminId,
				}).then(res => {
					console.log(res);
					this.editNode.data.name = this.editScreen
					this.$message({
						type: 'success',
						message: '操作成功!'
					});
					this.closeEdit()
				})
			},
			// 删除场景--没有生成器
			delScreen() {
				this.$confirm('确认删除【' + this.editSelf.name + '】', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					deleteType3({
						guid: this.editSelf.guid,
						curUserId: this.$store.state.user.adminId,
					}).then(res => {
						let parent = this.editNode.parent;
						let children = parent.childNodes;
						let index
						for (let i in children) {
							console.log('2', i);
							if (this.editData.guid == children[i].data.guid) {
								console.log('3', i);
								index = i
								children.splice(index, 1);
							}
						}
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
						this.getTableData()
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			// 删除场景--有生成器
			delScreenHas() {
				this.$confirm('该场景有品类生成器，删除该场景，APP端的品类搜索器也同步删除了。', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					deleteType3({
						guid: this.editSelf.guid,
						curUserId: this.$store.state.user.adminId,
					}).then(res => {
						let parent = this.editNode.parent;
						let children = parent.childNodes;
						let index
						for (let i in children) {
							console.log('2', i);
							if (this.editData.guid == children[i].data.guid) {
								console.log('3', i);
								index = i
								children.splice(index, 1);
							}
						}
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
						this.getTableData()
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			// 新建弹窗
			openNew() {
				this.isNew = true
				this.fatherSceneSure = {}
				this.addSceneName = ''
				this.treeTitle = []
				this.treeTitleString = ''
				this.closeMenu()
			},
			closeNew() {
				this.isNew = false
			},
			// 批量导入
			openLead() {
				this.isLead = true
				this.closeMenu()
			},
			closeLead() {
				this.isLead = false
			},
			// 导入模板
			openTemplate() {
				this.isTemplate = true
				this.closeMenu()
			},
			closeTemplate() {
				this.isTemplate = false
			},
			// 选择父级场景
			openFather() {
				this.isFather = true
				this.fatherScene = {}
				this.closeMenu()
			},
			closeFather() {
				this.isFather = false
			},
			submitFather() {
				this.fatherSceneSure = this.fatherScene
				console.log('fatherSceneSure', this.fatherSceneSure);
				this.isFather = false
			},
			// 上传文件
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},
			beforeRemove(file, fileList) {
				return this.$confirm(`确定移除 ${ file.name }？`);
			},
			uploading() {
				const loading = this.$loading({
					lock: true,
					text: '文件上传中',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				this.loadingPop = loading
			},
			uploadSuccess(response, file, fileList) {
				this.loadingPop.close()
				this.$refs.upload.clearFiles(); // 方法呢？
				this.$alert(response.Message, "导入结果", {
					dangerouslyUseHTMLString: true
				});
				this.isLead = false
			},
			submitUpload() {
				this.$refs.upload.submit();
			},
			// 确认新增场景
			sumbitAdd() {
				this.insertType3()
			},
			// 批量新增
			submitBatch(data) {
				let arr = []
				for (let i in data) {
					if (data[i].trim() === '') {

					} else {
						let obj = {
							parentGuid: this.fatherSceneSure.guid || this.guid, // 分节点id  有选择父元素的时候
							name: data[i].trim(),
							sdPathGuid: this.guid,
							curUserId: this.$store.state.user.adminId,
						}
						arr.push(obj)
					}

				}
				insertType3(JSON.stringify(arr)).then(res => {
					console.log(res);
					if (res.Tag[0] > 0) {
						this.$message({
							type: 'success',
							message: '新增成功'
						});
						this.isBatch = false
						this.getTableData()
					} else {
						this.$message({
							type: 'error',
							message: '场景已存在或当前父级已存在该场景'
						});
					}


				})
			},
			// 新增场景
			async insertType3() {
				await insertType3({
					parentGuid: this.fatherSceneSure.guid || this.guid, // 分节点id  有选择父元素的时候
					name: this.addSceneName.trim(),
					sdPathGuid: this.guid,
					curUserId: this.$store.state.user.adminId,
				}).then(res => {
					console.log(res);
					if (res.Tag[0] > 0) {
						this.$message({
							type: 'success',
							message: '新增成功'
						});
						this.isNew = false
						this.getTableData()
					} else {
						this.$message({
							type: 'error',
							message: '场景已存在或当前父级已存在该场景'
						});
					}


				})
			},
			// 右键打开菜单
			rightClick(event, data, node) {
				this.menuX = event.clientX
				this.menuY = event.clientY
				this.editSelf = data
				this.editFather = node.parent.data
				this.editScreen = data.name
				this.editNode = node
				this.editData = data
				this.menuVisible = true
			},
			closeMenu() {
				this.menuVisible = false
			},
			handleSelect(key) {
				if (key == 1) {
					this.openEdit()
				} else if (key == 2) {
					// this.delScreen()
					this.existNTByCatTreeGuid() // 4-21新版
				}
				this.closeMenu()
			},
			// 拖拽接口
			async updateType3Norder(data) {
				this.loading = true
				await updateType3Norder({
					guid: this.currentGuid,
					oldNorder: this.oldNorder,
					newNorder: this.newNorder
				}).then(res => {
					console.log(res);
					console.log('即将开始请求儿子', data);
					if (data.length > 0) {
						this.getTableData()
					} else {
						this.getSonList(data)
					}

				})
			},
			// 有无品类生成器判断
			async existNTByCatTreeGuid() {
				await existNTByCatTreeGuid({
					sceneGuid: this.editData.guid,
					curUserId: this.$store.state.user.adminId,
				}).then(res => {
					console.log(res);
					let hasCatNTFlag = res.Tag[0]
					if (hasCatNTFlag > 0) {
						// 有生成器
						this.delScreenHas()

					} else {
						// 没有生成器
						this.delScreen()
					}
				})
			}
		},

		created() {
			console.log(this.$route.query);
			this.pageTitle = this.$route.query.title
			this.demandPathName = this.$route.query.demandPathName
			this.supplyPathName = this.$route.query.supplyPathName
			this.guid = this.$route.query.sdPathGuid
			this.fatherCode = this.$route.query.code
			this.getTableData()
		},
	};
</script>

<style lang="scss">
	.input-box {
		width: 70%;
		margin: 40px auto;

		.input-text {
			width: 100px;
			flex-shrink: 0;
		}
	}

	.menu-box {
		position: fixed;
		z-index: 9999;
		background-color: #fff;
		box-shadow: 0px 0px 6px #888888;
		width: 200px;
	}
</style>
