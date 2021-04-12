<template>
  <div class="most_wrapper">
    <div class="header">
      <div @click="getback()"><img src="../assets/images/return-icon.png" alt="" /></div>
      <div>记录</div>
      <div></div>
    </div>
    <div class="container">
      <div class="tablechoice">
        <div @click="changetable(0)">
          <div :class="{ active: show == 0 }">购买</div>
        </div>
        <div @click="changetable(1)">
          <div :class="{ active: show == 1 }">赎回</div>
        </div>
      </div>
      <div class="buy">
        <div class="buy_header">
          <div>主流指数追踪基金</div>
          <div>购买1000份</div>
        </div>
        <div class="table_data_wrapper">
          <div>
            <div>单价(SOKE/份)</div>
            <div>2000.00</div>
          </div>

          <div>
            <div>周期</div>
            <div>3月</div>
          </div>

          <div>
            <div>支付(SOKE)</div>
            <div>100000000.00</div>
          </div>

          <div>
            <div>单号</div>
            <div>GMJJ123456</div>
          </div>

          <div>
            <div>购买时间</div>
            <div>2020-10-10 10:10:10</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: 0,
    };
  },
  methods: {
    changetable(n) {
      this.show = n;
    },
    getback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.tablechoice {
  height: 68px;
  border: 1px solid #dddce1; /*no*/
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  & > div {
    flex: 1;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
      font-size: 20px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.7);
      transition: 0.3s;
    }
  }
}
.buy {
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
  border-radius: 6px;
  .buy_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 102px;
    padding: 0 28px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    & > div:nth-child(1) {
      flex: 1;
      text-align: left;
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: 500;
      color: #000000;
    }
    & > div:nth-child(2) {
      text-align: right;
      flex: 1;
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #935ff3;
    }
  }
  .table_data_wrapper {
    padding: 40px 28px;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > div:nth-child(1) {
        flex: 1;
        text-align: left;
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
      }
      & > div:nth-child(2) {
        flex: 1;
        text-align: right;
        font-size: 28px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
      }
    }
    & > div:not(:last-child) {
      margin-bottom: 36px;
    }
  }
}
.active {
  position: absolute;
  top: -1px; /*no*/
  left: -1px; /*no*/
  right: -1px; /*no*/
  bottom: -1px; /*no*/
  background: #935ff3;
  border-radius: 6px;
  color: #ffffff !important;
  text-align: center;
  line-height: 70px;
}
</style>
