<template>
  <div class="map" ref="mapContainer"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const mapContainer = ref(null);

onMounted(() => {
  // 创建百度地图实例
  const map = new BMap.Map(mapContainer.value);
  // 设置中心点坐标（深圳市南山区西丽大学城清华园区）
  const point = new BMap.Point(113.964, 22.593);
  // 初始化地图
  map.centerAndZoom(point, 18);  // 调整缩放级别为18，更清晰地显示实验室位置
  // 开启鼠标滚轮缩放
  map.enableScrollWheelZoom(true);
  // 添加地图控件
  map.addControl(new BMap.NavigationControl());
  map.addControl(new BMap.ScaleControl());

  // 定义位置点
  const locations = [
    {
      point: new BMap.Point(113.964, 22.593),
      title: "清华园区主入口",
      content: "深圳市南山区西丽大学城清华园区主入口"
    },
    {
      point: new BMap.Point(113.9642, 22.5932),
      title: "智能实验室",
      content: "清华园区智能实验室"
    }
  ];

  // 添加标记点和信息窗口
  locations.forEach(location => {
    // 创建标记点
    const marker = new BMap.Marker(location.point);
    map.addOverlay(marker);

    // 创建标签
    const label = new BMap.Label(location.title, {
      offset: new BMap.Size(20, -10)
    });
    label.setStyle({
      color: "#333",
      fontSize: "12px",
      height: "20px",
      lineHeight: "20px",
      fontFamily: "微软雅黑",
      padding: "0 5px",
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      borderRadius: "3px"
    });
    marker.setLabel(label);

    // 创建信息窗口
    const infoWindow = new BMap.InfoWindow(location.content, {
      width: 200,
      height: 100,
      title: location.title
    });

    marker.addEventListener("click", function() {
      this.openInfoWindow(infoWindow);
    });
  });
});
</script>

<style scoped lang="scss">
.map {
  width: 80%;
  height: 700px;
  background: #d9d9d9;
  border-radius: 34px;
  // border: 1px solid #000;
}
</style>
