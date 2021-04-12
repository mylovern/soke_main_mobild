<template>
  <div class="most_wrapper">
    <div class="header">
      <div @click="getback()"><img src="../assets/images/return-icon.png" alt="" /></div>
      <div>购买</div>
      <div></div>
    </div>
    <div class="container">
      <div class="title">主流指数追踪基金</div>
      <div class="buy_table">
        <div class="buyheader">
          <div>总量：10000份，已售1000份</div>
          <div>70%</div>
        </div>
        <div class="percent">
          <el-progress :percentage="70" color="#935FF3"></el-progress>
        </div>
        <div class="buy_list">
          <div>单价(SOKE/份)</div>
          <div class="num">2000.00</div>
        </div>
        <div class="buy_list">
          <div>买入</div>
          <div class="display">
            <div>
              <el-input-number
                size="large"
                v-model="num"
                @change="handleChange"
                :min="1"
                :max="10"
                label="描述文字"
              ></el-input-number>
            </div>
            <div class="num margin-left">份</div>
          </div>
        </div>
        <div class="buy_list">
          <div>收益率</div>
          <div class="display">
            <div>10%</div>
          </div>
        </div>
        <div class="buy_list">
          <div>周期</div>
          <div class="display month">
            <div @click="changemonth(3)" :class="{ active: month == 3 }">3月</div>
            <div @click="changemonth(6)" :class="{ active: month == 6 }">6月</div>
            <div @click="changemonth(12)" :class="{ active: month == 12 }">12月</div>
            <div @click="changemonth(24)" :class="{ active: month == 24 }">24月</div>
          </div>
        </div>
        <div class="buy_block_white"></div>
        <div class="pay">
          <span>支付</span>
          <span>20000.00 </span>
          <span>SOKE</span>
        </div>
      </div>
      <div class="notice">
        <div class="notice_title">备注:</div>
        <div class="notice_des">
          1.SOKE定期基金提供可选择不同周期产品，不同周期产品相应的收益也会不同；周期越长返利越高
        </div>
        <div class="notice_des">
          2.每期产品份数售罄后开始计算周期，到相应周期后会陆续返利到账户
        </div>
      </div>
      <div class="buy_sure">确定购买</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      month: 3,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    changemonth(m) {
      this.month = m;
    },
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
.buy_table {
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
  border-radius: 6px;
  padding: 40px 0 0;
  margin-bottom: 42px;
  .buyheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    padding: 0 30px;
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
      color: #935ff3;
    }
  }
  .percent {
    margin-bottom: 40px;
    padding: 0 30px;
  }
  .buy_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding: 0 30px;
    & > div:nth-child(1) {
      font-size: 20px; /*px*/
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.7);
    }
  }
  .num {
    font-size: 28px; /*px*/
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
  }
  .margin-left {
    margin-left: 10px;
  }
  .month {
    & > div {
      padding: 14px 16px;
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
      border-radius: 6px;
      border: 1px solid #bfbfbf; /*no*/
    }
    & > div:not(:last-child) {
      margin-right: 14px;
    }
  }
  .buy_block_white {
    height: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); /*no*/
    margin-bottom: 40px;
  }
  .pay {
    text-align: right;
    padding-right: 30px;
    padding-bottom: 40px;
    & > span:nth-child(1) {
      font-size: 18px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
      margin-right: 10px;
    }
    & > span:nth-child(2) {
      font-size: 36px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #8a4096;
    }
    & > span:nth-child(3) {
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #d4d4d4;
    }
  }
}
.notice {
  font-size: 22px; /*px*/
  font-family: PingFang SC;
  font-weight: 500;
  color: #935ff3;
  margin-bottom: 80px;

  .notice_title {
    margin-bottom: 20px;
  }
  .notice_des {
    margin-bottom: 20px;
  }
}
.buy_sure {
  height: 80px;
  background: #925ff3;
  border-radius: 6px;
  font-size: 28px; /*px*/
  font-family: PingFang SC;
  font-weight: bold;
  color: #f4effe;
  line-height: 80px;
  text-align: center;
}
.display {
  display: flex;
  align-items: center;
}
.active {
  background: #935ff3;
  color: #ffffff !important;
  border: 1px solid #935ff3 !important; /*no*/
}
</style>
