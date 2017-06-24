<template>
  <div class="publishImgsAfter">
    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm" label-position="left">
      <div class="app-container calendar-list-container">
        <el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
          <el-table-column align="center" label="序号" width="65">
            <template scope="scope">
              <span>{{scope.row.id}}</span>
            </template>
          </el-table-column>

          <el-table-column width="180px" align="center" label="时间">
            <template scope="scope">
              <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
            </template>
          </el-table-column>

          <el-table-column min-width="300px" label="标题">
            <template scope="scope">
              <span>{{scope.row.title}}</span>
            </template>
          </el-table-column>

          <el-table-column width="110px" align="center" label="作者">
            <template scope="scope">
              <span>{{scope.row.author}}</span>
            </template>
          </el-table-column>

          <el-table-column width="80px" label="重要性">
            <template scope="scope">
              <wscn-icon-svg v-for="n in +scope.row.importance" icon-class="wujiaoxing" class="meta-item__icon" :key="n" />
            </template>
          </el-table-column>

          <el-table-column align="center" label="阅读数" width="95">
            <template scope="scope">
              <span>{{scope.row.pageviews}}</span>
            </template>
          </el-table-column>

          <el-table-column class-name="status-col" label="状态" width="90">
            <template scope="scope">
              <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
            </template>
          </el-table-column>

          <el-table-column align="center" label="拖拽" width="95">
            <template scope="scope">
              <wscn-icon-svg class='drag-handler' icon-class="tuozhuai" />
            </template>
          </el-table-column>
        </el-table>

        <div class='show-d'>默认顺序  &nbsp;  {{ olderList}}</div>
        <div class='show-d'>拖拽后顺序{{newList}}</div>
      </div>
      <el-form-item label="标题" prop="set">
        <el-input v-model="input" placeholder="请输入标题(5-30字)"></el-input>
      </el-form-item>
      <el-form-item
        label="封面"
        prop="age"
      >
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="自动" name="first">
          </el-tab-pane>
          <el-tab-pane label="单图模式" name="second">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p class="_Prompt">所有封面图片均为上传的图片。</p>
          </el-tab-pane>
          <el-tab-pane label="三图模式(仅在wifi下显示)" name="third">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p class="_Prompt">所有封面图片均为上传的图片。</p>
          </el-tab-pane>
        </el-tabs>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')">发表</el-button>
        <el-button @click="resetForm('numberValidateForm')">存草稿</el-button>
        <el-button @click="resetForm('numberValidateForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
  // import { fetchList } from 'api/article_table';
  import Sortable from 'sortablejs'
  export default {
    name: 'drag-table_demo',
    data() {
      return {
        input: '',
        imageUrl: '',
        // 拖拽table
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 10
        },
        sortable: null,
        olderList: [],
        newList: []
      }
    },
    // 拖拽table
    created() {
      this.getList();
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        };
        return statusMap[status]
      }
    },
    methods: {
      // 拖拽table
      getList() {
        this.listLoading = true;
        fetchList(this.listQuery).then(response => {
          this.list = response.data.items;
          this.total = response.data.total;
          this.listLoading = false;
          this.olderList = this.list.map(v => v.id);
          this.newList = this.olderList.slice();
          this.$nextTick(() => {
            this.setSort()
          })
        })
      },
      setSort() {
        const el = document.querySelectorAll('.el-table__body-wrapper > table > tbody')[0];
        this.sortable = Sortable.create(el, {
        // handle: '.drag-handler',
          onEnd: evt => {
            const tempIndex = this.newList.splice(evt.oldIndex, 1)[0];
            this.newList.splice(evt.newIndex, 0, tempIndex);
          }
        });
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" >
  .publishImgsAfter {
    /* 拖拽table */
    .drag-handler{
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    .show-d{
      margin-top: 15px;
    }
  }
  
</style>