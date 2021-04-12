<template>
  <div class="most_wrapper">
    <div class="header">
      <div @click="getback"><img src="../assets/images/return-icon.png" alt="" /></div>
      <div>指数基金</div>
      <div class="history">
        <el-dropdown @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
            <img src="../assets/images/index_images/menu.png" alt="" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">
              <span style="font-size: 14px; padding-bottom: 8px; display: inline-block"
                >记录</span
              ></el-dropdown-item
            >
            <el-dropdown-item command="b"
              ><span style="font-size: 14px">盈亏</span></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="main_wrapper">
     

      <div class="main_table">
        <div class="table_head">
          <img src="../assets/images/index_images/decline.png" alt="" />
          <div class="percent">
            <div class="percent_title">
              <div>主流指数追踪基金</div>
              <div>+10%</div>
            </div>
            <div class="percent_line">
              <el-progress :percentage="20" color="#008555"></el-progress>
            </div>
          </div>
        </div>
        <div class="btn_group">
          <div @click="changerouter('/buy')">购买</div>
          <div @click="changerouter('/redemption')">赎回</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand(e) {
      console.log(e);
      if (e == "a") {
        this.$router.push("/fundhistory");
      } else {
        this.$router.push("/profit-loss");
      }
    },
    getback() {
      this.$router.go(-1);
    },
    changerouter(p) {
      this.$router.push(p);
    },
  },
};
</script>

<style lang="less" scoped>
.history {
  img {
    width: 36px;
  }
}
.main_wrapper {
  padding: 0 30px;
}
.main_table {
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
  border-radius: 6px;
  padding: 40px 30px;
  margin-bottom: 20px;
  .table_head {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 64px;
      height: 64px;
      margin-right: 20px;
    }
    .percent {
      flex: 1;
      .percent_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        & > div:nth-child(1) {
          font-size: 24px; /*px*/
          font-family: PingFang SC;
          font-weight: 500;
          color: #000000;
        }
        & > div:nth-child(2) {
          font-size: 24px; /*px*/
          font-family: PingFang SC;
          font-weight: bold;
          color: #008555;
        }
      }
    }
  }
  .btn_group {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & > div:nth-child(1) {
      width: 100px;
      height: 54px;
      background: #925ff3;
      border-radius: 6px;
      margin-right: 22px;
      font-size: 28px; /*px */
      font-family: PingFang SC;
      font-weight: 500;
      text-align: center;
      line-height: 54px;
      color: #ffffff;
    }
    & > div:nth-child(2) {
      font-size: 28px; /*px */
      font-family: PingFang SC;
      font-weight: 500;
      color: #925ff3;
    }
  }
}
.el-progress-bar {
  padding-right: 0;
}
</style>
