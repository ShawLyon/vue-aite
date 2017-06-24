<template>
  <div class="publishImgsBefore">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6" style="text-align: center">
          <img src="../../images/tuji.png" height="144" width="169" alt="">
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="12" :offset="6" style="text-align: center">
        <el-button type="primary" @click="jumpUploadImg">上传图片</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="24" >
        <div class="imgGroupTxt">
          <p>图集功能使用须知:</p>
          <p>1、图集支持绝大部分格式，图集支持绝大部分格式图集支持绝大部分格式</p>
          <p>2、<strong>禁止图集支持绝大部分格式，图集支持绝大部分格</strong>式图集支持绝大部分格式图集支持绝大部分格式，图集支持绝大部分格式图集支持绝大部分格式</p>
          <p>3、图集支持绝大部分格式，图集支持绝大部分格式图集支持绝大部分格式图集支持绝大部分格式，图集支持绝大部分格式图集支持绝大部分格式</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        afterview_imgs: 'publishImgsAfter'
      }
    },
    methods: {
      jumpUploadImg() {
        this.$emit('changeCurrentviewImgs',this.afterview_imgs)
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
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" >

</style>