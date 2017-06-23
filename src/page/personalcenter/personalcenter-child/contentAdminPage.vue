<template>
  <div class="contentAdminPage">
    <el-tabs v-model="activeName" @tab-click="handleClick">
       <el-tab-pane label="已发表" name="first">
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
          </el-row> 
          <div class="article-con">
            <div class="article-item">
             <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
             <el-row :gutter="20">
               <el-col :span="18" :offset="0">
                 <ul class="item-data">
                   <li class="stateDate">
                     <span class="state">已发表</span>
                     <span class="date">2017-04-14 11:25</span>
                   </li>
                   <li class="readCommentLike">
                     <span>阅读: <em>1020</em></span>
                     <span>评论: <em>1020</em></span>
                     <span>收藏: <em>1020</em></span>
                   </li>
                   <li class="alterDelete">
                     <a href="javascript:;">修改</a>
                     <a href="javascript:;">撤回</a>
                     <a href="javascript:;">删除</a>
                     <a href="javascript:;">置顶</a>
                   </li>
                 </ul>
               </el-col>
               <el-col :span="6" :offset="0">
                <router-link to="/contentAdminDetails">
                  <img src="http://placeholder.cn/150x100" alt="">
                </router-link> 
               </el-col>
             </el-row>
            </div>
            <div class="article-item">
              <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
              <el-row :gutter="20">
                <el-col :span="18" :offset="0">
                  <ul class="item-data">
                    <li class="stateDate">
                      <span class="state">已发表</span>
                      <span class="date">2017-04-14 11:25</span>
                    </li>
                    <li class="readCommentLike">
                      <span>阅读: <em>1020</em></span>
                      <span>评论: <em>1020</em></span>
                      <span>收藏: <em>1020</em></span>
                    </li>
                    <li class="alterDelete">
                      <a href="javascript:;">修改</a>
                      <a href="javascript:;">撤回</a>
                      <a href="javascript:;">删除</a>
                      <a href="javascript:;">置顶</a>
                    </li>
                  </ul>
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
                  <ul class="item-data">
                    <li class="stateDate">
                      <span class="state">已发表</span>
                      <span class="date">2017-04-14 11:25</span>
                    </li>
                    <li class="readCommentLike">
                      <span>阅读: <em>1020</em></span>
                      <span>评论: <em>1020</em></span>
                      <span>收藏: <em>1020</em></span>
                    </li>
                    <li class="alterDelete">
                      <a href="javascript:;">修改</a>
                      <a href="javascript:;">撤回</a>
                      <a href="javascript:;">删除</a>
                      <a href="javascript:;">置顶</a>
                    </li>
                  </ul>
                </el-col>
                <el-col :span="6" :offset="0">
                  <img src="http://placeholder.cn/150x100" alt="">
                </el-col>
              </el-row>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="待审核" name="second">
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
          </el-row> 
          <div class="article-con">
            <div class="article-item">
             <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
             <el-row :gutter="20">
               <el-col :span="18" :offset="0">
                 <ul class="item-data">
                   <li class="stateDate">
                     <span class="state">已发表</span>
                     <span class="date">2017-04-14 11:25</span>
                   </li>
                   <li class="readCommentLike">
                     <span>阅读: <em>1020</em></span>
                     <span>评论: <em>1020</em></span>
                     <span>收藏: <em>1020</em></span>
                   </li>
                   <li class="alterDelete">
                     <a href="javascript:;">修改</a>
                     <a href="javascript:;">撤回</a>
                     <a href="javascript:;">删除</a>
                     <a href="javascript:;">置顶</a>
                   </li>
                 </ul>
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
                  <ul class="item-data">
                    <li class="stateDate">
                      <span class="state">已发表</span>
                      <span class="date">2017-04-14 11:25</span>
                    </li>
                    <li class="readCommentLike">
                      <span>阅读: <em>1020</em></span>
                      <span>评论: <em>1020</em></span>
                      <span>收藏: <em>1020</em></span>
                    </li>
                    <li class="alterDelete">
                      <a href="javascript:;">修改</a>
                      <a href="javascript:;">撤回</a>
                      <a href="javascript:;">删除</a>
                      <a href="javascript:;">置顶</a>
                    </li>
                  </ul>
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
                  <ul class="item-data">
                    <li class="stateDate">
                      <span class="state">已发表</span>
                      <span class="date">2017-04-14 11:25</span>
                    </li>
                    <li class="readCommentLike">
                      <span>阅读: <em>1020</em></span>
                      <span>评论: <em>1020</em></span>
                      <span>收藏: <em>1020</em></span>
                    </li>
                    <li class="alterDelete">
                      <a href="javascript:;">修改</a>
                      <a href="javascript:;">撤回</a>
                      <a href="javascript:;">删除</a>
                      <a href="javascript:;">置顶</a>
                    </li>
                  </ul>
                </el-col>
                <el-col :span="6" :offset="0">
                  <img src="http://placeholder.cn/150x100" alt="">
                </el-col>
              </el-row>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="待发表" name="third">
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
          </el-row> 
          <div class="article-con">
            <div class="article-item">
             <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
             <el-row :gutter="20">
               <el-col :span="18" :offset="0">
                 <ul class="item-data">
                   <li class="stateDate">
                     <span class="state">已发表</span>
                     <span class="date">2017-04-14 11:25</span>
                   </li>
                   <li class="readCommentLike">
                     <span>阅读: <em>1020</em></span>
                     <span>评论: <em>1020</em></span>
                     <span>收藏: <em>1020</em></span>
                   </li>
                   <li class="alterDelete">
                     <a href="javascript:;">修改</a>
                     <a href="javascript:;">撤回</a>
                     <a href="javascript:;">删除</a>
                     <a href="javascript:;">置顶</a>
                   </li>
                 </ul>
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
                  <ul class="item-data">
                    <li class="stateDate">
                      <span class="state">已发表</span>
                      <span class="date">2017-04-14 11:25</span>
                    </li>
                    <li class="readCommentLike">
                      <span>阅读: <em>1020</em></span>
                      <span>评论: <em>1020</em></span>
                      <span>收藏: <em>1020</em></span>
                    </li>
                    <li class="alterDelete">
                      <a href="javascript:;">修改</a>
                      <a href="javascript:;">撤回</a>
                      <a href="javascript:;">删除</a>
                      <a href="javascript:;">置顶</a>
                    </li>
                  </ul>
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
                  <ul class="item-data">
                    <li class="stateDate">
                      <span class="state">已发表</span>
                      <span class="date">2017-04-14 11:25</span>
                    </li>
                    <li class="readCommentLike">
                      <span>阅读: <em>1020</em></span>
                      <span>评论: <em>1020</em></span>
                      <span>收藏: <em>1020</em></span>
                    </li>
                    <li class="alterDelete">
                      <a href="javascript:;">修改</a>
                      <a href="javascript:;">撤回</a>
                      <a href="javascript:;">删除</a>
                      <a href="javascript:;">置顶</a>
                    </li>
                  </ul>
                </el-col>
                <el-col :span="6" :offset="0">
                  <img src="http://placeholder.cn/150x100" alt="">
                </el-col>
              </el-row>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已撤回" name="fourth">
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
          </el-row> 
          <div class="article-con">
            <div class="article-item">
             <p class="title">互联网的病态愈演愈烈，我们需要革命！是你吗？同志们在那美丽的啊实打实的</p>
             <el-row :gutter="20">
               <el-col :span="18" :offset="0">
                 <ul class="item-data">
                   <li class="stateDate">
                     <span class="state">已发表</span>
                     <span class="date">2017-04-14 11:25</span>
                   </li>
                   <li class="readCommentLike">
                     <span>阅读: <em>1020</em></span>
                     <span>评论: <em>1020</em></span>
                     <span>收藏: <em>1020</em></span>
                   </li>
                   <li class="alterDelete">
                     <a href="javascript:;">修改</a>
                     <a href="javascript:;">撤回</a>
                     <a href="javascript:;">删除</a>
                     <a href="javascript:;">置顶</a>
                   </li>
                 </ul>
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
                  <ul class="item-data">
                    <li class="stateDate">
                      <span class="state">已发表</span>
                      <span class="date">2017-04-14 11:25</span>
                    </li>
                    <li class="readCommentLike">
                      <span>阅读: <em>1020</em></span>
                      <span>评论: <em>1020</em></span>
                      <span>收藏: <em>1020</em></span>
                    </li>
                    <li class="alterDelete">
                      <a href="javascript:;">修改</a>
                      <a href="javascript:;">撤回</a>
                      <a href="javascript:;">删除</a>
                      <a href="javascript:;">置顶</a>
                    </li>
                  </ul>
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
                  <ul class="item-data">
                    <li class="stateDate">
                      <span class="state">已发表</span>
                      <span class="date">2017-04-14 11:25</span>
                    </li>
                    <li class="readCommentLike">
                      <span>阅读: <em>1020</em></span>
                      <span>评论: <em>1020</em></span>
                      <span>收藏: <em>1020</em></span>
                    </li>
                    <li class="alterDelete">
                      <a href="javascript:;">修改</a>
                      <a href="javascript:;">撤回</a>
                      <a href="javascript:;">删除</a>
                      <a href="javascript:;">置顶</a>
                    </li>
                  </ul>
                </el-col>
                <el-col :span="6" :offset="0">
                  <img src="http://placeholder.cn/150x100" alt="">
                </el-col>
              </el-row>
            </div>
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
<style lang="scss" rel="stylesheet/scss" scoped>
  .contentAdminPage {
    .el-tabs__nav {
      float: right;
    }
    .article-con {
      margin-top: 46px;
      .article-item {
        margin-top: 20px;
        border-bottom: 1px solid #ccc;
        .title {
          width: 100%;
          font-size: 24px;
          color: #333;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .item-data {
          line-height: 35px;
          .stateDate {
            .state {
              font-weight: bold;
              color: #ca2e2f;
            }
            .date {
              color: #d9d9d9;
            }
          }
          .readCommentLike {
            color: #d9d9d9;
            span {
              margin-left: 20px;
            }
            span:first-child {
              margin-left: 0;
            }
          }
          .alterDelete {
            a {
              font-size: 20px;
              color: #347af9;
              margin-left: 20px;
            }
            a:first-child {
              margin-left: 0;
            }
            
          }
        }
       
      }
    }
    
  }
</style>
<style lang="scss" rel="stylesheet/scss">
  .contentAdminPage {
    .el-tabs__nav {
      float: right;

    }
    .el-tabs__item.is-active {
        color: #ca2e2f;
    }
    .el-tabs__active-bar {
      background-color: #ca2e2f;
    }
  }
  
</style>

