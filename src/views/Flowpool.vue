<template>
  <div class="most_wrapper">
    <div class="header">
      <div @click="getback()"><img src="../assets/images/return-icon.png" alt="" /></div>
      <div>流动性矿池质押</div>
      <div @click="routerchange()" class="details">收益详情</div>
    </div>
    <div class="main_wrapper">
      <div class="okt_block">
        <div class="block_title">OKT-SOKE</div>
        <div class="block_income">
          <div>当前可领收益(SOKE):<span> 100000</span></div>
          <div>领取收益</div>
        </div>
        <div class="income">
          <div>当前收益:<span>1.00OKT:12.00SOKE</span></div>
          <div>剩余(SOKE):<span> 100000</span></div>
        </div>
        <div class="btn_group">
          <div>我要质押</div>
          <div></div>
          <div>解除质押</div>
        </div>
      </div>
      <div class="soke">
        <div class="soke_title">
          <div>算力-SOKE</div>
          <div>剩余(SOKE):<span>100000</span></div>
        </div>
        <div class="now_soke">当前挖矿收益:<span>1算力:12.00SOKE</span></div>
        <div class="now_start">开始算力挖矿</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getback() {
      this.$router.go(-1);
    },
    routerchange(){
      this.$router.push('/flowdata')
    }
  },
};
</script>

<style lang="less" scoped>
.main_wrapper {
  padding: 0 30px;
  .okt_block {
    background: #ffffff;
    box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
    border-radius: 6px;
    padding: 40px 30px;
    margin-bottom: 20px;
    .block_title {
      font-size: 28px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
      margin-bottom: 40px;
    }
    .block_income {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      & > div:nth-child(1) {
        font-size: 20px; /*px */
        font-family: PingFang SC;
        font-weight: 500;
        color: #737373;
        span {
          color: #000000;
        }
      }
      & > div:nth-child(2) {
        width: 120px;
        height: 40px;
        border: 1px solid #935ff3; /*no */
        border-radius: 6px;
        font-size: 24px; /*px */
        font-family: PingFang SC;
        font-weight: bold;
        color: #935ff3;
        text-align: center;
        line-height: 40px;
      }
    }
    .income {
      padding-bottom: 34px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      & > div {
        font-size: 20px; /*px */
        font-family: PingFang SC;
        font-weight: 500;
        color: #737373;
        span {
          color: #000000;
        }
      }
    }
    .btn_group {
      display: flex;
      justify-content: center;
      align-items: center;
      & > div:nth-child(1) {
        width: 186px;
        height: 66px;
        background: #925ff3;
        border-radius: 6px;
        text-align: center;
        line-height: 66px;
        font-size: 28px; /*px */
        font-family: PingFang SC;
        font-weight: bold;
        color: #f4effe;
      }
      & > div:nth-child(2) {
        width: 2px; /*px */
        height: 26px;
        background: #925ff3;
        margin-left: 68px;
        margin-right: 102px;
      }
      & > div:nth-child(3) {
        font-size: 28px; /*px */
        font-family: PingFang SC;
        font-weight: bold;
        color: #925ff3;
      }
    }
  }
  .soke {
    height: 294px;
    background: #ffffff;
    box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no */
    border-radius: 6px;
    padding: 38px 30px 40px;
    .soke_title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 22px;
      & > div:nth-child(1) {
        font-size: 28px; /*px*/
        font-family: PingFang SC;
        font-weight: bold;
        color: #000000;
      }
      & > div:nth-child(2) {
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: #737373;
        span {
          color: #000000;
        }
      }
    }
    .now_soke {
      font-size: 20px; /*px*/
      font-family: PingFang SC;
      font-weight: 500;
      color: #737373;
      padding-bottom: 40px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1); /*no */
      margin-bottom: 40px;
      span {
        color: #000;
      }
    }
    .now_start {
      height: 66px;
      background: #925ff3;
      border-radius: 6px;
      font-size: 28px; /*px */
      font-family: PingFang SC;
      font-weight: bold;
      color: #f4effe;
      text-align: center;
      line-height: 66px;
    }
  }
}
.header {
  & > div {
    flex: 1 !important;
  }
  & > div:nth-child(1) {
    text-align: left;
  }
  & > div:nth-child(2) {
    text-align: center;
  }
  & > div:nth-child(3) {
    text-align: right;
  }
}
.details {
  font-size: 26px; /*px*/
  font-family: PingFang SC;
  font-weight: bold;
  color: #935ff3;
}
</style>
