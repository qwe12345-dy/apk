export async function onRequest({request}) {
  const url = new URL(request.url);
  const app_version = url.searchParams.get("app_version") || 0;
  let html;
  if(app_version == 1){
    html = `
<h1>创造工坊 V1（旧版）</h1>
<p>旧APP专属页面，这里代码不要改动！</p>
<p>功能：基础测试页面</p>
`;
  }else if(app_version == 2){
    html = `
<h1>创造工坊 V2（新版）</h1>
<p>只有V2安装包才能看见新功能</p>
<p>新增：图片上传功能</p>
`;
  }else{
    html = `
<h1>网页直接访问</h1>
<p>请在创造工坊APP内打开</p>
`;
  }
  return new Response(html, {
    headers: {"Content-Type":"text/html;charset=utf-8"}
  })
}
