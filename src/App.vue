<template>
  <tool-bar class="h-16 absolute w-screen"></tool-bar>
  <div class="absolute top-16 w-screen bottom-0 flex">
    <component-list class="h-full w-2/12"></component-list>
    <canvas-content class="h-full w-10/12"></canvas-content>
    <property-bar class="h-full w-2/12"></property-bar>
  </div>
</template>

<script>
import ToolBar from "./pages/Layout/ToolBar.vue";
import ComponentList from "./pages/Layout/ComponentList.vue";
import CanvasContent from "./pages/Layout/CanvasContent.vue";
import PropertyBar from "./pages/Layout/PropertyBar.vue";
import Store from "./store/store.ts";
import { defineComponent, provide, ref } from "vue";
export default defineComponent({
  components: {
    ToolBar,
    ComponentList,
    CanvasContent,
    PropertyBar,
  },
  setup() {
    provide(Store.componentData, ref([]));
  },
});
</script>

<style></style>
