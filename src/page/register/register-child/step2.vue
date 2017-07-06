<template>
  <div class="registerChildTwo">
    <el-row type="flex" class="" justify="center">
      <el-col :span="4">
        <div class="personal">
           <h2 class="personalTitle">个人</h2>
           <p>{{active}}</p>
           <p>面向个人面向个人面向个人面向个人面向个人面向个人面向个人</p>
           <div class="apply">
             <el-button type="" class="apply-btn" @click="applyPersonal">申请入住</el-button>
           </div>
        </div>
      </el-col>
      <el-col :span="4" offset="4">
        <div class="company">
         <h2 class="companyTitle">企业</h2>
         <p>面向个人面向个人面向个人面向个人面向个人面向个人面向个人</p>
         <div class="apply">
             <el-button type="danger" class="apply-btn" @click="applyCompany">申请入住</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  import router from '../../../router'
  import { mapState } from 'vuex'
  export default {

    data() {
      return {
        Personal: {
          type: '1'
        },
        Company: {
          type: '2'
        }
      }
    },
    computed: {
      ...mapState([
        'z_step'
      ])
    },
    methods: {
      applyPersonal() {
        this.$store.commit('restepNext_z');
        /* 个人 */
        this.$store.commit('setType_z',this.Personal);
        router.push('childPersonal');

      },
      applyCompany() {
        this.$store.commit('restepNext_z');
        /* 公司 */
        this.$store.commit('setType_z',this.Company);
        router.push('childCompany');
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" >
  @import url('../../../style/common.scss');
  $theme-color: #ca2e2f;
  .registerChildTwo {
    .personal,.company {
      padding-top: 120px;
      background: url('../../../images/personal.png') no-repeat center 0;
      .personalTitle,.companyTitle {
        font-size: 30px;
        line-height: 50px;
        text-align: center;
      }
      .apply {
        margin-top: 20px;
        text-align: center;
        .apply-btn {
          width: 100%;
          background: $theme-color;
          color: #fff;
        }
      }
    }
    .company {
      background: url('../../../images/group.png') no-repeat center 0;
    }

  }
</style>