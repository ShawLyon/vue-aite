<template>
  <div class="incomeProfile">
    <div class="header">
      <h2 class="title">收益概况</h2>
      <span type="text" @click="dialogTableVisible = true" class="rule">规则</span>
      <el-dialog title="收益规则:" :visible.sync="dialogTableVisible" >
        <!-- <h2>收益规则:</h2> -->
        <el-table :data="gridData"  border="true">
          <el-table-column property="num1"></el-table-column>
          <el-table-column property="num2"></el-table-column>
          <el-table-column property="num3"></el-table-column>
          <el-table-column property="num4"></el-table-column>
          <el-table-column property="num5"></el-table-column>
        </el-table>
        <p class="ruleDesc">啊开始就打算几点 啊实打实大苏打是;了都卡死;肯定;索拉卡的;拉萨扩大;卢卡斯;了都卡死;罗迪克;索拉卡的;卢萨卡;了点撒</p>
        <p class="footnote">以上规则具体解析权归本平台所有</p>
      </el-dialog>
    </div>
    <div class="numTable">
      <div class="numTable-title">
        <div class="filterTime">
          昨日数据
        </div>
      </div>
      <div class="numTable-con">
        <div class="articleNum">
          <span>艾特广告</span>
          <span class="numValue">15</span>
          <span>本月: <b>24.12</b></span>
        </div>
      </div>
    </div>
    <div class="dateTable">
      <div class="filterTime">
        <span>7天</span>
        <span>14天</span>
        <span>30天</span>
      </div>
      <div class="filterDate">
        <span>2017-04-20~2017-04-20</span>
      </div>
    </div>
    
    <el-table
      class="table"
      :data="tableData"
      style="width: 100%"
      >
      <el-table-column
        prop="date"
        label="时间"
        header-align="center"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="title"
        label="文章标题"
        header-align="center"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="flow"
        label="应用外浏览量"
        header-align="center"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="income"
        label="收益"
        header-align="center"
        align="center"
        >
      </el-table-column>
    </el-table>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          title: '大学生创业',
          flow: '500',
          income: '20'
        }, {
          date: '2016-05-04',
          title: '小学生打架',
          flow: '600',
          income: '20'
        }, {
          date: '2016-05-01',
          title: '老年人条广场舞',
          flow: '900',
          income: '20'
        }, {
          date: '2016-05-03',
          title: '少年搞基',
          flow: '200',
          income: '20'
        }],
        gridData: [{
          num1: '浏览量',
          num2: '20',
          num3: '10',
          num4: '10',
          num5: '10'
        }, {
          num1: '奖励',
          num2: '20',
          num3: '10',
          num4: '10',
          num5: '10'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
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
        formLabelWidth: '120px'
      }
    },
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .incomeProfile {
    .header {
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
      .title {
        display: inline-block;
        float: left;
        font-size: 20px;
        color: #ca2e2f;
      }
      .rule {
        display: inline-block;
        float: right;
        color: #2180d0;
      }
      .ruleDesc {
        margin-top: 30px;
      }
      .footnote {
        margin-top: 50px;
        text-align: right;
      }
    }
    .numTable {
      margin-top: 30px;
    }
    .dateTable {
      overflow: hidden;
      margin-top: 30px;
      padding-bottom: 20px;
      .filterTime {
        float: left;
        padding-right: 10px;
        border-right: 1px dashed #a8a8a8; 
        span {
          padding: 0 10px;
          font-size: 16px;
          color: #a8a8a8;
        }
      }
      .filterDate {
        font-size: 14px;
        padding-left: 20px;
        float: left;
      }
    }
  }
</style>
<style lang="scss" rel="stylesheet/scss" >
.incomeProfile {
  .header {
    .el-table__header-wrapper {
      display: none;
    }
  }
  
  .el-dialog__title {
    font-weight: normal;
  }
}
</style>