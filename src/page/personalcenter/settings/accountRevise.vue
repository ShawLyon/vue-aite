<template>
  <div class="accountRevise">
    <div class="title">
      <h2 class="title-h2">账号修改</h2>
      <div class="title-footer">
        <span class="left"><i class="el-icon-warning"></i>账号信息7天只能修改一次</span>
        <span class="right"><i class="el-icon-time"></i>上次修改时间: <b>2017-03-02 10:20</b></span>
      </div>
    </div>
    <div class="content">
      <el-row class="item">
        <el-col :span="6" class="key"><i class="el-icon-circle-check"></i>艾特号名称</el-col>
        <el-col :span="16" class="value">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <p class="prompt">2-10个字，请勿使用包含特殊符号或明显营销推广意图的名称</p>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="6" class="key"><i class="el-icon-circle-check"></i>艾特号介绍</el-col>
        <el-col :span="16" class="value">
          <el-input v-model="input" placeholder="请输入内容" type="textarea" rows="4"></el-input>
          <p class="prompt">描述请在120字以内，要求内容完成通顺，无特殊符号</p>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="6" class="key"><i class="el-icon-circle-check"></i>艾特号头像</el-col>
        <el-col :span="16" class="value">
          <img src="http://placeholder.cn/100x100" alt="">
          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false">
            <el-button slot="trigger" size="small">选取文件</el-button>
            <div slot="tip" class="el-upload__tip prompt" >要求清晰、健康、代表品牌形象，请勿添加二维码</div>
          </el-upload>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="6" class="key"><i class="el-icon-circle-check"></i>领域</el-col>
        <el-col :span="16" class="value">
          <span>娱乐圈</span>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="6" class="key"><i class="el-icon-circle-check"></i>所在地</el-col>
        <el-col :span="16" class="value">
          <el-select v-model="value" placeholder="请选择" style="width: 30%;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value" placeholder="请选择" style="width: 30%;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        input: '',
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
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
        value: '广东'
      }
    },
    methods: {
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
<style lang="scss" rel="stylesheet/scss" scoped>
  .accountRevise {
    .title-h2 {
      border-bottom: 1px solid #ccc;
      line-height: 30px;
      font-size: 20px;
      color: #ca2e2f;
    }
    .title-footer {
      overflow: hidden;
      padding: 10px;
      color: #bfbfbf;

      i {
          color: #f29087;
          margin-right: 10px;
        }
      .left {
        float: left;
      }
      .right {
        float: right;
      }
    }
    .content {
      .item {
        margin-top: 26px;
        .key {
          font-size: 20px;
        }
        .value {
          color: #999;
        }
        i {
            color: #f29087;
            margin-right: 10px;
          }
        .prompt {
          font-size: 14px;
          color: #999;
        }
      }
      .upload-demo {
        display: inline-block;
      }
      .submit-wrapper {
        margin-top: 70px;
        .submit,.cancel {
          text-align: center;
        }
        .submitBtn,.cancelBtn {
          padding: 10px 40px;
        }
      }
    }
  }
</style>