<template>
  <div class="map" ref="mapContainer"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const mapContainer = ref(null);

onMounted(() => {
  // 创建百度地图实例
  const map = new BMap.Map(mapContainer.value);
  // 设置中心点坐标（这里以北京为例）
  const point = new BMap.Point(116.404, 39.915);
  // 初始化地图
  map.centerAndZoom(point, 15);
  // 开启鼠标滚轮缩放
  map.enableScrollWheelZoom(true);
  // 添加地图控件
  map.addControl(new BMap.NavigationControl());
  map.addControl(new BMap.ScaleControl());
});
</script>

<style scoped lang="scss">
.map {
  width: 80%;
  height: 700px;
  background: #d9d9d9;
  border-radius: 34px;
  border: 1px solid #000;
}
</style>
