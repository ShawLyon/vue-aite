<template>
  <div class="settlementCenter">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="结算中心" name="first">
        <div class="numTable">
          <div class="numTable-con">
            <div class="articleNum">
              <span>最近一笔提现</span>
              <span>15</span>
              <span>日期：<b>2017.02.02</b></span>
            </div>
            <div class="readNum">
              <span>可提现金额
                <el-tooltip class="item" effect="light" content="Top Center 提示文字" placement="top">
                  <el-button icon="information"></el-button>
                </el-tooltip>
              </span>
              <span>15<b>元</b><a href="javascript:;">提现</a></span>
              <span>总金额：<b>24.12</b></span>
            </div>
            <div class="likeNum">
              <span>累计提现金额(元)</span>
              <span>15</span>
              <span></span>
            </div>
          </div>
        </div>
        <h3 class="unitTitle">本报表内金额单位为(元)</h3>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="提现时间"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="cycle"
            label="结算周期"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="income"
            label="收益合计(含税)"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="taxDeuction"
            label="扣税"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="money"
            label="打款金额(税后)"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="status"
            label="打款状态"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="view"
            label="查看"
            header-align="center"
            align="center">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="结算设置" name="second">
        <div class="set">
          <el-row :gutter="0">
            <el-col :span="12" :offset="1">
              <div class="">
                <el-row :gutter="0" class="personInfoItem">
                  <el-col :span="8" :offset="0"><div class="">姓名</div>
                  </el-col>
                  <el-col :span="14" :offset="0"><div class="">潘燕春</div>
                  </el-col>
                </el-row>
                <el-row :gutter="0" class="personInfoItem">
                  <el-col :span="8" :offset="0"><div class="">身份证</div>
                  </el-col>
                  <el-col :span="14" :offset="0"><div class="">362422199506453222</div>
                  </el-col>
                </el-row>
                <el-row :gutter="0" class="personInfoItem">
                  <el-col :span="8" :offset="0"><div class="">银行卡号</div>
                  </el-col>
                  <el-col :span="14" :offset="0"><div class="">632221231316544655656</div>
                  </el-col>
                </el-row>
                <el-row :gutter="0" class="personInfoItem">
                  <el-col :span="8" :offset="0"><div class="">交易银行</div>
                  </el-col>
                  <el-col :span="14" :offset="0"><div class="">农业银行</div>
                  </el-col>
                </el-row>
                <el-row :gutter="0" class="personInfoItem">
                  <el-col :span="8" :offset="0"><div class="">所在地</div>
                  </el-col>
                  <el-col :span="14" :offset="0"><div class="">深圳南山</div>
                  </el-col>
                </el-row>
                <el-row :gutter="0" class="personInfoItem">
                  <el-col :span="8" :offset="0"><div class="">开户支行</div>
                  </el-col>
                  <el-col :span="14" :offset="0"><div class="">深圳南山支行</div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="2" :offset="9"><a href="javascript:;">修改</a></el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        activeName: 'first',
        tableData: [{
          date: '2017-01-01',
          cycle: '8',
          income: '15.00',
          taxDeuction: '1.05',
          money: '13.95',
          status: '已打款',
          view: '查看'
        }

        ]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .settlementCenter {
    .numTable {
      border: 1px solid #000;
      .numTable-title {
        overflow: hidden;
        padding: 6px;
        background: #ccc;
        .filterTime {
          float: left;
          padding-right: 10px;
        }
        .filterDate {
          padding-left: 20px;
          float: left;
        }
      }
      .numTable-con {
        display: flex;
        padding: 18px 0;
        .articleNum, .readNum, .likeNum {
          flex: 1;
          text-align: center;
          span {
            display: block;
          }
        }
        .readNum {
          border-left: 1px solid #000;
          border-right: 1px solid #000;
        }
      }
    }
    .unitTitle {
      text-align: right;
    }
    .set {
      padding: 20px 0;
      border: 1px solid #000;
      .personInfoItem:first-child {
        margin-top: 0;
      }
      .personInfoItem {
        margin-top: 10px;
      }
    }
  }
  
</style>
<style lang="scss" rel="stylesheet/scss" >
  .settlementCenter {
    .el-button {
      padding: 0;
      border: none;
      color: #ccc;
    }
  }
  
</style>