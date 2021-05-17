<template>
    <tool-bar class='h-16 bg-red-400 absolute w-screen'>
      
    </tool-bar>
    <div class='absolute top-16 w-screen bottom-0 flex'>
      <compent-list class='h-full w-2/12'></compent-list>
      <canvas-content class='h-full w-10/12'></canvas-content>
      <property-bar  class='h-full w-2/12'></property-bar>
    </div>
</template>

<script>
import ToolBar from "./pages/Layout/ToolBar.vue";
import CompentList from "./pages/Layout/CompentList.vue";
import CanvasContent from "./pages/Layout/CanvasContent.vue";
import PropertyBar from "./pages/Layout/PropertyBar.vue";
export default {
    components: {
        ToolBar,
        CompentList,
        CanvasContent,
        PropertyBar
    },
};
</script>

<style></style>
