<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="C计划详情" fixed :z-index="10"></van-nav-bar>
    <div class="nav-con-16">
      <!--头部信息-->
      <div class="main-con">
        <div class="van-hairline--bottom prod-name">
          <span class="name-ico">C</span>中小企业-E车贷ECO JKI45002 1654241
        </div>
        <div class="align-center rate-con">
          <div class="red-txt"><span class="big-rate">4.98</span>%</div>
          <div class="rate-tit">预期年化收益</div>
          <div class="period-txt">期限12个月</div>
        </div>
        <div>
          <div class="pro-per">投资进度<span class="red-txt">64.5%</span></div>
          <van-progress percentage="64.5" color="#ff6611" class="prod-progress" :show-pivot="false">
          </van-progress>
          <div class="pro-amount">
            <div>项目总额180万</div>
            <div>剩余可投<span class="red-txt">75万</span></div>
          </div>
        </div>
      </div>
      <!--中部信息-->
      <div class="top-mar-16">
      </div>

      <!--底部按钮-->
      <van-button type="danger" class="bottom-btn">立即抢购</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "product-detail",
  }
</script>

<style scoped lang="scss">
  .bottom-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-radius: 0;
  }

  .period-txt {
    font-size: 14px;
    margin-top: 10px;
    color: #ff6611;
    display: inline-block;
    padding: 1px 8px;
    border: 1px solid #ff6611;
    border-radius: 20px;
  }

  .rate-con {
    padding: 20px 0;
    .rate-tit {
      color: #999999;
      font-size: 14px;
      margin-top: 8px;
    }
    .big-rate {
      font-size: 34px;
    }
  }

  .pro-per {
    margin: 4px 0;
    font-size: 14px;
    color: #999999;
  }

  .pro-amount {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
    font-size: 14px;
    color: #999999;
  }

  .prod-progress {
    height: 6px;
  }

  .main-con {
    background-color: white;
    padding: 10px;
    .prod-name {
      padding: 4px 0;
      font-size: 14px;
      color: #666666;
      .name-ico {
        background-color: #ff6c6c;
        height: 20px;
        padding: 0 4px;
        margin-right: 4px;
        border-radius: 2px;
        color: white;
        line-height: 20px;
      }
    }
  }
</style>
