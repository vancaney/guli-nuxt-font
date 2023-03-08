<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部课程</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">课程类别</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a title="全部" href="#">全部</a>
                </li>
                <li
                  v-for="(item, index) in subjectQueryList"
                  :key="index"
                  :class="{ active: oneIndex == index }"
                >
                  <a
                    :title="item.title"
                    href="#"
                    @click="searchOne(item.id, index)"
                    >{{ item.title }}</a
                  >
                </li>
                <!-- <li>
                  <a title="数据库" href="#">数据库</a>
                </li> -->
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="c-999 fsize14"></span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li
                  v-for="(item, index) in subSubjectList"
                  :key="index"
                  :class="{ active: twoIndex == index }"
                >
                  <a
                    :title="item.title"
                    href="#"
                    @click="searchTwo(item.id, index)"
                    >{{ item.title }}</a
                  >
                </li>
                <!-- <li>
                  <a title="职称英语" href="#">职称英语</a>
                </li> -->
              </ul>
            </dd>
          </dl>
          <div class="clear"></div>
        </section>
        <div class="js-wrap">
          <section class="fr">
            <span class="c-ccc">
              <i class="c-master f-fM">1</i>/
              <i class="c-666 f-fM">1</i>
            </span>
          </section>
          <section class="fl">
            <ol class="js-tap clearfix">
              <!-- <li>
                <a title="关注度" href="#">关注度</a>
              </li>
              <li>
                <a title="最新" href="#">最新</a>
              </li>
              <li class="current bg-orange">
                <a title="价格" href="#"
                  >价格&nbsp;
                  <span>↓</span>
                </a>
              </li> -->

              <li :class="{ 'current bg-orange': buyCountSort != false }">
                <a
                  title="销量"
                  href="javascript:void(0);"
                  @click="searchBuyCount()"
                  >销量
                  <span :class="{ hide: buyCountSort == false }">↓</span>
                </a>
              </li>
              <li :class="{ 'current bg-orange': gmtCreateSort != false }">
                <a
                  title="最新"
                  href="javascript:void(0);"
                  @click="searchGmtCreate()"
                  >最新
                  <span :class="{ hide: gmtCreateSort == false }">↓</span>
                </a>
              </li>
              <li :class="{ 'current bg-orange': priceSort != false }">
                <a
                  title="价格"
                  href="javascript:void(0);"
                  @click="searchPrice()"
                  >价格&nbsp;
                  <span :class="{ hide: priceSort == false }">↓</span>
                </a>
              </li>
            </ol>
          </section>
        </div>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="data.total === 0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam"
              >没有相关数据，小编正在努力整理中...</span
            >
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list" v-if="data.total > 0">
            <ul class="of" id="bna">
              <li v-for="course in data.items" :key="course.id">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img
                      :src="course.cover"
                      class="img-responsive"
                      :alt="course.title"
                      style="width: 360px; height: 185px"
                    />
                    <div class="cc-mask">
                      <a
                        :href="'/course/' + course.id"
                        title="开始学习"
                        class="comm-btn c-btn-1"
                        >开始学习</a
                      >
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a
                      :href="'/course/' + course.id"
                      :title="course.title"
                      class="course-title fsize18 c-333"
                      >{{ course.title }}</a
                    >
                  </h3>
                  <section class="mt10 hLh20 of">
                    <span class="fr jgTag bg-green" v-if="course.price === 0">
                      <i class="c-fff fsize12 f-fA">免费</i>
                    </span>
                    <span class="fr jgTag bg-green" v-else>
                      <i class="c-fff fsize12 f-fA">{{ course.price }}</i>
                    </span>

                    <span class="fl jgAttr c-ccc f-fA">
                      <i class="c-999 f-fA">{{ course.buyCount }}人学习</i>
                      |
                      <i class="c-999 f-fA">{{ course.viewCount }}人评论</i>
                    </span>
                  </section>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <a
              :class="{ undisable: !data.hasPrevious }"
              href="#"
              title="首页"
              @click.prevent="gotoPage(1)"
              >首</a
            >
            <a
              :class="{ undisable: !data.hasPrevious }"
              href="#"
              title="前一页"
              @click.prevent="gotoPage(data.current - 1)"
              >&lt;</a
            >
            <a
              v-for="page in data.pages"
              :key="page"
              :class="{
                current: data.current == page,
                undisable: data.current == page,
              }"
              :title="'第' + page + '页'"
              href="#"
              @click.prevent="gotoPage(page)"
              >{{ page }}</a
            >
            <a
              :class="{ undisable: !data.hasNext }"
              href="#"
              title="后一页"
              @click.prevent="gotoPage(data.current + 1)"
              >&gt;</a
            >
            <a
              :class="{ undisable: !data.hasNext }"
              href="#"
              title="末页"
              @click.prevent="gotoPage(data.pages)"
              >末</a
            >
            <div class="clear"></div>
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>

<script>
import teacherApi from "@/api/index";
export default {
  data() {
    return {
      pageInfo: {
        currentPage: 1,
        pageSize: 8,
        queryString: "",
      },
      subjectQueryList: [],
      subSubjectList: [],
      children: [],
      courseQueryResult: [],
      courseQuery: {
        // buyCountSort: false,
        // gmtCreateSort: false,
        // priceSort: false,
      },
      searchObj: {},
      oneIndex: -1,
      twoIndex: -1,
      buyCountSort: false,
      gmtCreateSort: false,
      priceSort: false,
    };
  },
  asyncData({ params, error }) {
    let courseQueryResult = [];
    let pageInfo = {
      currentPage: 1,
      pageSize: 8,
      queryString: "",
    };
    let courseQuery = {};
    courseQueryResult.push(pageInfo);
    courseQueryResult.push(courseQuery);
    return teacherApi.getCourseListFont(courseQueryResult).then((res) => {
      //console.log(res.data.data.map);
      return { data: res.data.data.map };
    });
  },
  methods: {
    getAllSubject() {
      teacherApi.getSubjectOneLevelAndTwoLevel().then((res) => {
        this.subjectQueryList = res.data.data.subjectQueryList;
        //console.log(res.data.data);
      });
    },
    //4 点击某个一级分类，查询对应二级分类
    searchOne(subjectParentId, index) {
      this.buyCountSort = false;
      this.gmtCreateSort = false;
      this.priceSort = false;

      this.courseQuery.buyCountSort = this.buyCountSort;
      this.courseQuery.gmtCreateSort = this.gmtCreateSort;
      this.courseQuery.priceSort = this.priceSort;

      //console.log(subjectParentId);
      //console.log(index);
      //把传递index值赋值给oneIndex,为了active样式生效
      this.oneIndex = index;

      this.twoIndex = -1;
      this.courseQuery.subjectId = "";
      //this.subjectQueryList = [];

      //把一级分类点击id值，赋值给searchObj
      this.courseQuery.subjectParentId = subjectParentId;
      //点击某个一级分类进行条件查询
      this.gotoPage(1);
      console.log(this.subjectQueryList);
      //拿着点击一级分类id 和 所有一级分类id进行比较，
      //如果id相同，从一级分类里面获取对应的二级分类
      for (let i = 0; i < this.subjectQueryList.length; i++) {
        //获取每个一级分类
        var oneSubject = this.subjectQueryList[i];
        //比较id是否相同
        if (subjectParentId == oneSubject.id) {
          //从一级分类里面获取对应的二级分类
          this.subSubjectList = oneSubject.children;
          //console.log(this.subSubjectList);
        }
      }
    },
    //5 点击某个二级分类实现查询
    searchTwo(subjectId, index) {
      this.buyCountSort = false;
      this.gmtCreateSort = false;
      this.priceSort = false;

      this.courseQuery.buyCountSort = this.buyCountSort;
      this.courseQuery.gmtCreateSort = this.gmtCreateSort;
      this.courseQuery.priceSort = this.priceSort;

      //把index赋值,为了样式生效
      this.twoIndex = index;
      //把二级分类点击id值，赋值给searchObj
      this.courseQuery.subjectId = subjectId;
      //点击某个二级分类进行条件查询
      this.gotoPage(1);
    },
    gotoPage(page) {
      this.pageInfo.currentPage = page;
      this.courseQueryResult.push(this.pageInfo);
      this.courseQueryResult.push(this.courseQuery);
      teacherApi.getCourseListFont(this.courseQueryResult).then((res) => {
        this.data = res.data.data.map;
        //console.log(res.data.data);
      });
    },
    //
    searchGmtCreate() {
      this.buyCountSort = false;
      this.gmtCreateSort = true;
      this.priceSort = false;

      this.courseQuery.buyCountSort = this.buyCountSort;
      this.courseQuery.gmtCreateSort = this.gmtCreateSort;
      this.courseQuery.priceSort = this.priceSort;
      this.gotoPage(1);
    },
    //
    searchBuyCount() {
      this.buyCountSort = true;
      this.gmtCreateSort = false;
      this.priceSort = false;

      this.courseQuery.buyCountSort = this.buyCountSort;
      this.courseQuery.gmtCreateSort = this.gmtCreateSort;
      this.courseQuery.priceSort = this.priceSort;
      this.gotoPage(1);
    },
    //
    searchPrice() {
      this.buyCountSort = false;
      this.gmtCreateSort = false;
      this.priceSort = true;

      this.courseQuery.buyCountSort = this.buyCountSort;
      this.courseQuery.gmtCreateSort = this.gmtCreateSort;
      this.courseQuery.priceSort = this.priceSort;
      this.gotoPage(1);
    },
  },
  created() {
    //课程第一次查询
    //一级分类显示
    //this.getAllSubject();
  },
  mounted: function () {
    this.getAllSubject();
  },
};
</script>

<style scoped>
.active {
  background: #bdbdbd;
}
.hide {
  display: none;
}
.show {
  display: block;
}
</style>