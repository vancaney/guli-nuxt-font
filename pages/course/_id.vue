<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程详情 开始 -->
    <section class="container">
      <section class="path-wrap txtOf hLh30">
        <a href="#" title class="c-999 fsize14">首页</a>
        <a href="#" title class="c-999 fsize14">课程列表</a>
        <span class="c-333 fsize14">{{ courseWebVo.title }}</span>
      </section>
      <div>
        <article class="c-v-pic-wrap" style="height: 357px">
          <section class="p-h-video-box" id="videoPlay">
            <img
              :src="courseWebVo.cover"
              :alt="courseWebVo.title"
              class="dis c-v-pic"
              style="width: 640px; height: 357px"
            />
          </section>
        </article>
        <aside class="c-attr-wrap">
          <section class="ml20 mr15">
            <h2 class="hLh30 txtOf mt15">
              <span class="c-fff fsize24"> {{ courseWebVo.title }} </span>
            </h2>
            <section class="c-attr-jg">
              <b
                class="c-yellow"
                style="font-size: 24px"
                v-if="courseWebVo.price === 0"
                >免费试听</b
              >

              <b class="c-yellow" style="font-size: 24px" v-else
                >价格：{{ courseWebVo.price }} 元</b
              >
            </section>
            <section class="c-attr-mt c-attr-undis">
              <span class="c-fff fsize14"
                >主讲： {{ courseWebVo.teacherName }} &nbsp;&nbsp;&nbsp;</span
              >
            </section>
            <section class="c-attr-mt of">
              <span class="ml10 vam">
                <em class="icon18 scIcon"></em>
                <a class="c-fff vam" title="收藏" href="#">收藏</a>
              </span>
            </section>

            <section
              class="c-attr-mt"
              v-if="courseWebVo.price === 0 || isBuy === true"
            >
              <a
                @click="createOrders()"
                title="立即观看"
                class="comm-btn c-btn-3"
                >立即观看</a
              >
            </section>

            <section class="c-attr-mt" v-else>
              <a
                @click="createOrders()"
                title="立即购买"
                class="comm-btn c-btn-3"
                >立即购买</a
              >
            </section>
          </section>
        </aside>
        <aside class="thr-attr-box">
          <ol class="thr-attr-ol clearfix">
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">购买数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseWebVo.buyCount }}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">课时数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseWebVo.lessonNum }}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">浏览数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseWebVo.viewCount }}</h6>
              </aside>
            </li>
          </ol>
        </aside>
        <div class="clear"></div>
      </div>
      <!-- /课程封面介绍 -->
      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                  <a name="c-i" class="current" title="课程详情">课程详情</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <div>
                  <h6 class="c-i-content c-infor-title">
                    <span>课程介绍</span>
                  </h6>
                  <div class="course-txt-body-wrap">
                    <section class="course-txt-body">
                      <p>
                        {{ courseWebVo.description }}
                      </p>
                    </section>
                  </div>
                </div>
                <!-- /课程介绍 -->
                <div class="mt50">
                  <h6 class="c-g-content c-infor-title">
                    <span>课程大纲</span>
                  </h6>
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul>
                          <!-- 文件目录 -->
                          <li
                            class="lh-menu-stair"
                            v-for="chapter in eduChapterList"
                            :key="chapter.id"
                          >
                            <a
                              href="javascript: void(0)"
                              title="第一章"
                              class="current-1"
                            >
                              <em class="lh-menu-i-1 icon18 mr10"></em
                              >{{ chapter.title }}
                            </a>
                            <ol class="lh-menu-ol" style="display: block">
                              <li
                                class="lh-menu-second ml30"
                                v-for="eduVideo in chapter.children"
                                :key="eduVideo.id"
                              >
                                <a
                                  :href="'/play/' + eduVideo.videoSourceId"
                                  :title="eduVideo.title"
                                  target="_blank"
                                >
                                  <!-- <span class="fr" v-if="eduVideo.isFree === 0">
                                    <i class="free-icon vam mr10" ></i>
                                  </span> -->

                                  <span class="fr" v-if="eduVideo.isFree === 0">
                                    <i class="free-icon vam mr10"> 免费试听</i>
                                  </span>

                                  <span class="fr" v-else>
                                    <!-- <i class="free-icon vam mr10" ></i> -->
                                  </span>

                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em
                                  >{{ eduVideo.title }}
                                </a>
                              </li>
                            </ol>
                          </li>
                        </ul>
                      </menu>
                    </div>
                  </section>
                </div>
                <!-- /课程大纲 -->
              </article>
            </div>
          </section>
        </article>
        <aside class="fl col-3">
          <div class="i-box">
            <div>
              <section class="c-infor-tabTitle c-tab-title">
                <a title href="javascript:void(0)">主讲讲师</a>
              </section>
              <section class="stud-act-list">
                <ul style="height: auto">
                  <li>
                    <div class="u-face">
                      <a href="#">
                        <img
                          :src="courseWebVo.avatar"
                          width="50"
                          height="50"
                          alt
                        />
                      </a>
                    </div>
                    <section class="hLh30 txtOf">
                      <a class="c-333 fsize16 fl" href="#">{{
                        courseWebVo.teacherName
                      }}</a>
                    </section>
                    <section class="hLh20 txtOf">
                      <span class="c-999">{{ courseWebVo.career }}</span>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
        <div class="clear"></div>
      </div>
    </section>
    <!-- /课程详情 结束 -->
  </div>
</template>

<script>
import indexApi from "@/api/index";
import orderApi from "@/api/order";

export default {
  data() {
    return {
      isBuy: false,
    };
  },
  methods: {
    createOrders() {
      orderApi
        .saveOrder(this.courseId)
        .then((res) => {
          if (res.data.code === 20001) {
            this.$message({
              type: "error",
              message: res.data.message,
            });
          } else this.$router.push({ path: "/order/" + res.data.data.orderNo });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkCourseStatus() {
      orderApi.getCourseStatus(this.courseId).then((res) => {
        this.isBuy = res.data.data.isBuy;
        console.log(this.isBuy);
      });
    },
  },
  asyncData({ params, error }) {
    return indexApi
      .getCourseInfoFont(params.id)
      .then((response) => {
        //console.log(response.data.data.eduChapterList);
        return {
          courseWebVo: response.data.data.courseWebVo,
          eduChapterList: response.data.data.eduChapterList,
          courseId: params.id,
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted: function () {
    this.checkCourseStatus();
  },
};
</script>
