<template>
  <el-button type="primary">{{ propValue }}</el-button>
</template>

<script>
export default {
  props: {
    propValue: {
      type: String,
      default: "",
    },
  },
};
</script>