<template>
  <div class="about">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'About',
  methods: {
    handleClick() {
      this.$router.push({ name: 'AboutUs' });
    },
  },
}
</script>
