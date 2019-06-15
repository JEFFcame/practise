
// @params :
// type: loading  waring  infor  close   success   error  目前支持这些 其他可以再添加
function Message() {
    var contentBoxId='message-content';
    this.contentEl=document.getElementById(contentBoxId);
    if(!this.contentEl){
        this.contentEl=document.createElement('div');
        this.contentEl.id=contentBoxId;
        document.body.appendChild(this.contentEl);
    }

    Message.prototype.show=function (obj) {
        var messageEl=document.createElement('div');
        // 设置消息class，这里加上message-move-in可以直接看到弹出效果
        messageEl.className = 'message message-move-in';
        // 消息内部html字符串
        messageEl.innerHTML ='' +
            '<div class="type iconfont icon-'+ obj.type +'"></div> ' +
            '<div class="text">'+ obj.text +'</div> ' ;
        // 是否展示关闭按钮
        if (obj.isCloseBtn) {
            // 创建一个关闭按钮
            var closeEl = document.createElement('div');
            closeEl.className = 'close iconfont icon-close';
            // 把关闭按钮追加到message元素末尾
            messageEl.appendChild(closeEl);

            // 监听关闭按钮的click事件，触发后将调用我们的close方法
            // 我们把刚才写的移除消息封装为一个close方法
            closeEl.addEventListener('click', function () {
                close(messageEl);
            });
        }
        this.contentEl.appendChild(messageEl);
        if(obj.time>0){
            setTimeout(function () {
                close(messageEl);
            },obj.time)
        }
        // 主动触发close事件
        Message.prototype.close=function () {
            close(messageEl);
        }
    }
    // 由于定时器里边要移除消息，然后用户手动关闭事件也要移除消息，所以我们直接把移除消息提取出来封装成一个方法
    function close(messageEl){
        // 首先把move-in这个弹出动画类给移除掉
        messageEl.className = messageEl.className.replace('message-move-in', '');
        messageEl.className +="message-move-out ";
        // move-out动画结束后把元素的高度和边距都设置为0
        // 由于我们在css中设置了transition属性，所以会有一个过渡动画
        messageEl.addEventListener('animationend', function () {
            messageEl.setAttribute('style', 'height: 0; margin: 0');
        });
        messageEl.addEventListener('transitionend',function () {
            messageEl.remove();
        })
    }
}
