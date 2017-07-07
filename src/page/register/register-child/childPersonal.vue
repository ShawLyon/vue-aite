<template>
  <div class="childPersonal">
    <div class="child-item">
      <el-row type="flex" class="" justify="center">
        <el-col :span="14">
          <div class="form-title">
            <h2>主体信息登记</h2>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="registerForm">
        <el-col :span="12" :offset="6">
          <div class="form-main">
            <el-form ref="form" :model="form" label-width="200px" label-position="left">
              <el-form-item label="主体类型">
                <span>个人</span>
              </el-form-item>
              <el-form-item label="运营者姓名">
                <el-input v-model="form.name"></el-input>
                <p>请填写有效身份证件上的姓名，一经设置无法修改</p>
              </el-form-item>
              <el-form-item label="身份证号码">
                <el-input v-model="form.idCard"></el-input>
              </el-form-item>
              <el-form-item label="运营者证件照">
                <div class="textIfon">
                  <!--图片显示区-->
                  <div class="uploadImgView">
                    <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </div>
                  <!--tip 和 btn 显示区-->
                  <div class="uploadBtnView">
                    <div slot="tip" class="el-upload__tip">
                      只能上传jpg/png文件，且不超过500kb.只能上传jpg/png文件，且不超过500kb.只能上传jpg/png文件，
                    </div>
                    <!--  vue upload插件-->
                    <vue-core-image-upload class="avatar-uploader btn btn-primary" inputOfFile="fdImg_file" :extensions="png,gif" :cropBtn="{ok:'Save','cancel':'Give Up'}" :crop="false" @imageuploaded="imageuploaded_1" :data="data" :max-file-size="5242880" url="https://jsonplaceholder.typicode.com/posts/">
                    </vue-core-image-upload>
                  </div>
                </div>
  
              </el-form-item>
              <el-form-item label="手机号码">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="联系邮箱">
                <el-input v-model="form.email"></el-input>
                <p>请填写本人常用邮箱，此邮箱将用来接收重要通知邮件</p>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="child-item">
      <el-row type="flex" class="" justify="center">
        <el-col :span="14">
          <div class="form-title">
            <h2>主体信息登记</h2>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="registerForm">
        <el-col :span="12" :offset="6">
          <div class="form-main">
            <el-form ref="form" :model="form" label-width="200px" label-position="left">
              <el-form-item label="账号名称">
                <el-input v-model="form.accountName"></el-input>
                <p>2-10个字，请勿使用包含特殊符号或明显营销推广意图的媒体名</p>
              </el-form-item>
              <el-form-item label="账号介绍">
                <el-input type="textarea" v-model="form.accountDesc"></el-input>
                <p>描述请在120字以内，要求内容完整通顺，无特殊符号</p>
              </el-form-item>
              <el-form-item label="账号头像">
                <div class="textIfon">
                  <el-upload class="upload-demo" action="http://120.24.234.123/sunnet_attl/phone/imgUpload" headers="{'Access-Control-Allow-Origin':'*'}" name="fdImg_file" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                  <!--图片显示区-->
                  <div class="uploadImgView">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </div>
                  <!--tip 和 btn 显示区-->
                  <div class="uploadBtnView">
                    <div slot="tip" class="el-upload__tip">
                      只能上传jpg/png文件，且不超过500kb.只能上传jpg/png文件，且不超过500kb.只能上传jpg/png文件，
                    </div>
                    <!--  vue upload插件-->
                    <vue-core-image-upload class="avatar-uploader btn btn-primary" inputOfFile="fdImg_file"  :crop="false" @imageuploaded="imageuploadedTwo" :data="data" :max-file-size="5242880" url="http://120.24.234.123/sunnet_attl/phone/imgUpload">
                    </vue-core-image-upload>
                  </div>
                </div>
              </el-form-item>
  
              <el-form-item label="领域">
                <el-select v-model="value" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="">
                <el-checkbox v-model="checked" class="check-login">同意
                  <span>艾特头条服务协议</span>
                </el-checkbox>
              </el-form-item>
              <el-form-item label="">
                <el-button type="primary" @click="Previous">上一步</el-button>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import VueCoreImageUpload from 'vue-core-image-upload' // uploadImg
import router from '../../../router'
import { mapState } from 'vuex'


export default {
  components: {
    'vue-core-image-upload': VueCoreImageUpload
  },
  data() {
    return {
      fileList2: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      // uploadImg
      // imageUrl1: 'http://120.24.234.123/sunnet_attl/upload/app/52e08cd6-1060-4b41-89f9-effcf257dc44.jpg',
      imageUrl: '',
      // form表单 提交的值
      form: {
        name: '',
        idCard: '',
        phone: '',
        email: '',
        accountName: '',
        accountDesc: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      // 领域
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
      value: ''

    }
  },
  computed: {
    ...mapState([
      'z_phone', 'z_type', 'z_pass',
    ])
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    imageuploaded_1(res) {
      if (res.code == 1) {
        this.imageUrl1 = baseUrl + res.result;
      }
    },
    imageuploaded_2(res) {
      if (res.code == 1) {
        this.imageUrl = baseUrl + res.result;
      }
    },

    Previous() { // 返回上一步
      // step -1
      this.$store.commit('restepPre_z');
      this.$router.go(-1);
    },
    submitForm() {
      // 提交成功 
      this.$alert('提交成功', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          });
          alert(baseUrl)
          this.$http({
            method: 'post',
            url: baseUrl + 'p/registerthree',
            params: {
              username: this.z_phone,
              password: this.z_pass,
              fdType: this.z_type,
              fdCardName: this.form.name,
              fdIdentity: this.form.idCard,
              fdPhone: this.form.phone,
              fdEmail: this.form.email,
              fdUserName: this.form.accountName, // 帐号名称
              fdContent: this.form.accountDesc, // 帐号介绍
              industryid_id: this.value, // 行业

            }
          }).then(res => {
            console.log(res);
          }).canth(error => {
            console.log(error)
          })
        }
      });

    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" >
.childPersonal {
  .form-title {
    border-bottom: 1px solid #ccc;
    h2 {
      display: inline-block;
      font-size: 24px;
      color: #333;
      border-bottom: 2px solid #ca2e2f;
      padding-bottom: 16px;
    }
  }
  .registerForm {
    padding-top: 40px;
    .phoneImg {
      width: 30%;
      vertical-align: top;
    }
    .textIfon {
      display: inline-block;
      overflow: hidden;
      vertical-align: top;
      width: 100%;
      word-wrap: break-word;
      word-break: normal;
      .uploadImgView {
        float: left;
      }
      .uploadBtnView {
        float: left;
        width: 60%;
        margin-left: 10px;
        .el-upload__tip {
          display: inline-block; // width: 50%;
          line-height: 20px;
        }
      }
    }
  }
  .el-form-item__label,
  .el-form-item__content>span {
    font-size: 20px;
    color: #333;
  }
  p {
    color: #ccc;
  }
  /* 上传图片 */
  /*.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    
    position: relative;
    overflow: hidden;
  }*/
  .avatar-uploader .avatar-uploader-icon:hover {
    border-color: #20a0ff;
  }
  /*  icon  */
  .avatar-uploader-icon {
    display: inline-block;
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px dashed #d9d9d9;
  }
  .g-core-image-upload-btn {
    display: inline-block;
    text-align: center;
    width: 200px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: inline-block;
  }
}
</style>
