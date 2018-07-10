<template>
  <div class="sign_in_wrapper center">
    <div class="sign_in_content white center">
      <div class="sign_in_detail">
        <b-form-input type="text" class="marginBottom"
                      v-model="name"
                      required
                      placeholder="Enter name">
        </b-form-input>
        <b-form-input type="text" class="marginBottom"
                      v-model="password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  mounted() {}
};
</script>

<style lang='scss'>
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
.sign_in_name{
  margin-bottom: 30px;
}
</style>
