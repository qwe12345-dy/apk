<?php
$app_version = $_GET['app_version'] ?? 0;

if($app_version == 1){
    echo "<h1>创造工坊 V1（旧版）</h1>";
    echo "<p>这是旧APP看到的页面，无论怎么更新新版代码，这里永远不变</p>";
    echo "<p>旧功能：测试页面</p>";
}elseif($app_version == 2){
    echo "<h1>创造工坊 V2（新版）</h1>";
    echo "<p>新APP才能看到新增功能！旧APP看不到这个页面</p>";
    echo "<p>新增：在线上传、图片预览</p>";
}else{
    echo "<h1>网页直接访问</h1>";
    echo "<p>请从APP内打开</p>";
}
?>
