//获取元素样式
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}

//尝试创建一个可以执行简单动画的函数
//attr,样式,  callback回调函数
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj, attr));

    //判断速度的正负
    if (current > target) {
        //此时速度应为负
        speed = -speed;
    }


    obj.timer = setInterval(function() {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;

        if ((speed < 0 && newValue < target || (speed > 0 && newValue > target))) {
            newValue = target;
        }

        obj.style[attr] = newValue + "px";

        if (newValue == target) {
            clearInterval(obj.timer);
            callback && callback();
        }

    }, 30)
}