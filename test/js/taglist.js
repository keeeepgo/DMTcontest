/*3D标签云*/
var tags = [
    { id: 1498627266558, label: "小米" },
    { id: 1498627266557, label: "Unity" },
    { id: 1498627266558, label: "西甲" },
    { id: 1498627266557, label: "NBA" },
    { id: 1498627266558, label: "杜兰特" },
    { id: 1498627266557, label: "卡卡" },
    { id: 1498627266558, label: "科幻片" },
    { id: 1498627266557, label: "周星驰" },
    { id: 1498627266556, label: "独立游戏" }
];

function reloadTagCloud(tags) {
    var tagcloudHTML = "<div class='tagcloud' id='tagcloud'>";
    for (var i = 0; i < tags.length; i++) {
        tagcloudHTML += ("<a>" + tags[i].label + "</a>");
    }
    tagcloudHTML += "</div>";
    document.getElementById("wrapper").innerHTML = tagcloudHTML;
    tagcloud({
        selector: ".tagcloud", //元素选择器
        fontsize: 16, //基本字体大小, 单位px
        radius: 100, //滚动半径, 单位px
        mspeed: "normal", //滚动最大速度, 取值: slow, normal(默认), fast
        ispeed: "normal", //滚动初速度, 取值: slow, normal(默认), fast
        direction: 135, //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
        keep: false //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
    });
}
reloadTagCloud(tags);
var tagshow = new Vue({
    el: '#taglist',
    data: {
        newitem: '',
        tags: tags,
    },
    methods: {
        addItem: function() {
            var today = new Date();
            this.tags.push({ id: today.getTime(), label: this.newitem });
            this.newitem = '';
        },
        deleteItemFromList: function(item) {
            let index = this.tags.indexOf(item)
            this.tags.splice(index, 1);
        }
    }
});