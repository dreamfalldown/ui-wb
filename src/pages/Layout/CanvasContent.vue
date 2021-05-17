<template>
  <div class="canvas-content" @drop="handleDrop" @dragover="handleDragOver">
    <div type="primary">test button</div>
    <p>{{ componentData }}</p>
  </div>
</template>
<script>
import Store from "../../store/store.ts";
import { defineComponent, inject } from "vue";
export default defineComponent({
  methods: {
    handleDragOver(e) {
      e.preventDefault();
    },
    handleDrop(e) {
      e.preventDefault();
      console.log(e.dataTransfer.getData("idx"));
      this.componentData.push(1);
      console.log(this.componentData);
    },
  },
  setup() {
    const componentData = inject(Store.componentData);
    console.log(componentData.value);

    return {
      componentData,
    };
  },
});
</script>
<style lang="scss">
.canvas-content {
}
</style>