// 页脚 HTML 代码

/* 鼠标特效 +1S */
<script type="text/javascript">
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var $i = $("<span></span>").text("+1s");
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 99,
            "top": y - 20,
            "left": x+10,
            "position": "absolute",
            "font-size": "large"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});
</script>
