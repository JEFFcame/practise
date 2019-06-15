# messageTips
Daily Practise

params: type:提示框类型 loading  waring  infor  close   success   error
        text:信息提示框内容
        isCloseBtn：关闭按钮是否显示
        time：设置提示框显示时间，为0 时提示框不消失

var message=new Message();
    message.show({
       type: '',
       text: '',
    });
    message.close();//主动触发信息提示框关闭
