<template>
  <div class="publishPage">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="发表文章" name="first">
          <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm" label-position="left">
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
                  <p>所有封面图片均为上传的图片</p>
                </el-tab-pane>
                <el-tab-pane label="三图模式(仅在wifi下显示)" name="third">
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog v-model="dialogVisible" size="tiny">
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
                </el-tab-pane>
              </el-tabs>
            </el-form-item>
            <el-form-item label="设置" prop="set">
              <el-radio class="radio" v-model="radio" label="1">自营广告</el-radio>
              <el-radio class="radio" v-model="radio" label="2">平台广告</el-radio>
            </el-form-item>
            <el-form-item label="分类" prop="set">
              <el-select v-model="value" placeholder="请选择" size="small">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="textarea" label-width="0">
              <el-input placeholder="标题(5-30字)">
              </el-input>
              <el-input
                type="textarea"
                :rows="10"
                placeholder="请输入内容"
                v-model="textarea">
              </el-input>
            </el-form-item>
            
            <el-form-item>
              <el-button type="primary" @click="submitForm('numberValidateForm')">发表</el-button>
              <el-button @click="resetForm('numberValidateForm')">存草稿</el-button>
              <el-button @click="resetForm('numberValidateForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="发表视频" name="second">
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="视频URL">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="视频标题">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="视频封面">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('numberValidateForm')">发表</el-button>
              <el-button @click="resetForm('numberValidateForm')">存草稿</el-button>
              <el-button @click="resetForm('numberValidateForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="发表图集" name="third">
          <el-row :gutter="20">
            <el-col :span="12" :offset="6" style="text-align: center">
                <img src="../../../images/tuji.png" height="144" width="169" alt="">
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" :offset="6" style="text-align: center">
              <el-button @click="uploadImg">上传图片</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24" style="text-align: center">
              <div class="imgGroupTxt">
                <p>图集功能使用须知</p>
                <p>1、图集支持绝大部分格式，图集支持绝大部分格式图集支持绝大部分格式</p>
                <p>2、图集支持绝大部分格式，图集支持绝大部分格式图集支持绝大部分格式图集支持绝大部分格式，图集支持绝大部分格式图集支持绝大部分格式</p>
                <p>3、图集支持绝大部分格式，图集支持绝大部分格式图集支持绝大部分格式图集支持绝大部分格式，图集支持绝大部分格式图集支持绝大部分格式</p>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="发文规范" name=""></el-tab-pane>
      </el-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        activeName: 'first',
        activeName2: 'first',
        numberValidateForm: {
          age: ''
        },
        radio: '1',
        // select
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '新闻',
        // 单图模式
        imageUrl: '',
        // 三图模式
        dialogImageUrl: '',
        dialogVisible: false,
        // 输入框
        textarea: '',
        // 发表视频
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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
      },
      // 单图模式
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
      // 多图模式
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" >
  .publishPage {
    .el-tabs__item {
      font-size: 20px;
      color: #999;
    }
    .el-tabs__item.is-active {
      color: #ca2e2f;
    }
    .el-tabs__active-bar {
      background-color: #ca2e2f;
    }
    .el-form-item__content {
      .el-tabs__item {
        font-size: 16px;
        color: #999;
      }
      .el-tabs__item.is-active {
        color: #ca2e2f;
      }
    }
    .el-form-item__label {
      font-size: 20px;
    }
    // 设置--自营广告
    .el-radio__label {
      font-size: 16px;
      color: #999;
    }
    // 分类
    .el-select {
      width: 20%;
    }
    /* 单图模式 */
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #20a0ff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .imgGroupTxt {
      padding: 20px;
      background: #ccc;
      border: 1px solid #000;
    }
  }
  
</style>