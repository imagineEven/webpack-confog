<template>
  <div class="sign_in_wrapper center">
    <b-card no-body style="background:rgba(255,255,255,.8);">
      <b-tabs pills card id="sign_in">
        <b-tab title="sign in" active>
          <div class="decs_wrap">
            <b-form-input type="text"
              v-model="name"
              required
              placeholder="Enter name">
            </b-form-input>
            <div class="decs_detail center">nihao</div>
          </div>
          <div class="decs_wrap">
            <b-form-input type="text"
              v-model="password"
              required
              placeholder="Enter password">
            </b-form-input>
            <div class="decs_detail center">nihao</div>
          </div>
            <b-button variant="success" style="width:100%;" @click="onclickOK">Sure?</b-button>
        </b-tab>
        <b-tab title="sign up">
          <div class="decs_wrap">
            <b-form-input type="text"
              v-model="name"
              required
              placeholder="Enter name">
            </b-form-input>
            <div class="decs_detail center">*nihao*</div>
          </div>
          <div class="decs_wrap">
            <b-form-input type="text"
              v-model="password"
              required
              placeholder="Enter password">
            </b-form-input>
            <div class="decs_detail center">nihao</div>
          </div>
            <b-button variant="success" style="width:100%;">Sure?</b-button>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import VueLoading  from './components/loading.vue'
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  mounted() {},
  methods: {
    onclickOK() {
      console.log(222);
      this.$router.push({
        path:'/footer'
      })
    }
  },
  components: {
    VueLoading
  }
};
</script>

<style lang='scss'>
.decs_wrap {
  margin-bottom: 30px;
  .decs_detail {
    color: red;
  }
}
.sign_in_wrapper {
  height: 100%;
  width: 100%;
  background: url(../static/background.jpg);
  background-size: 100% 100%;
}
.sign_in_content {
  height: 400px;
  width: 400px;
  border-radius: 8px;
}
.sign_in_detail {
  width: 80%;

}
.sign_in_name {
  margin-bottom: 30px;
}

.tabs {
  height: 400px;
  width: 400px;

  .card-header {
  display: flex;
  justify-content: center;
  }

  .nav-item {
    margin: 0 20px;
  }

  .card-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
