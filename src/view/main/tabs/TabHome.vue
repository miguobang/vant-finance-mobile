<template>
  <div>
    <div style="position: relative">
      <!--头部轮播-->
      <van-swipe :autoplay="5000" indicator-color="red">
        <van-swipe-item v-for="(item, index) in swipeImages" :key="index">
          <van-image class="swipe-img" :src="item.img" @click="swipeImageClick(item)" fit="fill"></van-image>
        </van-swipe-item>
      </van-swipe>
      <div class="msg-con" @click="onMessageClick">
        <van-image src="static/img/home/icon_message_back.png" class="msg-image"></van-image>
        <div class="msg-text">3</div>
      </div>
    </div>
    <!--新手专享-->
    <div class="fresher-all">
      <div class="fresher-back align-center"
           :style="{'background-image':'url(static/img/home/fresher_ticket_back.png)'}">
        <div class="fresher-top">
          <div class="fresher-left">新手专享</div>
          <div class="fresher-right">2个活动奖励</div>
        </div>
        <div class="fresh-month">
          <div class="month-line"></div>
          <div class="month-txt light-txt">一个月期限</div>
          <div class="month-line"></div>
        </div>
        <div class="red-txt"><span class="rate-big">14</span>%+0.5%</div>
        <!--二等分区域-->
        <van-row class="num-con">
          <van-col span="12">
            <div><span class="money-big">25.50</span>万元</div>
            <div class="ins-txt light-txt">剩余金额</div>
          </van-col>
          <van-col span="12" class="right-con">
            <div><span class="money-big">12</span>万元</div>
            <div class="ins-txt light-txt">起投金额</div>
          </van-col>
        </van-row>
        <van-button type="danger" round class="buy-btn">立即抢购</van-button>
      </div>
    </div>
    <!--中部应用入口-->
    <van-row class="mid-app">
      <van-col span="12" v-for="(it, idx) in middleApps" :key="idx" class="mid-item click-box">
        <img :src="'static/img/home/'+it.icon" class="line2-icon"/>
        <div>
          <div class="mid-title">{{it.title}}</div>
          <div class="mid-text light-txt">{{it.text}}</div>
        </div>
      </van-col>
    </van-row>
    <!--我的账户-->
    <van-row class="money-all">
      <van-col span="12">
        <div class="light-txt">累计投资</div>
        <div class="red-txt">567,875,565.59</div>
      </van-col>
      <van-col span="12">
        <div class="light-txt">累计赚取</div>
        <div class="red-txt">67,875,565.59</div>
      </van-col>
    </van-row>
    <!--底部说明-->
    <van-row class="bot-app">
      <van-col span="12" v-for="(it, idx) in bottomApps" :key="idx" class="bot-item">
        <img :src="'static/img/home/'+it.icon" class="line4-icon"/>
        <div class="bot-text">
          <div>{{it.title}}</div>
          <div class="light-txt bot-small">{{it.text}}</div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: "tab-home",
    data() {
      return {
        swipeImages: [
          {img: 'static/img/banner/banner1.png', link: ''},
          {img: 'static/img/banner/banner2.jpg', link: ''},
          {img: 'static/img/banner/banner3.jpg', link: ''},
          {img: 'static/img/banner/banner4.jpg', link: ''},
        ],
        middleApps: [
          {icon: 'line2_icon1.png', title: '推荐有礼', 'text': '红包送不停'},
          {icon: 'line2_icon2.png', title: '每日签到', 'text': '积分等你加'},
          {icon: 'line2_icon3.png', title: '安全保障', 'text': '贴心小管家'},
          {icon: 'line2_icon4.png', title: '融金数据', 'text': '投资好帮手'},
        ],
        bottomApps: [
          {icon: 'line4_icon1.png', title: '互联网金融协会', 'text': '会长级别单位'},
          {icon: 'line4_icon2.png', title: '5000万融资保障', 'text': '保护您的资产安全'},
          {icon: 'line4_icon3.png', title: '国家AAA级企业', 'text': '贴心小管家'},
          {icon: 'line4_icon4.png', title: '银行风险控制', 'text': '第三方资金托管'},
        ],
      };
    },
    methods: {
      onMessageClick() {
        this._routePush('MessagePage');
      },
      swipeImageClick(item) {
      }
    }
  }
</script>

<style scoped lang="scss">
  .msg-con {
    position: absolute;
    top: 20px;
    right: 20px;
    .msg-image {
      width: 36px;
      height: 36px;
    }
    .msg-text {
      position: absolute;
      top: -2px;
      right: 4px;
      box-sizing: border-box;
      min-width: 18px;
      padding: 1px 5px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #f44;
      border-radius: 30px;
      transform: translateX(50%);
      transform-origin: 100%;
    }
  }

  .money-all {
    background-color: white;
    margin-top: 10px;
    text-align: center;
    padding: 20px 0;
  }

  .bot-app {
    margin-top: 10px;
    margin-bottom: 20px;
    .bot-item {
      display: flex;
      padding: 6px 10px;
      align-items: center;
      background-color: white;
      border: 1px solid #f7f7f7;
      .bot-text {
        font-size: 12px;
        .bot-small {
          margin-top: 2px;
        }
      }
      .line4-icon {
        width: 40px;
        height: 40px;
        margin: 6px;
      }
    }
  }

  .mid-app {
    .mid-item {
      display: flex;
      align-items: center;
      border: 1px solid #f7f7f7;
      padding: 10px;
      .line2-icon {
        width: 60px;
        height: 60px;
      }
      .mid-title {
        font-size: 14px;
      }
      .mid-text {
        margin-top: 2px;
        font-size: 12px;
      }
    }
  }

  .num-con {
    margin: 12px 0;
    .money-big {
      font-size: 20px;
    }
    .ins-txt {
      font-size: 12px;
      margin-top: 6px;
    }
    .right-con {
      border-left: 1px solid #dddddd;
    }
  }

  .fresher-all {
    padding: 10px;
    .fresher-back {
      background-size: 100% 100%;
      padding: 10px 16px 16px 16px;
      .rate-big {
        font-size: 30px;
      }
      .fresher-top {
        display: flex;
        justify-content: space-between;
        color: #FE7846;
        .fresher-right {
          font-size: 14px;
          border-radius: 20px;
          padding: 1px 6px;
          border: 1px solid #FE7846;
        }
      }
      .fresh-month {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 10px;
        .month-txt {
          margin: 0 20px;
        }
        .month-line {
          width: 24%;
          height: 1px;
          background-color: #aaaaaa;
        }
      }
      .buy-btn {
        width: 70%;
        font-size: 16px;
        height: 36px;
        line-height: 30px;
      }
    }
  }

  .swipe-img {
    width: 100%;
    height: 50vw;
  }
</style>
