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
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="运营者证件照">
                <img src="http://placehold.it/100x100" alt="" class="phoneImg">
                <div class="textIfon">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList">
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb.只能上传jpg/png文件，且不超过500kb.只能上传jpg/png文件，b</div>
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                </div>
              </el-form-item>
              <el-form-item label="手机号码">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="联系邮箱">
                <el-input v-model="form.name"></el-input>
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
                <el-input v-model="form.name"></el-input>
                <p>2-10个字，请勿使用包含特殊符号或明显营销推广意图的媒体名</p>
              </el-form-item>
              <el-form-item label="账号介绍">
                 <el-input type="textarea" v-model="form.desc"></el-input>
                 <p>描述请在120字以内，要求内容完整通顺，无特殊符号</p>
              </el-form-item>
              <el-form-item label="账号头像">
                <img src="http://placehold.it/100x100" alt="" class="phoneImg">
                <div class="textIfon">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList">
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb.只能上传jpg/png文件，且不超过500kb.只能上传jpg/png文件，b</div>
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                </div>
              </el-form-item>
              <el-form-item label="领域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="科技" value="shanghai"></el-option>
                  <el-option label="人文" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="">
                <el-checkbox v-model="checked" class="check-login">同意<span>艾特头条服务协议</span></el-checkbox>
              </el-form-item>
              <el-form-item label="">
                <el-button type="primary" @click="Previous">上一步</el-button>
                <el-button type="primary" @click="submitForm('ruleForm2')" >提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  
</template>
<script type="text/ecmascript-6">
  import router from '../../../router'
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        // 照片上传
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        // 领域
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      Previous() {
        // 返回上一步
        router.push('registerChildTwo');
      },
      submitForm() {
        // 提交成功
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
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
        vertical-align: top;
        width: 60%;
        word-wrap: break-word;
        word-break: normal;
        .el-upload__tip {
          line-height: 20px;
        }
      }
    }
    .el-form-item__label,.el-form-item__content>span {
      font-size: 20px;
      color: #333;
    }
    p {
      color: #ccc;
    }
  }
</style>
