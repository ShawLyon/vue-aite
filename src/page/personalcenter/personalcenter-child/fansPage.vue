<template>
  <div class="fansPage">
      <h2 class="ProfileTitle">概况</h2>
    <div class="numTable">
      <div class="numTable-title">
        <span class="filterTime">
          昨日数据
        </span>
      </div>
      <div class="numTable-con">
        <div class="articleNum">
          <span class="value">15</span>
          <span class="key">新增粉丝</span>
        </div>
        <div class="readNum">
          <span class="value">15</span>
          <span class="key">取消关注</span>
        </div>
        <div class="likeNum">
          <span class="value">15</span>
          <span class="key">累积粉丝</span>
        </div>
      </div>
    </div>
    <div class="numStatistic">
      <h2 class="numStatistic-title">数据详情</h2>
      <div class="numTable">
        <div class="numTable-title">
          <div class="filterTime">
            <span>7天</span>
            <span>14天</span>
            <span>30天</span>
          </div>
          <div class="filterDate">
            <span>2017-04-20~2017-04-20</span>
          </div>
        </div>
      </div>
      <div class="numStatistic-table" id="charts">
        <div id="WorldMap" :style="{width: '800px', height: '500px'}"></div>
      </div>
    </div>
    <div class="exportExcel">
      <a href="javascript:;">导出Excel</a>
    </div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="时间"
          header-align="center"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="added"
          label="新增粉丝"
          header-align="center"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="cancel"
          label="取消关注"
          header-align="center"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="accumulation"
          label="累计粉丝"
          header-align="center"
          align="center"
          >
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      第<span>1</span> / <span>1</span>页
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import echarts from 'echarts'
  export default {
    data() {
      return {
        tableData: [{
          date: '2017-06-20',
          added: '123',
          cancel: '123',
          accumulation: '123'
        }, {
          date: '2017-06-20',
          added: '123',
          cancel: '123',
          accumulation: '123'
        }, {
          date: '2017-06-20',
          added: '123',
          cancel: '123',
          accumulation: '123'
        }, {
          date: '2017-06-20',
          added: '123',
          cancel: '123',
          accumulation: '123'
        }]
      };
    },
    mounted() {
      var worldMapContainer = document.getElementById('WorldMap');
      var chartsContainer = document.getElementById('charts');
      const myChart = echarts.init(worldMapContainer);
      //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
      var resizeWorldMapContainer = function () {
        worldMapContainer.style.width = chartsContainer.clientWidth+'px';
        worldMapContainer.style.height = chartsContainer.clientHeight+'px';
    };
      //设置容器高宽
      resizeWorldMapContainer();

        /* 变化数据
        var yy = [];
        var xx = [];
        var zz = [];
       
      <c:forEach items="${list}" var="obj" varStatus="status">
       yy[${status.index}] = '${obj.fdSumMoney}';
       xx[${status.index}] = '${obj.fdTotalMoney}';
       zz[${status.index}] = '${obj.fdPureMoney}';

      </c:forEach>*/

     // 指定图表的配置项和数据
      var option = {
        color: ['blue', 'green', 'red'],
        title: {
         // text: '2017年投资收益图'
      },
        tooltip: {},
        grid: {
          left: '1%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
        legend: {
          data: ['新增粉丝'],
          height: worldMapContainer.style.height,
          width: worldMapContainer.style.width
      },
        xAxis: {
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
       },
        yAxis: {
          type: 'value',
         // name: '金额(万)'
       },
        series: [{
          name: '新增粉丝',
          type: 'line',
          data:[11, 11, 15, 13, 12, 13, 10]
       
        }
      /*  {
         name: '总收益',
         type: 'line',
         data:[1, -2, 2, 5, 3, 2, 0,3,7]
       }, {
         name: '纯收益',
         type: 'line',
         data:[1, -2, 2, 5, 3, 2, 0,3,4,5,6]
       }*/]
      };
     // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      //用于使chart自适应高度和宽度
      window.onresize = function () {
         //重置容器高宽
        resizeWorldMapContainer();
        myChart.resize();
      };

  /*  数据接口代码
     
     var options = myChart.getOption();  
     options.series[0].data=yy;  
     options.series[1].data=xx;
     options.series[2].data=zz;
     myChart.setOption(options); */
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .fansPage {
    .ProfileTitle {
      padding-bottom: 10px;
      font-size: 20px;
      color: #ca2e2f;
      border-bottom: 1px solid #ccc;
    }
    .numTable {
      margin-top: 30px;
      border: 1px solid #dcdcdc;
      .numTable-title {
        padding: 10px 16px;
        background: #eee;
        border-bottom: 1px solid #dcdcdc;
        .filterTime {
          font-size: 16px;
          color: #a8a8a8;
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
          border-left: 1px solid #dcdcdc;
          border-right: 1px solid #dcdcdc;
        }
         .key {
          font-size: 20px;
          margin-top: 20px;
        }
        .value {
          font-size: 26px;
        }
      }
    }
    .numStatistic {
      .numStatistic-title {
        padding: 30px 0;
        color: #999;
      }
      .numTable {
        border-bottom: none;
        margin-top: 0;
      }
      .numTable-title {
        overflow: hidden;
        line-height: 20px;
        padding: 10px;
        background: #eee;
        border-bottom: none;
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
    .numStatistic-table {
      border: 1px solid #dcdcdc;
    }

    .exportExcel {
      float: right;
      margin-top: 36px;
      line-height: 30px;
    }
    .pagination {
      text-align: center;
      margin-top: 16px;
    }
  }
</style>