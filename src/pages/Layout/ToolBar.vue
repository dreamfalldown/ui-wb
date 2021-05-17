<template lang="">
    <header class="flex flex-row-reverse">
        <div class="flex-row flex items-center px-8 cursor-pointer header-button" v-for="menu in menus" :key="menu.icon">
            <font-awesome-icon class="mx-1"  :icon="menu.icon"></font-awesome-icon>
            <span>{{ menu.title }}</span>
        </div>
    </header>
</template>
<script>
import { defineComponent } from "vue";
const menus = [
  {
    icon: "file-download",
    title: "保存",
  },
  {
    icon: "redo",
    title: "撤销",
  },
  {
    icon: "redo",
    title: "恢复",
  },
  {
    icon: "eye",
    title: "预览",
  },
  {
    icon: "edit",
    title: "画布编辑",
  },
];

export default defineComponent({
  setup() {
    return {
      menus,
    };
  },
});
</script>
<style lang="scss" scoped>
header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.377);
}

.header-button {
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.377);
  border-bottom: 0;
}
</style>
