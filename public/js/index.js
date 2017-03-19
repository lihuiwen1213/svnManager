
/**
 * 创建人：李智勇
 * 创建时间： 2017/3/1.
 * 描述：
 */
$(function(){
    $("#submit").click(
        function (event) {
            event.preventDefault();
            $.ajax({
                url:"/controller",
                data:{username:$("#username").val()},
                dataType:"json",
                type:"get",
                success:function (data) {
                    alert(data.message);
                },
                error:function (err) {
                    console.log(err);
                }
            });
        }
    );
});