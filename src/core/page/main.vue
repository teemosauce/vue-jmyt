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
            <el-menu :default-active="activeIndex" mode="horizontal" :router="useRouter" class="menu" @select="handleSelect">
                <el-menu-item index="/">首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">设备监控</template>
                    <el-menu-item index="equipmentList">监控设备树</el-menu-item>
                    <el-menu-item index="2-2">铁路地图</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">设备管理</template>
                    <el-menu-item index="hosts">设备列表</el-menu-item>
                    <el-menu-item index="hostScrap">设备报废</el-menu-item>
                    <!-- <el-menu-item index="equipmentDict">字典管理</el-menu-item> -->
                    <el-menu-item index="hostGraph">设备拓扑</el-menu-item>
                </el-submenu>

                <el-submenu index="4">
                    <template slot="title">故障管理</template>
                    <el-menu-item index="faultReport">故障上报</el-menu-item>
                    <el-menu-item index="faultProcess">故障处理</el-menu-item>
                    <el-menu-item index="faults">故障查询</el-menu-item>
                </el-submenu>

                <el-submenu index="5">
                    <template slot="title">报警配置</template>
                    <el-menu-item index="alarmTemplate">模板配置</el-menu-item>
                    <el-menu-item index="alarmUsers">用户组配置</el-menu-item>
                    <el-menu-item index="alarmHosts">设备组配置</el-menu-item>
                     <el-menu-item index="alarmDisable">报警禁用</el-menu-item>
                </el-submenu>

                <el-submenu index="6">
                    <template slot="title">配置中心</template>
                    <el-menu-item index="6-1">区域配置</el-menu-item>
                    <el-menu-item index="6-2">配置更新</el-menu-item>
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
      activeIndex: "1",
      useRouter: true
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
