<template>
  <div>This is the profile page</div>
</template>

<script>
export default {
  props: ["uid"],

  mounted() {
    console.log(this.uid);
  }
};
</script>
