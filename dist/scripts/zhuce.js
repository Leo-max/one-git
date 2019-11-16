define(["jquery"], function($) {
    // 切换登录和注册
    function tabPage() {
        $("#register-tip").on("click", function() {
            $("#login-box").css("display", "none");
            $("#register-box").css("display", "block");
            $("#register-tip").addClass("btn-active");
            $("#login-tip").removeClass("btn-active");
        })
        $("#login-tip").on("click", function() {
            $("#login-box").css("display", "block");
            $("#register-box").css("display", "none");
            $("#register-tip").removeClass("btn-active");
            $("#login-tip").addClass("btn-active");
        })
    }

    return {
        tabPage: tabPage
    }

})