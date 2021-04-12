<template>
  <div class="most_wrapper">
    <div class="header">
      <div @click="getback()"><img src="../assets/images/return-icon.png" alt="" /></div>
      <div>赎回</div>
      <div></div>
    </div>
    <div class="container">
      <div class="title">主流指数追踪基金</div>
      <div class="table">
        <div class="table_head">
          <div>赎回基金</div>
          <div>手续费(SOKE):<span>2000.00</span></div>
        </div>
        <div class="num_list">
          <div>10000</div>
          <div>份</div>
        </div>
        <div class="table_bottom">
          <div>基金周期:<span>3月</span></div>
          <div>金额(SOKE):10000.00</div>
        </div>
      </div>
      <div class="notice">
        <div>备注:</div>
        <div>SOKE定期基金赎回时会根据您的周期，计算出需要支付的手续费；计算方式：XXX</div>
      </div>
      <div class="sure_btn">确定赎回</div>
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
.title {
  font-size: 24px; /*px*/
  font-family: PingFang SC;
  font-weight: 500;
  color: #000000;
  margin-bottom: 22px;
}
.table {
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
  border-radius: 6px;
  padding: 40px 30px;
  margin-bottom: 38px;

  .table_head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 38px;
    & > div:nth-child(1) {
      font-size: 28px; /*px*/
      font-family: PingFang SC;
      font-weight: 500;
      color: #000000;
    }
    & > div:nth-child(2) {
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #737373;
      & > span {
        color: #000000;
        font-weight: bold;
      }
    }
  }
  .num_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); /*no*/
    margin-bottom: 20px;
    & > div:nth-child(1) {
      font-size: 28px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
    }
    & > div:nth-child(2) {
      font-size: 28px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #935ff3;
    }
  }
  .table_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div:nth-child(1) {
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #737373;
      & > span {
        font-weight: bold;
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
}
.notice {
  font-size: 22px; /*px*/
  font-family: PingFang SC;
  font-weight: 500;
  color: #935ff3;
  margin-bottom: 100px;
  & > div:nth-child(1) {
    margin-bottom: 20px;
  }
}
.sure_btn {
  height: 80px;
  background: #925ff3;
  border-radius: 6px;
  text-align: center;
  line-height: 80px;
  font-size: 28px; /*px*/
  font-family: PingFang SC;
  font-weight: bold;
  color: #f4effe;
}
</style>
