const getDeviceSize = () => {
  return {
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height
  };
};
const urlParams = new URLSearchParams(window.location.search);
const app_version = urlParams.get("app_version") ?? 0;
const device = getDeviceSize();
let pageHtml = "";
if(app_version == 1){
    pageHtml += `<h1>创造工坊 V1（旧版）</h1>`;
    pageHtml += `<p>旧APP专属页面，这里代码不要改动！</p>`;
    pageHtml += `<p>功能：基础测试页面</p>`;
    pageHtml += `<p>设备可视宽：${device.viewportWidth}px</p>`;
    pageHtml += `<p>设备可视高：${device.viewportHeight}px</p>`;
}else if(app_version == 2){
    pageHtml += `<h1>创造工坊 V2（新版）</h1>`;
    pageHtml += `<p>只有V2安装包才能看见新功能</p>`;
    pageHtml += `<p>新增：图片上传功能</p>`;
    pageHtml += `<p>设备可视宽：${device.viewportWidth}px</p>`;
    pageHtml += `<p>设备可视高：${device.viewportHeight}px</p>`;
}else{
    pageHtml += `<h1>网页直接访问</h1>`;
    pageHtml += `<p>请在创造工坊APP内打开</p>`;
    pageHtml += `<p>设备可视宽：${device.viewportWidth}px</p>`;
    pageHtml += `<p>设备可视高：${device.viewportHeight}px</p>`;
}
document.body.innerHTML = pageHtml;
window.addEventListener('resize',()=>{
  const newDevice = getDeviceSize();
  console.log("窗口尺寸变化",newDevice);
});
