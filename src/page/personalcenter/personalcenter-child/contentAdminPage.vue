<template>
  <div class="contentAdminPage">
    <el-tabs v-model="activeName" @tab-click="handleClick">
       <el-tab-pane label="已发表" name="first">
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
          </el-row> 
          <div class="article-item">
           <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
           <el-row :gutter="20">
             <el-col :span="18" :offset="0">
              <p>
                <span>已发表</span>
                <span>2017-04-14</span>
                <span>11:25</span>
              </p>
               <p>
                 <span>阅读: <em>1020</em></span>
                 <span>评论: <em>1020</em></span>
                 <span>收藏: <em>1020</em></span>
               </p>
               <p>
                 <a href="">修改</a>
                 <a href="">撤回</a>
                 <a href="">删除</a>
                 <a href="">置顶</a>
               </p>
             </el-col>
             <el-col :span="6" :offset="0">
               <img src="http://placeholder.cn/150x100" alt="">
             </el-col>
           </el-row>
          </div>
          <div class="article-item">
            <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
            <el-row :gutter="20">
              <el-col :span="18" :offset="0">
               <p>
                 <span>已发表</span>
                 <span>2017-04-14</span>
                 <span>11:25</span>
               </p>
                <p>
                  <span>阅读: <em>1020</em></span>
                  <span>评论: <em>1020</em></span>
                  <span>收藏: <em>1020</em></span>
                </p>
                <p>
                  <a href="">修改</a>
                  <a href="">撤回</a>
                  <a href="">删除</a>
                  <a href="">置顶</a>
                </p>
              </el-col>
              <el-col :span="6" :offset="0">
                <img src="http://placeholder.cn/150x100" alt="">
              </el-col>
            </el-row>
          </div>
          <div class="article-item">
            <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
            <el-row :gutter="20">
              <el-col :span="18" :offset="0">
               <p>
                 <span>已发表</span>
                 <span>2017-04-14</span>
                 <span>11:25</span>
               </p>
                <p>
                  <span>阅读: <em>1020</em></span>
                  <span>评论: <em>1020</em></span>
                  <span>收藏: <em>1020</em></span>
                </p>
                <p>
                  <a href="">修改</a>
                  <a href="">撤回</a>
                  <a href="">删除</a>
                  <a href="">置顶</a>
                </p>
              </el-col>
              <el-col :span="6" :offset="0">
                <img src="http://placeholder.cn/150x100" alt="">
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="待审核" name="second">
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
          </el-row> 
          <div class="article-item">
           <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
           <el-row :gutter="20">
             <el-col :span="18" :offset="0">
              <p>
                <span>已发表</span>
                <span>2017-04-14</span>
                <span>11:25</span>
              </p>
               <p>
                 <span>阅读: <em>1020</em></span>
                 <span>评论: <em>1020</em></span>
                 <span>收藏: <em>1020</em></span>
               </p>
               <p>
                 <a href="">修改</a>
                 <a href="">撤回</a>
                 <a href="">删除</a>
                 <a href="">置顶</a>
               </p>
             </el-col>
             <el-col :span="6" :offset="0">
               <img src="http://placeholder.cn/150x100" alt="">
             </el-col>
           </el-row>
          </div>
          <div class="article-item">
            <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
            <el-row :gutter="20">
              <el-col :span="18" :offset="0">
               <p>
                 <span>已发表</span>
                 <span>2017-04-14</span>
                 <span>11:25</span>
               </p>
                <p>
                  <span>阅读: <em>1020</em></span>
                  <span>评论: <em>1020</em></span>
                  <span>收藏: <em>1020</em></span>
                </p>
                <p>
                  <a href="">修改</a>
                  <a href="">撤回</a>
                  <a href="">删除</a>
                  <a href="">置顶</a>
                </p>
              </el-col>
              <el-col :span="6" :offset="0">
                <img src="http://placeholder.cn/150x100" alt="">
              </el-col>
            </el-row>
          </div>
          <div class="article-item">
            <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
            <el-row :gutter="20">
              <el-col :span="18" :offset="0">
               <p>
                 <span>已发表</span>
                 <span>2017-04-14</span>
                 <span>11:25</span>
               </p>
                <p>
                  <span>阅读: <em>1020</em></span>
                  <span>评论: <em>1020</em></span>
                  <span>收藏: <em>1020</em></span>
                </p>
                <p>
                  <a href="">修改</a>
                  <a href="">撤回</a>
                  <a href="">删除</a>
                  <a href="">置顶</a>
                </p>
              </el-col>
              <el-col :span="6" :offset="0">
                <img src="http://placeholder.cn/150x100" alt="">
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="待发表" name="third">
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
          </el-row> 
          <div class="article-item">
           <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
           <el-row :gutter="20">
             <el-col :span="18" :offset="0">
              <p>
                <span>待审核</span>
                <span>2017-04-14</span>
                <span>11:25</span>
              </p>
               <p>
                 <span>阅读: <em>1020</em></span>
                 <span>评论: <em>1020</em></span>
                 <span>收藏: <em>1020</em></span>
               </p>
               <p>
                 <a href="">修改</a>
                 <a href="">撤回</a>
                 <a href="">删除</a>
                 <a href="">置顶</a>
               </p>
             </el-col>
             <el-col :span="6" :offset="0">
               <img src="http://placeholder.cn/150x100" alt="">
             </el-col>
           </el-row>
          </div>
          <div class="article-item">
            <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
            <el-row :gutter="20">
              <el-col :span="18" :offset="0">
               <p>
                 <span>待发表</span>
                 <span>2017-04-14</span>
                 <span>11:25</span>
               </p>
                <p>
                  <span>阅读: <em>1020</em></span>
                  <span>评论: <em>1020</em></span>
                  <span>收藏: <em>1020</em></span>
                </p>
                <p>
                  <a href="">修改</a>
                  <a href="">撤回</a>
                  <a href="">删除</a>
                  <a href="">置顶</a>
                </p>
              </el-col>
              <el-col :span="6" :offset="0">
                <img src="http://placeholder.cn/150x100" alt="">
              </el-col>
            </el-row>
          </div>
          <div class="article-item">
            <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
            <el-row :gutter="20">
              <el-col :span="18" :offset="0">
               <p>
                 <span>已撤回</span>
                 <span>2017-04-14</span>
                 <span>11:25</span>
               </p>
                <p>
                  <span>阅读: <em>1020</em></span>
                  <span>评论: <em>1020</em></span>
                  <span>收藏: <em>1020</em></span>
                </p>
                <p>
                  <a href="">修改</a>
                  <a href="">撤回</a>
                  <a href="">删除</a>
                  <a href="">置顶</a>
                </p>
              </el-col>
              <el-col :span="6" :offset="0">
                <img src="http://placeholder.cn/150x100" alt="">
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已撤回" name="fourth">
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
          </el-row> 
          <div class="article-item">
           <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
           <el-row :gutter="20">
             <el-col :span="18" :offset="0">
              <p>
                <span>已发表</span>
                <span>2017-04-14</span>
                <span>11:25</span>
              </p>
               <p>
                 <span>阅读: <em>1020</em></span>
                 <span>评论: <em>1020</em></span>
                 <span>收藏: <em>1020</em></span>
               </p>
               <p>
                 <a href="">修改</a>
                 <a href="">撤回</a>
                 <a href="">删除</a>
                 <a href="">置顶</a>
               </p>
             </el-col>
             <el-col :span="6" :offset="0">
               <img src="http://placeholder.cn/150x100" alt="">
             </el-col>
           </el-row>
          </div>
          <div class="article-item">
            <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
            <el-row :gutter="20">
              <el-col :span="18" :offset="0">
               <p>
                 <span>已发表</span>
                 <span>2017-04-14</span>
                 <span>11:25</span>
               </p>
                <p>
                  <span>阅读: <em>1020</em></span>
                  <span>评论: <em>1020</em></span>
                  <span>收藏: <em>1020</em></span>
                </p>
                <p>
                  <a href="">修改</a>
                  <a href="">撤回</a>
                  <a href="">删除</a>
                  <a href="">置顶</a>
                </p>
              </el-col>
              <el-col :span="6" :offset="0">
                <img src="http://placeholder.cn/150x100" alt="">
              </el-col>
            </el-row>
          </div>
          <div class="article-item">
            <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
            <el-row :gutter="20">
              <el-col :span="18" :offset="0">
               <p>
                 <span>已发表</span>
                 <span>2017-04-14</span>
                 <span>11:25</span>
               </p>
                <p>
                  <span>阅读: <em>1020</em></span>
                  <span>评论: <em>1020</em></span>
                  <span>收藏: <em>1020</em></span>
                </p>
                <p>
                  <a href="">修改</a>
                  <a href="">撤回</a>
                  <a href="">删除</a>
                  <a href="">置顶</a>
                </p>
              </el-col>
              <el-col :span="6" :offset="0">
                <img src="http://placeholder.cn/150x100" alt="">
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
    </el-tabs>
    <div class="content">
      
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        activeName: 'first',
        input: ''
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" >
  .contentAdminPage {
    .el-tabs__nav {
      float: right;
    }
    .article-item {
      border-bottom: 1px solid #ccc;
      .title {
        width: 100%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>