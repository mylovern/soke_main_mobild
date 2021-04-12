<template>
  <div class="most_wrapper">
    <div class="header">
      <div @click="getback()"><img src="../assets/images/return-icon.png" alt="" /></div>
      <div>基金盈亏</div>
      <div></div>
    </div>
    <div class="wrapper">
      <div class="block">
        <div>12345678.00</div>
        <div>总盈亏(SOKE)</div>
      </div>
      <div class="data_list">
        <div>
          <div>主流指数追踪基金</div>
          <div>+123456.00</div>
        </div>
        <div>2021/01/01 12:00:00</div>
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
.wrapper {
  padding: 0 30px;
}
.block {
  height: 143px;
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  & > div:nth-child(1) {
    font-size: 36px; /*px*/
    font-family: PingFang SC;
    font-weight: bold;
    color: #935ff3;
    margin-bottom: 14px;
  }
  & > div:nth-child(2) {
    font-size: 20px; /*px*/
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
    opacity: 0.7;
  }
}
.data_list {
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15);
  border-radius: 6px;
  padding: 40px 30px;
  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    & > div:nth-child(1) {
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #000000;
    }
    & > div:nth-child(2) {
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #008555;
    }
  }
  & > div:nth-child(2) {
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #000000;
    opacity: 0.8;
    text-align: right;
  }
}
</style>
