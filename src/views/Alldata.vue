<template>
  <div class="most_wrapper">
    <div class="header">
      <div @click="getback()"><img src="../assets/images/return-icon.png" alt="" /></div>
      <div>全局数据统计详情</div>
      <div></div>
    </div>
    <div class="main_wrapper">
      <div class="header_nav">
        <div @click="changeshow(0)" :class="{ active: showflag == 0 }">
          <div>SOKE矿池</div>
        </div>
        <div @click="changeshow(1)" :class="{ active: showflag == 1 }">
          <div
            :class="[
              { active0: showflag == 0 },
              { active1: showflag == 1 },
              { active2: showflag == 2 },
            ]"
          >
            SOKE做市资金池
          </div>
        </div>
        <div @click="changeshow(2)" :class="{ active: showflag == 2 }">
          <div>SOKE激励池</div>
        </div>
      </div>
      <div v-show="showflag == '0'" class="main_block">
        <div>
          <div>123456.00</div>
          <div>2021/01/01 12:00:00</div>
        </div>

        <div>
          <div>123456.00</div>
          <div>2021/01/01 12:00:00</div>
        </div>

        <div>
          <div>123456.00</div>
          <div>2021/01/01 12:00:00</div>
        </div>
      </div>
      <div v-show="showflag == '1'" class="main_block">
        <div>
          <div>1.00</div>
          <div>2021/01/01 12:00:00</div>
        </div>

        <div>
          <div>123456.00</div>
          <div>2021/01/01 12:00:00</div>
        </div>

        <div>
          <div>123456.00</div>
          <div>2021/01/01 12:00:00</div>
        </div>
      </div>
      <div v-show="showflag == '2'" class="main_block">
        <div>
          <div>12.00</div>
          <div>2021/01/01 12:00:00</div>
        </div>

        <div>
          <div>123456.00</div>
          <div>2021/01/01 12:00:00</div>
        </div>

        <div>
          <div>123456.00</div>
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
      showflag: 0,
    };
  },
  methods: {
    changeshow(n) {
      this.showflag = n;
    },
    getback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.main_wrapper {
  padding: 0 30px;
  .header_nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    & > div {
      width: 230px;
      border: 1px solid #dddce1; /*no*/
      height: 68px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > div {
        width: 100%;
        text-align: center;
      }
    }
    & > div:nth-child(2) > div {
      border-left: 1px solid rgba(0, 0, 0, 0.1); /*no*/
      border-right: 1px solid rgba(0, 0, 0, 0.1); /*no*/
    }
    & > div:nth-child(1) {
      border-right: none;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    & > div:nth-child(2) {
      border-right: none;
      border-left: none;
    }
    & > div:nth-child(3) {
      border-left: none;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
  .main_block {
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 30px;
      background: #ffffff;
      box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
      border-radius: 6px;
      margin-bottom: 20px;
      & > div {
        font-size: 24px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
      }
    }
  }
}
.active {
  width: 228px;
  height: 66px;
  background: #935ff3;
  border-radius: 6px;
  line-height: 68px;
  color: #ffffff !important;
  border: 1px solid #935ff3;
}
.active0 {
  border-left: none !important;
}
.active1 {
  border-left: none !important;
  border-right: none !important;
}
.active2 {
  border-right: none !important;
}
</style>
