<template>
  <div class="selfAdvertising">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="单图广告" name="first">
        <el-row :gutter="20">
          <el-col :span="24" >
            <el-row :gutter="20">
              <el-col :span="16" >
                <div class="">
                  <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="广告展示内容(5-30字)"
                    v-model="textarea">
                  </el-input>
                </div>
              </el-col>
              <el-col :span="8" >
                <div class="uploadImg">
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" >
            <div class="adUrl">
              <h3><i class="el-icon-circle-check"></i>广告连接网址</h3>
              <el-input placeholder="请输入内容" v-model="input3">
                <template slot="prepend">Http://</template>
              </el-input>
            </div>
            <div class="selectIndustry">
              <h3><i class="el-icon-circle-check"></i>请选择行业</h3>
              <el-select v-model="value" placeholder="网络服务">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="电商平台">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="uploadQualification">
              <h3><i class="el-icon-circle-check"></i>请选择行业</h3>
              <div class="uploadQualificationCon">
                <p class="instructions">查看需要上传的资质 <a href="javascript:;">点击查看</a></p>
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
                  class="upload-demo"
                  ref="upload"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  :auto-upload="false">
                  <el-button slot="trigger" size="small" type="primary">增加附件</el-button>
                  <span slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过1M</span>
                </el-upload>
              </div>
              
            </div>
          </el-col>
        </el-row> 
        <el-row :gutter="20" type="flex" justify="space-around" class="submit-wrapper">
          <el-col :span="12" class="submit">
            <el-button  type="primary" class="submitBtn">提交</el-button>
          </el-col>
          <el-col :span="12" class="cancel">
            <el-button  type="primary" plain="true" class="cancelBtn">取消</el-button>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="三图广告" name="second">
        <el-row :gutter="20">
          <el-col :span="24" >
            <div class="">
              <el-input
                type="textarea"
                :rows="3"
                placeholder="广告展示内容(5-30字)"
                v-model="textarea">
              </el-input>
            </div>
          </el-col>
        </el-row>
        <div class="uploadImg2">
          <span>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </span>
          <span>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </span>
          <span>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </span>
        </div>
        <el-row :gutter="20">
          <el-col :span="24" >
            <div class="adUrl">
              <h3><i class="el-icon-circle-check"></i>广告连接网址</h3>
              <el-input placeholder="请输入内容" v-model="input3">
                <template slot="prepend">Http://</template>
              </el-input>
            </div>
            <div class="selectIndustry">
              <h3><i class="el-icon-circle-check"></i>请选择行业</h3>
              <el-select v-model="value" placeholder="网络服务">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="电商平台">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="uploadQualification">
              <h3><i class="el-icon-circle-check"></i>请选择行业</h3>
              <div class="uploadQualificationCon">
                <p class="instructions">查看需要上传的资质 <a href="javascript:;">点击查看</a></p>
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
                  class="upload-demo"
                  ref="upload"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  :auto-upload="false">
                  <el-button slot="trigger" size="small" type="primary">增加附件</el-button>
                  <span slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过1M</span>
                </el-upload>
              </div>
              
            </div>
          </el-col>
        </el-row> 
        <el-row :gutter="20" type="flex" justify="space-around" class="submit-wrapper">
          <el-col :span="12" class="submit">
            <el-button  type="primary" class="submitBtn">提交</el-button>
          </el-col>
          <el-col :span="12" class="cancel">
            <el-button  type="primary" plain="true" class="cancelBtn">取消</el-button>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        activeName: 'first',
        imageUrl: '',
        input3: '',
        // 下拉选择器
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
        value: '',
        // 增加附件
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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
      // 增加附件
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" >
  .selfAdvertising {
    .el-tabs__item {
      font-size: 20px;
    }
    .el-tabs__item.is-active {
      color: #ca2e2f;
    }
    .el-tabs__active-bar {
      background-color: #ca2e2f;
    }
    .uploadImg {
      text-align: right;
    }
    .uploadImg2 {
      margin-top: 10px;
      &>span {
        display: inline-block;
      }
    }
    .avatar-uploader .el-upload {
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      background-color: #d9d9d9;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #20a0ff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 150px;
      height: 105px;
      line-height: 105px;
      text-align: center;
    }
    .avatar {
      width: 150px;
      height: 105px;
      display: block;
    }
    .upload-demo {
      margin-top: 20px;

      .el-upload__tip {
        margin-left: 20px;
        font-size: 16px;
      }
    }

    .uploadQualificationCon {
      padding-left: 20px;
      .instructions {
        font-size: 20px;
        line-height: 40px;
        a {
          font-size: 16px;
          color: #60a9e1;
        }
      }
    }
    .submit-wrapper {
      .submit,.cancel {
        text-align: center;
      }
      .submitBtn,.cancelBtn {
        padding: 10px 40px;
      }
    }
    .adUrl, .selectIndustry, .uploadQualification {
      h3 {
        line-height: 40px;
        i {
          padding: 0 5px;
          color: #ca2e2f;
        }
      }
    }
  }
  
</style>