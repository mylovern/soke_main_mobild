<template>
  <div class="most_wrapper padding">
    <div class="header">
      <div  @click="getback()"><img src="../assets/images/return-icon.png" alt="" /></div>
      <div>交易记录</div>
      <div></div>
    </div>
    <div class="container">
      <div class="trade_block">
        <div class="trade_title">
          <div>买入 <span>SOKE-MAIN(20X)</span></div>
          <div>已成交</div>
        </div>
        <div class="info_main">
          <div class="info_list">
            <div>委托价格</div>
            <div>2000.00</div>
          </div>

          <div class="info_list">
            <div>委托数量</div>
            <div>2手</div>
          </div>

          <div class="info_list">
            <div>成交数量</div>
            <div>2手</div>
          </div>

          <div class="info_list">
            <div>成交价值(SOKE)</div>
            <div>100.00</div>
          </div>

          <div class="info_list">
            <div>手续费(SOKE)</div>
            <div>-100.00</div>
          </div>

          <div class="info_list">
            <div>成交时间</div>
            <div>10-10 10:10:10</div>
          </div>
        </div>
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
  },
};
</script>

<style lang="less" scoped>
.trade_block {
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
  border-radius: 6px;
  .trade_title {
    padding: 40px 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); /*no*/
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    & > div:nth-child(1) {
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #008555;
      span {
        color: #000000;
      }
    }
    & > div:nth-child(2) {
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
    }
  }
  .info_main {
    padding: 0 30px 50px;
    & > div:not(:last-child) {
      margin-bottom: 40px;
    }
    .info_list {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div:nth-child(1) {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.7);
      }
      & > div:nth-child(2) {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #000000;
      }
    }
  }
}
</style>
