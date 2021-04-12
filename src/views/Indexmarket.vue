<template>
  <div class="most_wrapper">
    <div class="header">
      <div @click="getback()"><img src="../assets/images/return-icon.png" alt="" /></div>
      <div>指数市场</div>
      <div></div>
    </div>
    <div class="container">
      <div class="index_list">
        <div>主流指数（Soke-main)</div>
        <div @click="changerouter()">+13%</div>
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
    changerouter(){
      this.$router.push('/charts')
    }
  },
};
</script>

<style lang="less" scoped>
.index_list {
  height: 110px;
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(146, 95, 243, 0.15); /*no*/
  border-radius: 6px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  & > div:nth-child(1) {
    font-size: 24px; /*px*/
    font-family: PingFang SC;
    font-weight: 500;
    color: #00000;
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
</style>
