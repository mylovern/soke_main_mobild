<template>
  <div class="most_wrapper">
    <div class="header">
      <div @click="getback()"><img src="../assets/images/return-icon.png" alt="" /></div>
      <div class="drop_title">
        <div @click="changeline">
          SOKE-MAIN <img src="../assets/images/drop-down.png" alt="" />
        </div>
      </div>
      <div></div>
    </div>
    <div class="container">
      <div class="top_block">
        <div class="head_price">53835.00 <span>-12.00%</span></div>
        <div class="price_day">
          <div>
            <div>24h最高:<span>53853.11</span></div>
            <div>24h最高:<span>53853.11</span></div>
          </div>
          <div>
            <div>24h最高:<span>53853.11</span></div>
            <div>24h最高:<span>53853.11</span></div>
          </div>
        </div>
      </div>
      <div class="person_header">
        <div>
          <div @click="changetable(0)" :class="{ activetime: changeshow == 0 }">
            15分钟
          </div>
        </div>
        <div>
          <div @click="changetable(1)" :class="{ activetime: changeshow == 1 }">
            1小时
          </div>
        </div>
        <div>
          <div @click="changetable(2)" :class="{ activetime: changeshow == 2 }">
            4小时
          </div>
        </div>
        <div>
          <div @click="changetable(3)" :class="{ activetime: changeshow == 3 }">
            24小时
          </div>
        </div>
      </div>
      <div class="charts_wrapper">
        <div id="update-k-line" class="kline"></div>
      </div>
      <div class="btn_group">
        <div @click="changerouter()">买入做多</div>
        <div @click="changerouter()">卖出做空</div>
      </div>
    </div>
    <div :class="['fixed_mask', { active: open }]">
      <div @click="changeline" class="mask"></div>
      <div class="bottom_list">
        <div>
          <img src="../assets/images/1.png" alt="" />
          <div>SOKE-MAIN</div>
          <div></div>
        </div>

        <div>
          <img src="../assets/images/no-1.png" alt="" />
          <div>SOKE-CHANGE</div>
          <div></div>
        </div>

        <div>
          <img src="../assets/images/no-1.png" alt="" />
          <div>SOKE-DOT</div>
          <div></div>
        </div>

        <div>
          <img src="../assets/images/no-1.png" alt="" />
          <div>SOKE-FIL</div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getkline } from "../api";
import { init, dispose } from "klinecharts";
export default {
  data() {
    return {
      open: false,
      changeshow: 0,
    };
  },
  methods: {
    changeline() {
      this.open = !this.open;
    },
    changetable(n) {
      this.changeshow = n;
    },
    getback() {
      this.$router.go(-1);
    },
    changerouter(){
      this.$router.push('/indexs')
    }
  },
  mounted() {
    const chart = init("update-k-line");
    getkline("1min")
      .then((res) => {
        for (let v of res.data) {
          v.open = v.open * 1;
          v.high = v.high * 1;
          v.low = v.low * 1;
          v.close = v.close * 1;
          v.volume = v.volume * 1;
          v.turnover = v.turnover * 1;
          v.timestamp = v.timestamp * 1000;
        }
        this.price = res.data[res.data.length - 1].close;
        chart.applyNewData(res.data);
      })
      .catch((err) => {
        if (err.response.data.message == "Token has expired") {
          localStorage.removeItem("token");
          localStorage.removeItem("email");
          this.$router.push("/login");
        }
      });
    chart.setStyleOptions({
      // 网格线
      grid: {
        show: true,
        // 网格水平线
        horizontal: {
          show: true,
          size: 1,
          color: "#000",
          // 'solid'|'dash'
          style: "dash",
          dashValue: [2, 2],
        },
        // 网格垂直线
        vertical: {
          show: true,
          size: 1,
          color: "#000",
          // 'solid'|'dash'
          style: "dash",
          dashValue: [2, 2],
        },
      },
      // 蜡烛图
      candle: {
        // 蜡烛图上下间距，大于1为绝对值，大于0小余1则为比例
        margin: {
          top: 0.2,
          bottom: 0.1,
        },
        // 蜡烛图类型 'candle_solid'|'candle_stroke'|'candle_up_stroke'|'candle_down_stroke'|'ohlc'|'area'
        type: "candle_solid",
        // 蜡烛柱
        bar: {
          upColor: "#26A69A",
          downColor: "#EF5350",
          noChangeColor: "#888888",
        },
        // 面积图
        area: {
          lineSize: 2,
          lineColor: "#2196F3",
          value: "close",
          fillColor: [
            {
              offset: 0,
              color: "rgba(33, 150, 243, 0.01)",
            },
            {
              offset: 1,
              color: "rgba(33, 150, 243, 0.2)",
            },
          ],
        },
        priceMark: {
          show: true,
          // 最高价标记
          high: {
            show: true,
            color: "#D9D9D9",
            textMargin: 5,
            textSize: 10,
            textFamily: "Helvetica Neue",
            textWeight: "normal",
          },
          // 最低价标记
          low: {
            show: true,
            color: "#D9D9D9",
            textMargin: 5,
            textSize: 10,
            textFamily: "Helvetica Neue",
            textWeight: "normal",
          },
          // 最新价标记
          last: {
            show: true,
            upColor: "#26A69A",
            downColor: "#EF5350",
            noChangeColor: "#888888",
            line: {
              show: true,
              // 'solid'|'dash'
              style: "dash",
              dashValue: [4, 4],
              size: 1,
            },
            text: {
              show: true,
              size: 12,
              paddingLeft: 2,
              paddingTop: 2,
              paddingRight: 2,
              paddingBottom: 2,
              color: "#FFFFFF",
              family: "Helvetica Neue",
              weight: "normal",
            },
          },
        },
        // 提示
        tooltip: {
          showRule: "always",
          showType: "standard",
          labels: ["时间", "开", "收", "高", "低", "成交量"],
          // 可以是数组，也可以是方法，如果是方法则需要返回一个数组
          // 数组和方法返回的数组格式为:
          // [xxx, xxx, ......]或者[{ color: '#fff', value: xxx }, { color: '#000', value: xxx }, .......]
          values: null,
          defaultValue: "n/a",
          rect: {
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 6,
            offsetLeft: 8,
            offsetTop: 8,
            offsetRight: 8,
            borderRadius: 4,
            borderSize: 1,
            borderColor: "#3f4254",
            fillColor: "rgba(17, 17, 17, .3)",
          },
          text: {
            size: 10,
            family: "Helvetica Neue",
            weight: "normal",
            color: "#000",
            marginLeft: 8,
            marginTop: 6,
            marginRight: 8,
            marginBottom: 0,
          },
        },
      },
      // 技术指标
      technicalIndicator: {
        margin: {
          top: 0.2,
          bottom: 0.1,
        },
        bar: {
          upColor: "#26A69A",
          downColor: "#EF5350",
          noChangeColor: "#888888",
        },
        line: {
          size: 1,
          colors: ["#FF9600", "#9D65C9", "#2196F3", "#E11D74", "#01C5C4"],
        },
        circle: {
          upColor: "#26A69A",
          downColor: "#EF5350",
          noChangeColor: "#888888",
        },
        // 最新值标记
        lastValueMark: {
          show: false,
          text: {
            show: false,
            color: "#ffffff",
            size: 12,
            family: "Helvetica Neue",
            weight: "normal",
            paddingLeft: 3,
            paddingTop: 2,
            paddingRight: 3,
            paddingBottom: 2,
          },
        },
        // 提示
        tooltip: {
          showRule: "always",
          showName: true,
          showParams: true,
          defaultValue: "n/a",
          text: {
            size: 12,
            family: "Helvetica Neue",
            weight: "normal",
            color: "#D9D9D9",
            marginTop: 6,
            marginRight: 8,
            marginBottom: 0,
            marginLeft: 8,
          },
        },
      },
      // x轴
      xAxis: {
        show: true,
        height: null,
        // x轴线
        axisLine: {
          show: true,
          color: "#000",
          size: 1,
        },
        // x轴分割文字
        tickText: {
          show: true,
          color: "#000",
          family: "Helvetica Neue",
          weight: "normal",
          size: 12,
          paddingTop: 3,
          paddingBottom: 6,
        },
        // x轴分割线
        tickLine: {
          show: true,
          size: 1,
          length: 3,
          color: "#000",
        },
      },
      // y轴
      yAxis: {
        show: true,
        width: null,
        // 'left' | 'right'
        position: "right",
        // 'normal' | 'percentage'
        type: "normal",
        inside: false,
        // y轴线
        axisLine: {
          show: true,
          color: "#000",
          size: 1,
        },
        // x轴分割文字
        tickText: {
          show: true,
          color: "#000",
          family: "Helvetica Neue",
          weight: "normal",
          size: 12,
          paddingLeft: 3,
          paddingRight: 6,
        },
        // x轴分割线
        tickLine: {
          show: true,
          size: 1,
          length: 3,
          color: "#000",
        },
      },
      // 图表之间的分割线
      separator: {
        size: 1,
        color: "#888888",
        fill: true,
        activeBackgroundColor: "rgba(230, 230, 230, .15)",
      },
      // 十字光标
      crosshair: {
        show: true,
        // 十字光标水平线及文字
        horizontal: {
          show: true,
          line: {
            show: true,
            // 'solid'|'dash'
            style: "dash",
            dashValue: [4, 2],
            size: 1,
            color: "#000",
          },
          text: {
            show: true,
            color: "#D9D9D9",
            size: 12,
            family: "Helvetica Neue",
            weight: "normal",
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 2,
            paddingBottom: 2,
            borderSize: 1,
            borderColor: "#505050",
            backgroundColor: "#505050",
          },
        },
        // 十字光标垂直线及文字
        vertical: {
          show: true,
          line: {
            show: true,
            // 'solid'|'dash'
            style: "dash",
            dashValue: [4, 2],
            size: 1,
            color: "#888888",
          },
          text: {
            show: true,
            color: "#D9D9D9",
            size: 12,
            family: "Helvetica Neue",
            weight: "normal",
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 2,
            paddingBottom: 2,
            borderSize: 1,
            borderColor: "#505050",
            backgroundColor: "#505050",
          },
        },
      },
      // 图形标记
      graphicMark: {
        line: {
          color: "#2196F3",
          size: 1,
        },
        point: {
          backgroundColor: "#2196F3",
          borderColor: "#2196F3",
          borderSize: 1,
          radius: 4,
          activeBackgroundColor: "#2196F3",
          activeBorderColor: "#2196F3",
          activeBorderSize: 1,
          activeRadius: 6,
        },
        polygon: {
          stroke: {
            size: 1,
            color: "#2196F3",
          },
          fill: {
            color: "rgba(33, 150, 243, 0.1)",
          },
        },
        arc: {
          stroke: {
            size: 1,
            color: "#2196F3",
          },
          fill: {
            color: "rgba(33, 150, 243, 0.1)",
          },
        },
        text: {
          color: "#2196F3",
          size: 12,
          family: "Helvetica Neue",
          weight: "normal",
          marginLeft: 2,
          marginRight: 2,
          marginTop: 2,
          marginBottom: 6,
        },
      },
    });
  },
  destroyed() {
    dispose("update-k-line");
  },
};
</script>

<style lang="less" scoped>
.drop_title {
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000219;
  }
  img {
    width: 36px;
  }
}
.top_block {
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
  border-radius: 6px;
  padding-bottom: 44px;
  margin-bottom: 20px;
  .head_price {
    padding-left: 30px;
    font-size: 36px; /*px*/
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
    padding: 38px 0px 38px 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); /*no*/
    margin-bottom: 40px;
    span {
      font-size: 24px; /*px*/
      font-family: PingFang SC;
      font-weight: bold;
      color: #d60f2a;
    }
  }
  .price_day {
    padding: 0 30px;
    & > div:not(:last-child) {
      margin-bottom: 40px;
    }
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div {
        font-size: 24px; /*px*/
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
        span {
          font-size: 24px; /*px*/
          font-family: PingFang SC;
          font-weight: bold;
          color: #000000;
        }
      }
    }
  }
}
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
.fixed_mask {
  position: fixed;
  height: 100vh;
  left: 0;
  bottom: -101vh;
  right: 0;
  transition: 0.3s;

  z-index: 10;
  .mask {
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
  .bottom_list {
    height: 446px;
    background: #ffffff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 30px;
    z-index: 99999999;
    & > div {
      display: flex;
      align-items: center;
      padding: 44px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      img {
        width: 30px;
      }
      & > div:nth-child(2) {
        flex: 1;
        text-align: center;
        font-size: 28px; /*px*/
        font-family: PingFang SC;
        font-weight: bold;
        color: #000000;
      }
      & > div:nth-child(3) {
        width: 30px;
        height: 30px;
      }
    }
  }
}
.active {
  bottom: 0 !important;
}
.activetime {
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
.kline {
  background: #fff;
  width: 100%;
  height: 500px;
}
.charts_wrapper {
  margin-bottom: 40px;
}
.btn_group {
  display: flex;
  justify-content: space-between;
  div {
    font-size: 28px; /*px*/
    font-family: PingFang SC;
    font-weight: 500;
    color: #f4effe;
    text-align: center;
    line-height: 80px;
  }
  & > div:nth-child(1) {
    width: 330px;
    height: 80px;
    background: #008555;
    border-radius: 6px;
  }
  & > div:nth-child(2) {
    width: 330px;
    height: 80px;
    background: #d60f2a;
    border-radius: 6px;
  }
}
</style>
