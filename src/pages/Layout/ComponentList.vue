<template lang="">
    <div class="component-list">
        <div class="drag-button-wrapper" @dragstart="handleDragStart">
            <div class="drag-button" v-for="item in componentList" :key="item" draggable="true" :data-index="item.id">
                <font-awesome-icon class="mx-1"  :icon="item.icon"></font-awesome-icon>
                <span>{{ item.label }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    handleDragStart(e) {
      e.dataTransfer.setData("idx", e.target.dataset.index);
    },
  },
  setup() {
    const componentList = [
      {
        id: 0,
        label: "button",
        icon: "circle",
      },
    ];

    return {
      componentList,
    };
  },
});
</script>
<style lang="scss" scoped>
.component-list {
  border-right: 1px solid rgba(255, 255, 255, 0.377);
  padding: 1rem 0.6rem;
  .drag-button {
    cursor: pointer;
    display: inline-block;
    padding: 0.4rem 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.377);
  }
}
</style>