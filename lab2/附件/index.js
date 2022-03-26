window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener('click',function(){
        clickLogin();
    });
}

function entersearch(){
   var event = window.event || arguments.callee.caller.arguments[0];
   if (event.keyCode == 13)
   {
      search();
   }
}
function search() {
    // TODO: 搜索触发后的行为
    var dt=document.getElementsByTagName('input');
    if(dt[0].value=='')
    {
        alert("请输入搜索内容");
    }
    else
    {
        // alert(dt[0].value);
        window.location.href="https://www.baidu.com/s?ie=UTF-8&wd="+dt[0].value
    }
    // console.log('请输入搜索内容');
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = Kernal.getUserName();
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name"></span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
    document.getElementById('name').textContent = username;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}