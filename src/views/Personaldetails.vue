<template>
  <div class="most_wrapper">
    <div class="header">
      <div @click="getback()"><img src="../assets/images/return-icon.png" alt="" /></div>
      <div>个人明细</div>
      <div></div>
    </div>
    <div class="wrapper">
      <div class="person_header">
        <div>
          <div @click="changetable(0)" :class="{ active: changeshow == 0 }">挖矿产出</div>
        </div>
        <div>
          <div @click="changetable(1)" :class="{ active: changeshow == 1 }">做市收益</div>
        </div>
        <div>
          <div @click="changetable(2)" :class="{ active: changeshow == 2 }">做市亏损</div>
        </div>
        <div>
          <div @click="changetable(3)" :class="{ active: changeshow == 3 }">基金收益</div>
        </div>
      </div>
      <div class="main_wrapper">
        <div class="table_list">
          <div>+123456.00</div>
          <div>2021/01/01 12:00:00</div>
        </div>

        <div class="table_list">
          <div>+123456.00</div>
          <div>2021/01/01 12:00:00</div>
        </div>

        <div class="table_list">
          <div>+123456.00</div>
          <div>2021/01/01 12:00:00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeshow: 0,
    };
  },
  methods: {
    changetable(n) {
      this.changeshow = n;
    },
    getback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  padding: 0 30px;
  background: #f6f5fa;
  .person_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #dddce1; /*no */
    height: 66px;
    border-radius: 6px;
    margin-bottom: 20px;
    & > div {
      width: 172.5px;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        width: 171.5px;
        border-right: 1px solid rgba(0, 0, 0, 0.1); /*no */
        text-align: center;
        font-size: 20px; /*px */
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.7);
      }
    }
    & > div:nth-child(4) {
      div {
        border-right: none;
      }
    }
  }
  .table_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68px;
    background: #ffffff;
    box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no */
    border-radius: 6px;
    padding: 0 30px;
    margin-bottom: 20px;
    & > div:nth-child(1) {
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #008555;
    }
    & > div:nth-child(2) {
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #000000;
    }
  }
}
.active {
  position: absolute;
  left: -1px; /*no */
  right: -1px; /*no */
  top: -1px; /*no */
  bottom: -1px; /*no */
  background: #935ff3;
  border-radius: 6px;
  color: #fff !important ;
  line-height: 66px;
}
</style>
