<template>
  <div>
    <div class="main">
      <div :class="['head_menue', { 'sticky-menu': scrollstatr }]">
        <div class="left_logo">
          <img src="../assets/images/index_images/SOKE-logo.png" alt="" />
        </div>
        <div class="right_menue">
          <div class="language_chioce">
            <el-select v-model="value" placeholder="">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div @click="opennav" class="main_nav">
            <img src="../assets/images/index_images/menu.png" alt="" />
          </div>
        </div>
      </div>
      <!-- <div style="margin-bottom: 20px" class="OKT_block">
        <div class="OKT_head">
          <div class="OKT_left_title">
            <img src="../assets/images/index_images/Pledge-OKT.png" alt="" />
            当前质押收益率(OKT)
          </div>
          <div class="OKT_right_num">20%</div>
        </div>
        <div class="OKT_line">
          <el-progress :percentage="20" color="#925FF3"></el-progress>
        </div>
      </div>
      <div style="margin-bottom: 42px" class="OKT_block">
        <div class="OKT_head">
          <div class="OKT_left_title">
            <img src="../assets/images/index_images/Pledge-SOKE.png" alt="" />
            当前质押收益率(SOKE)
          </div>
          <div class="OKT_right_num">20%</div>
        </div>
        <div class="OKT_line">
          <el-progress :percentage="20" color="#925FF3"></el-progress>
        </div>
      </div> -->
      <div class="data_block">
        <div>全局数据统计</div>
        <div @click="changerouter('/alldata')">
          查看详细 <img src="../assets/images/index_images/Jump.png" alt="" />
        </div>
      </div>
      <div class="data_list">
        <div>
          <div>全网质押OKT总量(OKT)</div>
          <div>121212.00</div>
        </div>

        <div>
          <div>SOKE矿池(SOKE)</div>
          <div>121212.00</div>
        </div>
        <!-- <div>
          <div>流动性矿池(OKT)</div>
          <div>121212.00</div>
        </div> -->
        <div>
          <div>SOKE做市资金池(SOKE)</div>
          <div>121212.00</div>
        </div>
        <div>
          <div>SOKE激励池(SOKE)</div>
          <div>121212.00</div>
        </div>
      </div>
      <div class="data_block">
        <div>我的数据</div>
        <div @click="changerouter('/personal')">
          查看详细 <img src="../assets/images/index_images/Jump.png" alt="" />
        </div>
      </div>
      <div class="my_data">
        <div class="my_data_top">
          <div class="my_data_top_left">
            <div>我的做市质押(OKT)</div>
            <div>12121</div>
          </div>
          <div class="my_data_top_right">
            <div>我要质押</div>
            <div>解除质押</div>
          </div>
        </div>
        <div class="my_data_bottom">
          <div class="my_data_top_left">
            <div>我的指数交易账户(SOKE)</div>
            <div>12121</div>
          </div>
          <div class="my_data_top_right">
            <div>我要充值</div>
            <div>我要提现</div>
          </div>
        </div>
      </div>
      <div class="my_data_table">
        <div>
          <div>我的钱包地址</div>
          <div @click="openDialog">afafdsgdfgfgjdiahdahdishfhdsfhs</div>
        </div>
        <div>
          <div>我的算力</div>
          <div>12121.00</div>
        </div>
        <div>
          <div>我的挖矿产出(SOKE)</div>
          <div>12121</div>
        </div>
        <div>
          <div>我的做市收益(SOKE)</div>
          <div>12121</div>
        </div>
        <div>
          <div>我的做市亏损(SOKE)</div>
          <div>12121</div>
        </div>
        <div>
          <div>我的基金收益(SOKE)</div>
          <div>12121</div>
        </div>
      </div>
      <div class="data_block">
        <div>流动性矿池</div>
        <div @click="changerouter('/flow')">
          更多 <img src="../assets/images/index_images/Jump.png" alt="" />
        </div>
      </div>
      <div class="pool_block">
        <div class="pool_title">
          <div>OKT-SOKE</div>
          <div class="get_income">领取收益</div>
        </div>
        <div class="pool_income">
          <div><span>当前收益:</span><span>1.00OKT:12.00SOKE</span></div>

          <div>
            <span>剩余(SOKE):</span>
            <span> 100000</span>
          </div>
        </div>
        <div class="pool_btn_group">
          <div class="Pledge">我要质押</div>
          <div class="line_mid"></div>
          <div class="Release_pledge">解除质押</div>
        </div>
      </div>
      <div class="pool_block">
        <div class="pool_title">
          <div>BTC-SOKE</div>
          <div>
            <span>剩余(SOKE):</span>
            <span> 100000</span>
          </div>
        </div>
        <div class="pool_income">
          <div><span>当前收益:</span><span>1.00OKT:12.00SOKE</span></div>
        </div>
        <div class="pool_btn_start">
          <div>开始算力挖矿</div>
        </div>
      </div>
      <div class="margin_botoom"></div>
      <div class="data_block">
        <div>指数市场</div>
        <div @click="changerouter('/indexmarket')">
          更多 <img src="../assets/images/index_images/Jump.png" alt="" />
        </div>
      </div>
      <div class="index_market">
        <div>
          <div>主流指数（Soke-main)</div>
          <div>+13%</div>
        </div>
        <div>
          <div>平台资产指数（Soke-exchange)</div>
          <div>-3%</div>
        </div>
        <div>
          <div>波卡生态指数（Soke-dot)</div>
          <div>+13%</div>
        </div>
        <div>
          <div>存储生态指数（Soke-fil)</div>
          <div>+13%</div>
        </div>
        <div>
          <div>DeFi生态指数（Soke-Defi)</div>
          <div>+13%</div>
        </div>
      </div>
      <div class="data_block">
        <div>指数基金</div>
        <div @click="changerouter('/indexfund')">
          更多 <img src="../assets/images/index_images/Jump.png" alt="" />
        </div>
      </div>
      <div class="index_fund">
        <div class="index_fund_block">
          <div class="index_fund_block_top">
            <div>
              <img src="../assets/images/index_images/rise.png" alt="" />
            </div>
            <div>
              <div>
                <div>主流指数追踪基金</div>
                <div class="num">+10%</div>
              </div>
              <div class="line_fund">
                <el-progress :percentage="20" color="#008555"></el-progress>
              </div>
            </div>
          </div>
          <div class="index_fund_buy">
            <div>购买</div>
            <div>赎回</div>
          </div>
        </div>
      </div>
      <div class="panter_title">合作伙伴</div>

      <div class="panter_wrapper">
        <div class="panter_line_one">
          <img src="../assets/images/index_images/BINANCE.png" alt="" />
          <img src="../assets/images/index_images/huobi.png" alt="" />
          <img src="../assets/images/index_images/ok.png" alt="" />
        </div>
        <div class="panter_line_two">
          <img src="../assets/images/index_images/BITTREX.png" alt="" />
          <img src="../assets/images/index_images/BIT.png" alt="" />
        </div>
        <div class="panter_line_one">
          <img src="../assets/images/index_images/BITFINEX.png" alt="" />
          <img src="../assets/images/index_images/gemini.png" alt="" />
          <img src="../assets/images/index_images/MXC.png" alt="" />
        </div>
      </div>
    </div>
    <div class="footer">V 1.0 SOKE</div>
    <div :class="['nav', { active_nav: navclick }]">
      <div class="nav_top_img">
        <img src="../assets/images/index_images/logo-nav.png" alt="" />
        <img @click="closenav" src="../assets/images/index_images/shut_down.png" alt="" />
      </div>
      <div @click="changerouter('/')" class="nav_list">首页</div>
      <div @click="changerouter('/indexmarket')" class="nav_list">指数市场</div>
      <div @click="changerouter('./flow')" class="nav_list">流动性矿池</div>
      <div class="nav_list">联系</div>
      <div class="nav_list">教程</div>
      <div class="nav_list">白皮书</div>
      <div class="nav_list">审计报告</div>
    </div>

    <!-- 弹出框 -->
    <el-dialog title="账户" :visible.sync="centerDialogVisible" width="80%" center>
      <div class="notice_wrapper">
        <div class="notice_logo">
          <img src="../assets/images/index_images/SOKE-logo.png" alt="" />
        </div>
        <div class="notcie_status">已连接</div>
        <div class="wallet_address">
          <input v-model="message" type="text" />
          <img
            v-clipboard:copy="message"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            src="../assets/images/index_images/copy.png"
            alt=""
          />
        </div>
        <div class="sure_btn"><div>登录</div></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "zh",
          label: "简体中文",
        },
        {
          value: "en",
          label: "English",
        },
        {
          value: "jp",
          label: "日本語",
        },
        {
          value: "kr",
          label: "한국어",
        },
      ],
      value: "简体中文",
      scrollstatr: false,
      navclick: false,
      centerDialogVisible: false,
      message: "",
    };
  },
  mounted() {
    this.getAccount();
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    getAccount() {
      this.tp.getCurrentWallet().then((res) => {
        alert(JSON.stringify(res));
      });
    },
    handleScroll() {
      var scrollTop = window.scrollY;
      if (scrollTop > 80) {
        this.scrollstatr = true;
      } else {
        this.scrollstatr = false;
      }
    },
    opennav() {
      this.navclick = true;
    },
    closenav() {
      this.navclick = false;
    },
    openDialog() {
      this.centerDialogVisible = true;
    },
    changerouter(p) {
      this.$router.push(p);
    },
    onCopy() {
      this.$message({
        message: "复制成功",
        type: "success",
      });
    },
    onError() {
      this.$message({
        message: "复制失败",
        type: "warning",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  padding: 30px 30px 0.1px;
  background: #f6f5fa;

  .head_menue {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    .left_logo {
      img {
        width: 214px;
      }
    }
    .right_menue {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .language_chioce {
        width: 140px;
        margin-right: 8px;
      }
      .main_nav {
        img {
          width: 36px;
        }
      }
    }
  }
  .OKT_block {
    background: #fff;
    padding: 40px 30px;
    box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
    border-radius: 6px;
    .OKT_head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      .OKT_left_title {
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        img {
          width: 24px;
          margin-right: 10px;
        }
      }
      .OKT_right_num {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #000000;
      }
    }
  }
  .data_block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    & > div:nth-child(1) {
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
    }
    & > div:nth-child(2) {
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #925ff3;
      display: flex;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
        margin-left: 3px;
      }
    }
  }
  .data_list {
    padding: 42px 30px 2px;
    background: #fff;
    margin-bottom: 42px;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      & > div:nth-child(1) {
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
        opacity: 0.7;
      }
      & > div:nth-child(2) {
        font-size: 28px; /*px*/
        font-family: PingFang SC;
        font-weight: bold;
        color: #000000;
      }
    }
  }
  .my_data {
    padding: 30px 40px;
    background-image: url("../assets/images/index_images/bg_data.png");
    background-size: 100% 100%;
    height: 248px;
    .my_data_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 42px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1); /*no*/
      margin-bottom: 40px;
    }
    .my_data_bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .my_data_table {
    margin-bottom: 42px;
    padding: 40px 30px 0.1px;
    background: #fff;
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      & > div:nth-child(1) {
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
        opacity: 0.7;
      }
      & > div:nth-child(2) {
        font-size: 28px; /*px*/
        font-family: PingFang SC;
        font-weight: bold;
        color: #000000;
      }
    }
  }
  .index_market {
    & > div {
      padding: 22px 30px;
      height: 66px;
      background: #ffffff;
      box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      & > div:nth-child(1) {
        font-size: 24px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
      }
      & > div:nth-child(2) {
        width: 150px;
        height: 66px;
        background: #008555;
        border-radius: 6px;
        text-align: center;
        line-height: 66px;
        font-size: 28px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
      }
    }
  }
  .index_fund_block {
    padding: 41px 30px;
    background: #fff;
    margin-bottom: 40px;
    box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
    border-radius: 6px;
    .index_fund_block_top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      & > div:nth-child(1) {
        margin-right: 20px;
        img {
          width: 64px;
          height: 64px;
        }
      }
      & > div:nth-child(2) {
        flex: 1;
        & > div:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
          & > div:nth-child(1) {
            font-size: 24px; /*px*/
            font-family: PingFang SC;
            font-weight: 500;
            color: #000000;
          }
          .num {
            font-size: 24px; /*px*/
            font-family: PingFang SC;
            font-weight: bold;
            color: #008555;
          }
        }
      }
    }
    .index_fund_buy {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      & > div:nth-child(1) {
        width: 100px;
        height: 54px;
        line-height: 54px;
        text-align: center;
        background: #925ff3;
        border-radius: 6px;
        color: #fff;
        font-size: 28px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        margin-right: 22px;
      }
      & > div:nth-child(2) {
        font-size: 28px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: #925ff3;
      }
    }
  }
  .panter_title {
    font-size: 24px; /*px */
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
    margin-bottom: 12px;
  }
  .panter_line_one {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    img {
      height: 92px;
    }
  }
  .panter_line_two {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    img {
      height: 92px;
    }
    & > img:nth-child(1) {
      margin-right: 10px;
    }
  }
  .panter_wrapper {
    margin-bottom: 30px;
  }
}
.footer {
  text-align: center;
  height: 66px;
  box-shadow: 0px 6px 20px 0px rgba(146, 95, 243, 0.15); /*no*/
  line-height: 66px;
  font-size: 24px; /*px*/
  font-family: PingFang SC;
  font-weight: bold;
  color: #000000;
  background: #fff;
}
/deep/ .el-input--suffix input {
  border: none !important;
  height: 50px;
  font-size: 22px;
  background: transparent;
}
/deep/ .el-progress__text {
  display: none !important;
}
.my_data_top_left {
  & > div:nth-child(1) {
    font-size: 20px; /*px*/
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
    opacity: 0.7;
    margin-bottom: 36px;
  }
  & > div:nth-child(2) {
    font-size: 28px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #ffffff;
  }
}
.my_data_top_right {
  display: flex;
  align-items: center;
  & > div:nth-child(1) {
    width: 152px;
    height: 54px;
    background: #ffffff;
    border-radius: 6px;
    line-height: 54px;
    text-align: center;
    font-size: 28px; /*px*/
    font-family: PingFang SC;
    font-weight: 500;
    color: #925ff3;
    margin-right: 20px;
  }
  & > div:nth-child(2) {
    font-size: 28px; /*px*/
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
  }
}
// 导航条动效
.sticky-menu {
  left: 0;
  margin: auto;
  position: fixed;
  top: 0;
  right: 0;
  // box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15);
  z-index: 9999;
  background: #fff;
  animation: 300ms ease-in-out 0s normal none 1 running fadeInDown;
  box-shadow: 0 10px 15px rgba(25, 25, 25, 0.1);
  height: 100px;
  padding: 0 30px;
}
// 导航菜单
.nav {
  padding: 30px 30px 0.1px;
  transition: all 0.3s ease-in-out;
  position: fixed;
  height: 100%;
  left: 0;
  top: -110vh;
  right: 0;
  z-index: 99999999999999999999;
  background: linear-gradient(90deg, #925ff3 0%, #c751c5 48%, #f07b4d 100%);
  .nav_top_img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;
    & > img:nth-child(1) {
      height: 50px;
    }
    & > img:nth-child(2) {
      height: 24px;
    }
  }
  .nav_list {
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); /*no */
    font-size: 28px; /*px*/
    font-family: PingFang SC;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 50px;
  }
}
.active_nav {
  top: 0px;
}
/deep/ .el-dialog {
  margin-top: 30vh !important;
  border-radius: 10px;
}
/deep/ .el-dialog__title {
  font-size: 28px !important;
  font-family: PingFang SC;
  font-weight: bold;
  color: #000000;
}
/deep/ .el-dialog__header {
  height: 106px;
  line-height: 106px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
}
.notice_wrapper {
  padding: 60px 30px;
}
.notice_logo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  img {
    height: 90px;
  }
}
.notcie_status {
  font-size: 24px; /*px*/
  font-family: PingFang SC;
  font-weight: bold;
  color: #000000;
  text-align: center;
  margin-bottom: 60px;
}
.wallet_address {
  height: 66px;
  background: linear-gradient(90deg, #fdf2ed 0%, #f9edf9 53%, #f4effe 100%);
  font-size: 24px; /*px*/
  font-family: PingFang SC;
  font-weight: bold;
  color: #925ff3;
  position: relative;
  margin-bottom: 20px;
  input {
    border: none;
    outline: none;
    background: transparent;
    height: 66px;
    width: calc(100% - 38px);
    font-size: 24px; /*px*/
    font-family: PingFang SC;
    font-weight: bold;
    color: #925ff3;
  }
  img {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    right: 13px;
    margin-top: -12px;
  }
}
.sure_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 186px;
    height: 66px;
    background: #925ff3;
    border-radius: 6px;
    text-align: center;
    line-height: 66px;
    font-size: 28px; /*px*/
    font-family: PingFang SC;
    font-weight: bold;
    color: #f4effe;
  }
}
.my_data_address_title {
  font-size: 20px; /*px*/
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 18px;
}
.my_data_address_main {
  font-size: 28px; /*px*/
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
}
.pool_block {
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no */
  border-radius: 6px;
  padding: 40px 30px;
  margin-bottom: 20px;
  .pool_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    & > div:nth-child(1) {
      font-size: 28px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
    }
    .get_income {
      width: 120px;
      height: 40px;
      border: 1px solid #935ff3; /*no*/
      border-radius: 6px;
      text-align: center;
      line-height: 40px;
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #935ff3;
    }
  }
  .pool_income {
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); /*no*/
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;

    & > div:nth-child(1) {
      & > span:nth-child(1) {
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: #737373;
      }
      & > span:nth-child(2) {
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
      }
    }
    & > div:nth-child(2) {
      & > span:nth-child(1) {
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: #737373;
      }
      & > span:nth-child(2) {
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
      }
    }
  }
  .pool_btn_group {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .Pledge {
      width: 186px;
      height: 66px;
      background: #925ff3;
      border-radius: 6px;
      font-size: 28px; /*px*/
      font-family: PingFang SC;
      font-weight: 500;
      color: #f4effe;
      line-height: 66px;
      text-align: center;
    }
    .line_mid {
      height: 26px;
      background: #925ff3;
      width: 1px; /*no*/
    }
    .Release_pledge {
      font-size: 28px; /*px*/
      font-family: PingFang SC;
      font-weight: 500;
      color: #925ff3;
    }
  }
  .pool_btn_start {
    display: flex;
    justify-content: center;
    & > div {
      width: 690px;
      height: 66px;
      background: #925ff3;
      border-radius: 6px;
      text-align: center;
      font-size: 28px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #f4effe;
      line-height: 66px;
    }
  }
}
.margin_botoom {
  height: 20px;
}
</style>
