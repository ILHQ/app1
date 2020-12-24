<template>
  <div class="about">
    <h1 @click="$router.push('/home')">This is an about page</h1>
    <h1 @click="changeGl">changeGl</h1>
  </div>
</template>

<script>
  export default {
    methods: {
      changeGl() {
        this.$setGlobalState({
          userName: 'dd'
        });
      }
    }
  };
</script>
