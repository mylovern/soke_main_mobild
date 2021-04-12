<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import url("./assets/css/reset.css");
@import url("./assets/css/animate.min.css");
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background: transparent !important;
}
.el-select-dropdown__item.selected {
  background: transparent !important;
  color: #606266 !important;
}
.el-select-dropdown__item {
  padding: 0 40px !important;
  font-size: 22px !important;
  height: 50px !important;
  line-height: 50px !important;
}
.el-select-dropdown__list {
  padding: 40px 0;
}
.el-dialog__headerbtn {
  font-size: 30px !important; /*px*/
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 40px;
  & > div:nth-child(1) {
    img {
      width: 32px;
      height: 32px;
    }
  }
  & > div:nth-child(2) {
    flex: 1;
    text-align: center;
    font-size: 30px; /*px*/
    font-family: PingFang SC;
    font-weight: bold;
    color: #000219;
  }
  & > div:nth-child(3) {
    width: 32px;
  }
}




.most_wrapper {
  background: #f6f5fa;
  min-height: 100vh;
}
.container {
  padding: 0 30px;
}
.el-progress__text {
  display: none !important;
}
.el-progress-bar {
  padding-right: 0 !important;
}
</style>
