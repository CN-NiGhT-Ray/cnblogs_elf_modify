// 博客侧边栏公告（支持HTML代码）

// 添加了个人头像
<div class="head_img"><img width="120" height="120" alt="我的头像" src="//pic.cnblogs.com/avatar/1014286/20160824172911.png" class="img_avatar"></div>
// 添加了看板娘
<script charset="utf-8" src="https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js"></script>
// 看板娘配置参数
<script>
    L2Dwidget.init({
        "model": {
            jsonPath: "https://cdn.jsdelivr.net/gh/cn-night-ray/live2d-widget-models@1.0/packages/live2d-widget-model-shizuku/assets/shizuku.model.json",
            scale: 1
        },
        "display": {
            "superSample": 1.2,
            "width": 200,
            "height": 380,
            "position": "right",
            "hOffset": 0,
            "vOffset": -32
        }
    });
</script>
