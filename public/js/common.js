define(['jquery'],function () {
    // NProgress.start();
    // NProgress.done();
    //左侧导航菜单折叠展开
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });
    //退出功能
    $('#logoutBtn').click(function () {
        $.ajax({
            type: 'post',
            url: '/api/logout',
            dataType: 'json',
            success: function (data) {
                //成功退出
                if (data.code == 200) {
                    location.href = '/main/login';
                }
            }
        });
        return false;
    });
});



