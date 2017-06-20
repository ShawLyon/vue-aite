<template>
  <div class="articlePage">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="概况" name="first">
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
          <div class="numTable-con">
            <div class="articleNum">
              <span>15</span>
              <span>文章量</span>
            </div>
            <div class="readNum">
              <span>15</span>
              <span>阅读量</span>
            </div>
            <div class="likeNum">
              <span>15</span>
              <span>收藏量</span>
            </div>
          </div>
        </div>
        <div class="numStatistic">
          <h2 class="numStatistic-title">数据详情</h2>
          <div class="numStatistic-table" id="charts">
            <div id="WorldMap" :style="{width: '500px', height: '500px'}"></div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="详情" name="second">
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
          <!-- <div class="numTable-con">
            <div class="articleNum">
              <span>15</span>
              <span>文章量</span>
            </div>
            <div class="readNum">
              <span>15</span>
              <span>阅读量</span>
            </div>
            <div class="likeNum">
              <span>15</span>
              <span>收藏量</span>
            </div>
          </div> -->
        </div>
        <el-row>
          <el-col :span="24">
            <div class="exportExcel">
              <a href="javascript:;">导出Excel</a>
            </div>
          </el-col>
        </el-row>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="title"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="browse"
            label="浏览量"
            width="80"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="comment"
            label="评论量"
            width="80"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="collect"
            label="收藏量"
            width="80"
            header-align="center"
            align="center">
          </el-table-column>
        </el-table>
        <el-row>
          <el-col :span="24">
            <div class="pagination">
              第<span>1</span> / <span>1</span>页
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
  import echarts from 'echarts'
  export default {
    data() {
      return {
        activeName: 'first',
        tableData: [{
          title: '中国由习近平总书记发起一代一路',
          browse: '123',
          comment: '123',
          collect: '123'
        }, {
          title: '中国由习近平总书记发起一代一路',
          browse: '123',
          comment: '123',
          collect: '123'
        }, {
          title: '中国由习近平总书记发起一代一路',
          browse: '123',
          comment: '123',
          collect: '123'
        }, {
          title: '中国由习近平总书记发起一代一路',
          browse: '123',
          comment: '123',
          collect: '123'
        }]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
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
          data: ['总投资', '总收益', '纯收益'],
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
          name: '总投资',
          type: 'line',
          data:[11, 11, 15, 13, 12, 13, 10]
        
        }, {
          name: '总收益',
          type: 'line',
          data:[1, -2, 2, 5, 3, 2, 0,3,7]
        }, {
          name: '纯收益',
          type: 'line',
          data:[1, -2, 2, 5, 3, 2, 0,3,4,5,6]
        }]
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
  .articlePage {
    .numTable {
      border: 1px solid #000;
      .numTable-title {
        overflow: hidden;
        padding: 6px;
        background: #ccc;
        .filterTime {
          float: left;
          padding-right: 10px;
          border-right: 1px dashed #000; 
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
    .exportExcel {
      float: right;
    }
    .pagination {
      text-align: center;
    }
  }
</style>