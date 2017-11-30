<template>
  <div class="container">
      <div class="login-container" v-loading="loading" element-loading-text="正在登录中...">
          <img src="../assets/logo.png">
          <div class="login-box-wrapper">
               <h2>同方工业运维平台</h2>
                <el-form :model="form" ref="form" :rules="formRule" label-position="left" class="login-box">
                    <el-form-item label="账号" prop="account">
                        <el-input v-model="form.account" size="small" auto-complete="off" placeholder="账号">
                        </el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="pwd">
                        <el-input type="password" size="small" v-model="form.pwd" auto-complete="off" style="color:#FFF;" placeholder="密码">
                        </el-input>
                    </el-form-item>

                    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>

                    <el-form-item style="width:100%;">
                        <el-button type="primary" size="small" style="width:100%;" @click.native.prevent="login" :loading="loading">登录</el-button>
                    </el-form-item>
                </el-form>
          </div>
          <div class="copyright">Copyright 2017 - 同方工业有限公司</div>
      </div>
  </div>
</template>

<script>
import login from "../api/user/login";

export default {
  name: "login",
  data() {
    return {
      loading: false,
      form: {
        account: "",
        pwd: ""
      },
      formRule: {
        account: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }
        ],
        pwd: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      },
      checked: true
    };
  },
  methods: {
    login(ev) {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
          var res = await login(this.form);
          this.loading = false;
          console.log(res);
        }
      });
    },
    getTenant(tenants, code) {}
  }
};
</script>


<style lang="scss" scoped>
.container {
  position: absolute;
  right: 0;
  left: 0;
  height: 100%;
  min-height: 600px;
  min-width: 1250px;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-container {
    width: 100%;
    img {
      margin-left: 56px;
    }

    .login-box-wrapper {
      background-image: url("../assets/bg.png");
      padding: 10px 0;
      margin: 10px 0;

      h2 {
        font-size: 30px;
        text-align: center;
        letter-spacing: 3px;
      }
      .login-box {
        width: 350px;
        margin: 10px auto;
        padding: 30px;
        padding-bottom: 15px;
        background-clip: padding-box;
        background: #fff; //border-radius: 5px;
        //box-shadow: 0 0 25px #cac6c6;
      }
      .remember {
        margin-bottom: 35px;
      }
    }

    .copyright {
      text-align: center;
    }
  }
}
</style>
