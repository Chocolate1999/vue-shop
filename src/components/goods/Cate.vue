<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary" @click="showAddCateDialog">添加分类</el-button>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <tree-table class="TreeTable" :data="cateList" :columns="columns" :selection-type="false" :expand-type="false" show-index border>
        <!-- 是否有效 -->
        <template slot="isOk" slot-scope="scope">
          <i style="color: lightgreen;" class="el-icon-success" v-if="scope.row.cat_deleted === false"></i>
          <i style="color: red;" class="el-icon-error" v-else></i>
        </template>
        <!-- 排序 -->
        <template slot="order" slot-scope="scope">
          <el-tag v-if="scope.row.cat_level === 0">一级</el-tag>
          <el-tag v-else-if="scope.row.cat_level === 1" type="success">二级</el-tag>
          <el-tag v-else type="warning">三级</el-tag>
        </template>
        <!-- 操作 -->
        <template slot="opt" slot-scope="">
          <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini">编辑</el-button>
        </template>
      </tree-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      ></el-pagination>
    </el-card>
    <!-- 添加分类的对话框 -->
    <el-dialog title="添加分类" :visible.sync="addCateDialogVisible" width="45%" @close="addCateDialogClosed">
     <!-- 内容主体区域 -->
      <el-form ref="addCateFormRef" :model="addCateForm" :rules="addCateFormRules" label-width="100px">
        <!-- 分类名称 -->
        <el-form-item label="分类名称：" prop="cat_name">
          <el-input v-model="addCateForm.cat_name"></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item  label="父级分类：">
          <!-- options用来指定数据源 -->
          <!-- props用来指定配置对象 -->
          <el-cascader expandTrigger="hover" :options="parentCateList" v-model="selectedKeys" :props="cascaderProps" @change="parentCateChange" clearable checkStrictly></el-cascader>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addCateDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCate">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 查询条件
      queryInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5
      },
      // 商品分类的数据列表
      cateList: [],
      // 总数据条数
      total: 0,
      // 为table指定列的定义
      columns: [{
        label: '分类名称',
        prop: 'cat_name'
      }, {
        label: '是否有效',
        // 将当前列指定为模板列
        type: 'template',
        template: 'isOk'
      }, {
        label: '排序',
        // 将当前列指定为模板列
        type: 'template',
        template: 'order'
      }, {
        label: '操作',
        // 将当前列指定为模板列
        type: 'template',
        template: 'opt'
      }],
      // 控制添加分类的对话框
      addCateDialogVisible: false,
      // 添加分类的数据对象
      addCateForm: {
        // 添加分类的名称
        cat_name: '',
        // 父级分类的id
        cat_pid: 0,
        // 分类的等级，默认分类的是1级分类
        cat_level: 0
      },
      // 添加分类表单的验证对象
      addCateFormRules: {
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' }
        ]
      },
      // 父级分类的列表
      parentCateList: [],
      cascaderProps: {
        value: 'cat_id',
        label: 'cat_name',
        children: 'children'
      },
      // 选中的父级分类的id数组
      selectedKeys: []
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    // 获取商品分类数据
    async getCateList() {
      const { data: res } = await this.$http.get('categories', { params: this.queryInfo })
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品分类失败！')
      }
      this.cateList = res.data.result
      this.total = res.data.total
    },
    // 监听pageSize改变的事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getCateList()
    },
    // 监听页码值改变的事件
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getCateList()
    },
    // 监听点击添加分类按钮事件
    showAddCateDialog() {
      // 先获取父级分类的数据列表
      this.getParentCateList()
      this.addCateDialogVisible = true
    },
    // 获取父级分类的数据列表
    async getParentCateList() {
      const { data: res } = await this.$http.get('categories', { params: { type: 2 } })
      if (res.meta.status !== 200) {
        return this.$message.error('获取父级分类数据失败！')
      }
      this.parentCateList = res.data
    },
    // 监听选择项变化事件
    parentCateChange() {
      // 如果selectedKeys数组长度大于0，证明选中了父级分类
      // 反之，说明没有选择任何父级分类
      if (this.selectedKeys.length > 0) {
        // 父级分类的id
        this.addCateForm.cat_pid = this.selectedKeys[this.selectedKeys.length - 1]
        // 分类的等级
        this.addCateForm.cat_level = this.selectedKeys.length
      } else {
        this.addCateForm.cat_pid = 0
        this.addCateForm.cat_level = 0
      }
    },
    // 添加分类按钮
    addCate() {
      this.$refs.addCateFormRef.validate(async valid => {
        if (!valid) return
        const { date: res } = await this.$http.post('categories', this.addCateForm)
        /* if (res.meta.status !== 201) {
          return this.$message.error('添加分类数据失败！')
        } */
        console.log(res)
        this.$message.success('添加分类数据成功！')
        this.getCateList()
        this.addCateDialogVisible = false
      })
    },
    // 监听对话框的关闭事件
    addCateDialogClosed() {
      this.$refs.addCateFormRef.resetFields()
      this.selectedKeys = []
      this.addCateForm.cat_pid = 0
      this.addCateForm.cat_level = 0
    }
  }

}
</script>

<style lang="less" scoped>
.TreeTable{
  margin-top: 15px;
}
.el-cascader{
  width: 100%;
}
</style>
