<template>
  <div>
    <van-nav-bar :title="$t('tab_discovery')" fixed :z-index="10"></van-nav-bar>
    <div class="nav-con">
      <van-image src="static/img/discovery/discovery_banner.jpg"></van-image>
      <div>
      </div>
      <van-row class="line2-all">
        <van-col span="12" v-for="(it, idx) in middleApps" :key="idx" class="line2-item">
          <img :src="'static/img/discovery/'+it.icon" class="line2-icon"/>
          <div>
            <div class="line2-title">{{it.title}}</div>
            <div class="line2-text light-txt">{{it.text}}</div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-discover",
    data() {
      return {
        middleApps: [
          {icon: 'discovery_app_icon4.png', title: '积分商城', 'text': '绝不让每一个积分落空'},
          {icon: 'discovery_app_icon2.png', title: '融金公益', 'text': '时间有爱，融金有益'},
          {icon: 'discovery_app_icon3.png', title: '红包广场', 'text': '福利大派送，一起来抢钱'},
          {icon: 'discovery_app_icon1.png', title: '任务大厅', 'text': 'VIP进阶之路'},
          {icon: 'discovery_app_icon5.png', title: '理财小公举', 'text': '算一算我的第一桶金'},
        ],
      };
    },
  }
</script>

<style scoped lang="scss">
  .line2-all {
    margin-bottom: 20px;
    .line2-item {
      display: flex;
      background-color: white;
      border: 1px solid #f7f7f7;
      align-items: center;
      padding: 10px;
      .line2-icon {
        width: 60px;
        height: 60px;
      }
      .line2-title {
        font-size: 14px;
      }
      .line2-text {
        font-size: 12px;
        margin-top: 2px;
      }
    }
  }
</style>
