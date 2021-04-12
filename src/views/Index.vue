<template>
  <div class="most_wrapper padding">
    <div class="header">
      <div @click="getback()"><img src="../assets/images/return-icon.png" alt="" /></div>
      <div>指数</div>
      <div></div>
    </div>
    <div class="container">
      <div class="head_block">
        <div class="index_title">
          <div>SOKE-MAIN</div>
          <div>杠杆倍数20X</div>
          <div><img src="../assets/images/menu1.png" alt="" /></div>
        </div>
        <div class="container">
          <div class="limit_Commission">
            <div class="limit">
              <span
                @click="changepricetype('limit')"
                :class="{ changetype: price_type == 'limit' }"
                >限价委托</span
              >
              <span
                :class="{ changetype: price_type == 'market' }"
                @click="changepricetype('market')"
                >市价委托</span
              >
            </div>
            <div class="price_inp">
              <input v-model="price" type="text" />
              <span>SOKE</span>
            </div>
            <div class="price_inp">
              <input v-model="num" type="text" />
              <span>手</span>
            </div>
            <div class="percent_list">
              <div>25%</div>
              <div>50%</div>
              <div>75%</div>
              <div>100%</div>
            </div>
            <div @click="openbuytable()" class="buy_btn">买入多做(看涨)</div>
            <div class="to_max">
              <div>做多成本</div>
              <div>0.00SOKE</div>
            </div>
            <div class="percent_list">
              <div>25%</div>
              <div>50%</div>
              <div>75%</div>
              <div>100%</div>
            </div>
            <div @click="openselltable()" class="sell_btn">卖出做空(看跌)</div>
            <div class="info_list">
              <div>做空成本(SOKE)</div>
              <div>0.00</div>
            </div>
            <div class="info_list">
              <div>委托价值(SOKE)</div>
              <div>0.00</div>
            </div>

            <div class="info_list">
              <div>可用余额(SOKE)</div>
              <div>0.00</div>
            </div>
          </div>
        </div>
      </div>
      <div class="now_block">
        <div>当前仓位 <span>当前委托(20)</span></div>
        <div @click="changerouter()">
          更多交易记录<img src="../assets/images/index_images/Jump.png" alt="" />
        </div>
      </div>
      <div class="now_main_table">
        <div class="Multiple_positions">
          <div class="Multiple_title">多仓 <span>SOKE-MAIN(20X) 1手</span></div>
          <div class="Multiple_list">
            <div class="Multiple_value">
              <div>0.00</div>
              <div>仓位价值(SOKE)</div>
            </div>
            <div class="Multiple_average">
              <div>32763.5</div>
              <div>开仓均价(SOKE)</div>
            </div>
            <div class="Multiple_Unsettlement">
              <div>
                <div>-0.01</div>
              </div>
              <div>未结算盈亏(SOKE)</div>
            </div>
          </div>
          <div class="Multiple_list_next">
            <div>
              <div>1.00</div>
              <div>保证金(SOKE)</div>
            </div>
            <div>
              <div>32763.5</div>
              <div>强平价格(SOKE)</div>
            </div>
            <div>
              <div style="color: #d60f2a">-0.01%</div>
              <div>盈亏率</div>
            </div>
          </div>
          <div class="close">平仓</div>
        </div>
      </div>
      <div v-show="false" class="now_apply">
        <div class="apply_table">
          <div class="apply_title">
            <div>
              <span>买入</span>
              SOKE-MAIN
            </div>
            <div>
              01-22 10:00:00
              <p>撤销</p>
            </div>
          </div>
          <div class="apply_list">
            <div>
              <div>0.00</div>
              <div>委托价值(SOKE)</div>
            </div>
            <div>
              <div>10</div>
              <div>成交数量</div>
            </div>
            <div>
              <div>10</div>
              <div>委托数量</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 现价购买 -->
    <el-dialog title="现价买多" :visible.sync="dialogVisible" width="80%">
      <div class="buy_dialog">
        <div class="dialog_title">SOKE-MAIN(20X)</div>
        <div class="dialog_list">
          <div>委托价格(SOKE)</div>
          <div>0.00</div>
        </div>

        <div class="dialog_list">
          <div>数量(手)</div>
          <div>1000</div>
        </div>

        <div class="dialog_list">
          <div>冻结保证金</div>
          <div>1000.00 SOKE</div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 现价卖空 -->
    <div class="sell_wrapper_dialog">
      <el-dialog title="限价卖空" :visible.sync="dialogVisiblesell" width="80%">
        <div class="buy_dialog">
          <div class="dialog_title">SOKE-MAIN(20X)</div>
          <div class="dialog_list">
            <div>委托价格(SOKE)</div>
            <div>0.00</div>
          </div>

          <div class="dialog_list">
            <div>数量(手)</div>
            <div>1000</div>
          </div>

          <div class="dialog_list">
            <div>冻结保证金</div>
            <div>1000.00 SOKE</div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisiblesell = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      num: 0,
      dialogVisible: false,
      dialogVisiblesell: false,
      price_type: "limit",
    };
  },
  methods: {
    openbuytable() {
      this.dialogVisible = true;
    },
    openselltable() {
      this.dialogVisiblesell = true;
    },
    changepricetype(t) {
      this.price_type = t;
    },
    changerouter() {
      this.$router.push("/trade");
    },
    getback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.padding {
  padding-bottom: 100px;
}
.head_block {
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
  border-radius: 6px;
  margin-bottom: 40px;
  .index_title {
    padding: 40px 16px 40px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 8px solid rgba(0, 0, 0, 0.03);
    margin-bottom: 40px;
    & > div {
      flex: 1;
    }
    & > div:nth-child(1) {
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #935ff3;
    }
    & > div:nth-child(2) {
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: 500;
      color: #000000;
      text-align: center;
    }
    & > div:nth-child(3) {
      text-align: right;
      img {
        width: 36px;
        height: 36px;
      }
    }
  }
  .limit_Commission {
    padding-bottom: 1px;
    .title {
      font-size: 20px; /*px*/
      font-family: PingFang SC;
      font-weight: 500;
      color: #925ff3;
      margin-bottom: 20px;
      span {
        color: rgba(0, 0, 0, 0.7);
      }
    }
    .price_inp {
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1); /*no*/
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      input {
        border: none;
        outline: none;
        flex: 1;
      }
      span {
        font-size: 28px; /*px*/
        font-family: PingFang SC;
        font-weight: bold;
        color: #935ff3;
        margin-left: 6px;
      }
    }
    .percent_list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      & > div {
        width: 150px;
        height: 50px;
        border-radius: 4px; /*no*/
        font-size: 24px; /*px*/
        font-family: PingFang SC;
        font-weight: bold;
        color: #000000;
        text-align: center;
        line-height: 50px;
        border: 1px solid #bfbfbf; /*no*/
      }
    }
    .buy_btn {
      width: 630px;
      height: 66px;
      background: #008555;
      border-radius: 6px;
      font-size: 28px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #f4effe;
      text-align: center;
      line-height: 66px;
      margin-bottom: 40px;
    }
    .to_max {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      & > div:nth-child(1) {
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
      }
      & > div:nth-child(2) {
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: bold;
        color: #935ff3;
      }
    }
    .sell_btn {
      height: 66px;
      background: #d60f2a;
      border-radius: 6px;
      font-size: 28px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #f4effe;
      text-align: center;
      line-height: 66px;
      margin-bottom: 40px;
    }
    .info_list {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      justify-content: space-between;
      & > div:nth-child(1) {
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
      }
      & > div:nth-child(2) {
        font-size: 28px; /*px*/
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
}
.now_block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  & > div:nth-child(1) {
    font-size: 24px; /*px*/
    font-family: PingFang SC;
    font-weight: bold;
    color: #935ff3;
    span {
      color: rgba(0, 0, 0, 0.7);
      margin-left: 40px;
    }
  }
  & > div:nth-child(2) {
    font-size: 24px; /*px*/
    font-family: PingFang SC;
    font-weight: bold;
    color: #925ff3;
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
.now_main_table {
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
  border-radius: 6px;
  padding: 40px 30px;
  .Multiple_title {
    display: flex;
    align-items: center;
    font-size: 24px; /*px*/
    font-family: PingFang SC;
    font-weight: bold;
    color: #935ff3;
    padding-bottom: 42px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); /*no*/
    margin-bottom: 40px;
    span {
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
      margin-left: 10px;
    }
  }
  .Multiple_list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    .Multiple_value {
      & > div:nth-child(1) {
        font-size: 28px; /*px*/
        font-family: PingFang SC;
        font-weight: bold;
        color: #000000;
        height: 48px;
        line-height: 48px;
      }
      & > div:nth-child(2) {
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
      }
    }
    .Multiple_average {
      flex: 1;
      & > div:nth-child(1) {
        font-size: 28px; /*px*/
        font-family: PingFang SC;
        font-weight: bold;
        color: #000000;
        text-align: center;
        height: 48px;
        line-height: 48px;
      }
      & > div:nth-child(2) {
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
        text-align: center;
      }
    }
    .Multiple_Unsettlement {
      & > div:nth-child(1) {
        div {
          font-size: 28px; /*px*/
          font-family: PingFang SC;
          font-weight: bold;
          color: #d60f2a;
          text-align: right;
          height: 48px;
          line-height: 48px;
        }
      }
      & > div:nth-child(2) {
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
        text-align: right;
      }
    }
  }
  .Multiple_list_next {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    & > div {
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
        color: rgba(0, 0, 0, 0.7);
      }
    }
    & > div:nth-child(2) {
      text-align: center;
      flex: 1;
    }
    & > div:nth-child(3) {
      text-align: right;
    }
  }
  .close {
    height: 66px;
    background: #935ff3;
    border-radius: 6px;
    font-size: 28px; /*px*/
    font-family: PingFang SC;
    font-weight: bold;
    color: #f4effe;
    line-height: 66px;
    text-align: center;
  }
}
.apply_table {
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
  border-radius: 6px;
  padding: 0 30px 40px;

  .apply_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); /*no*/
    margin-bottom: 40px;
    & > div:nth-child(1) {
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
      span {
        color: #008555;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
      p {
        width: 54px;
        height: 30px;
        background: #935ff3;
        border-radius: 6px;
        line-height: 30px;
        text-align: center;
        font-size: 20px; /*px*/
        font-family: PingFang SC;
        font-weight: bold;
        color: #ffffff;
        margin-left: 10px;
      }
    }
  }
  .apply_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div:nth-child(1) {
      flex: 1;
      font-size: 28px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
      & > div:nth-child(2) {
        font-size: 20px; /*px*/
        padding-top: 14px;
        color: rgba(0, 0, 0, 0.7);
      }
    }
    & > div:nth-child(2) {
      flex: 1;
      text-align: center;
      font-size: 28px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
      & > div:nth-child(2) {
        font-size: 20px; /*px*/
        padding-top: 14px;
        color: rgba(0, 0, 0, 0.7);
      }
    }
    & > div:nth-child(3) {
      flex: 1;
      text-align: right;
      font-size: 28px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
      & > div:nth-child(2) {
        font-size: 20px; /*px*/
        padding-top: 14px;
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }
}
.limit {
  font-size: 18px; /*px*/
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #000000;
  margin-bottom: 18px;

  span {
    margin-left: 10px;
    cursor: pointer;
  }
}
.dialog_title {
  font-size: 28px; /*px*/
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #000000;
  margin-bottom: 36px;
}
.dialog_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  & > div:nth-child(1) {
    font-size: 20px; /*px*/
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
  }
  & > div:nth-child(2) {
    font-size: 28px; /*px*/
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #000000;
  }
}
/deep/ .el-dialog__header {
  text-align: center;
  padding-bottom: 40px;
  padding-top: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
/deep/ .el-dialog__title {
  font-size: 30px !important;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #008555;
}
/deep/ .el-dialog__footer {
  text-align: center;
}
/deep/ .el-button--primary {
  width: 300px;
  height: 68px;
  background: #945ef2;
  border-radius: 6px;
  outline: none;
  border: none;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
}
.sell_wrapper_dialog {
  /deep/ .el-dialog__title {
    color: #d60f2a !important;
  }
}
.changetype {
  color: #925ff3 !important;
  font-weight: bold !important;
}
</style>
