<template>
  <div class="container">
      <header class="header">
       
        <div class="header-left">
            <a href="/"></a>
            <span>长春站</span>
        </div>
         
         <div class="header-right">
             Right Content
        </div>

         <nav class="header-content">
            <el-menu :default-active="activeIndex" mode="horizontal" class="menu" @select="handleSelect">
                <el-menu-item index="1"><a class="nav-index" href="/">首页</a></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">设备监控</template>
                    <el-menu-item index="2-1">监控设备树</el-menu-item>
                    <el-menu-item index="2-2">铁路地图</el-menu-item>
                </el-submenu>
                <el-submenu index="asset">
                    <template slot="title">设备管理</template>
                    <el-menu-item index="assets">设备列表</el-menu-item>
                    <el-menu-item index="3-2">设备报废</el-menu-item>
                    <el-menu-item index="3-3">设备资料</el-menu-item>
                    <el-menu-item index="3-3">字典管理</el-menu-item>
                </el-submenu>

                <el-submenu index="4">
                    <template slot="title">故障管理</template>
                    <el-menu-item index="4-1">故障上报</el-menu-item>
                    <el-menu-item index="4-2">故障处理</el-menu-item>
                    <el-menu-item index="4-3">故障查询</el-menu-item>
                </el-submenu>

                <el-submenu index="5">
                    <template slot="title">报警管理</template>
                    <el-menu-item index="5-1">模板配置</el-menu-item>
                    <el-menu-item index="5-2">用户组配置</el-menu-item>
                    <el-menu-item index="5-3">设备组配置</el-menu-item>
                </el-submenu>

                <el-submenu index="6">
                    <template slot="title">监控配置</template>
                    <el-menu-item index="6-1">区域配置</el-menu-item>
                </el-submenu>
            </el-menu>
        </nav>

      </header>

      <div class="content">
        <router-view/>
      </div>
      
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      activeIndex: "1"
    };
  },

  methods: {
    handleSelect() {}
  }
};
</script>


<style lang="scss" scoped>
$header-height: 49px;
header.header {
  height: $header-height;
  line-height: $header-height;
  background: #033983;
  // overflow: hidden;
  // position: relative;
  color: #fff;

  .header-left {
    float: left;
    height: inherit;

    a {
      display: inline-block;
      vertical-align: middle;
      width: 89px;
      height: 23px;
      background: url("../../assets/TFlogo.svg");
      margin-left: 30px;
      background-size: contain;
    }

    span {
      margin-left: 20px;
      vertical-align: middle;
      font-weight: bold;
      font-size: 18px;
    }
  }

  nav.header-content {
    height: 100%;
    width: 600px;
    margin: 0 auto;
    position: relative;

    .menu {
      height: 100%;

      a.nav-index {
        display: inline-block;
        height: 100%;
        width: 100%;
        vertical-align: baseline;
      }
    }
  }

  .header-right {
    float: right;
    height: inherit;
    background: green;
  }
}
</style>
