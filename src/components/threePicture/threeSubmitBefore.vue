<template>
  <div class="threeSubmitBefore">
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
        <el-button  type="primary" class="submitBtn" @click="submitAfter">提交</el-button>
      </el-col>
      <el-col :span="12" class="cancel">
        <el-button  type="primary" plain="true" class="cancelBtn">取消</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        afterview_three: 'threeSubmitAfter',
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
      // 切换到提交后
      submitAfter() {
        this.$emit('changeCurrentviewThree',this.afterview_three);
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

</style>