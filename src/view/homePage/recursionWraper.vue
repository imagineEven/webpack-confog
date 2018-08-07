<template>
  <div>
    <div v-for="item in data">
      <div>{{ item.name }}</div>
      <recursion :data="item.children"></recursion>
    </div>
  </div>
</template>

<script>
// 如何点击的时候让下面子元素隐藏或者显示，
import recursion from "./recursion.vue";
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          name: "levi",
          children: [
            {
              id: 11,
              name: "levi1",
              children: [
                {
                  id: 111,
                  name: "levi11",
                  children: [
                    {
                      id: 1111,
                      name: "levi111"
                    }
                  ]
                }
              ]
            },
            {
              id: 12,
              name: "levi2",
              children: [
                {
                  id: 112,
                  name: "levi12"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: "even",
          children: [
            {
              id: 22,
              name: "even1",
              children: [
                {
                  id: 222,
                  name: "even11"
                }
              ]
            }
          ]
        },
        {
          id: 3,
          name: "tony",
          children: [
            {
              id: 33,
              name: "tony1",
              children: [
                {
                  id: 333,
                  name: "tony11"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {},
  components: {
    recursion
  }
};
</script>

<style>
</style>
