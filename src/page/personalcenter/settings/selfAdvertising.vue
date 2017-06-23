<template>
  <div class="selfAdvertising">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="单图广告" name="first">
        <component :is="currentview_one" @changeCurrentviewOne="getCurrentview_one"></component>
      </el-tab-pane>
      <el-tab-pane label="三图广告" name="second">
        <component :is="currentview_three" @changeCurrentviewThree="getCurrentview_three"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
  import oneSubmitBefore from '../../../components/onePicture/oneSubmitBefore'
  import oneSubmitAfter from '../../../components/onePicture/oneSubmitAfter'
  import threeSubmitBefore from '../../../components/threePicture/threeSubmitBefore'
  import threeSubmitAfter from '../../../components/threePicture/threeSubmitAfter'
  export default {
    components: {
      oneSubmitBefore,
      oneSubmitAfter,
      threeSubmitBefore,
      threeSubmitAfter
    },
    data() {
      return {
        currentview_one: 'oneSubmitBefore',
        currentview_three: 'threeSubmitBefore',
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
      // 获取当前视图
      getCurrentview_one(view) {
        this.currentview_one = view
      },
      getCurrentview_three(view) {
        this.currentview_three = view
      },
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
      margin-top: 20px;
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