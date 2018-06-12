
var nowread_newsId = 1;
var nowread_newsTitle ="";

Vue.component('togglebutton', {
    props: ['label', 'name'],
    template: `<div class="togglebutton-wrapper" v-bind:class="isactive ? 'togglebutton-checked' : ''">
                  <label v-bind:for="name">
                    <span class="togglebutton-label">{{ label }}</span>
                    <span class="tooglebutton-box"></span>
                  </label>
                  <input v-bind:id="name" type="checkbox" v-bind:name="name" v-model="isactive" v-on:change="onToogle">
              </div>`,
    model: {
        prop: 'checked',
        event: 'change'
    },
    data: function() {
        return {
            isactive: false
        }
    },
    methods: {
        onToogle: function() {
            this.$emit('clicked', this.isactive)
        }
    }
});

var userId = 1;
var url_WaitNewsList = "http://localhost:8080/WaitNewsList?userId="+userId;
var waitlist = new Vue({
    el: '#waitlist',
    data: {
        sortByStatus: false,
        todo: [
            { newsId: "", newsTitle: "暂无待看文章", done: true },
        ],
        nowread_newsId: nowread_newsId,
        nowread_newsTitle : nowread_newsTitle
    },
    methods: {
        markAsDoneOrUndone: function(item) {
            item.done = !item.done;
        },
        deleteItemFromList: function(item) {
            let index = this.todo.indexOf(item)
            this.todo.splice(index, 1);
        },
        changeReadNow: function(item) {
            this.nowread_newsId = item.newsId;
            nowread_newsId = item.newsId;
            this.nowread_newsTitle = item.newsTitle;
            nowread_newsTitle = item.newsTitle;
        },
        movewaitdonetoogle: function(active) {
            this.sortByStatus = active;
        },
        refreshList: function(){
            var xhr = new XMLHttpRequest();
            var url = url_WaitNewsList;
            console.log(url);
            xhr.open("GET", url, true);
            this_list = this;
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                    var str = "";
                    str = xhr.responseText;
                    newslistdata = JSON.parse(str);
                    newslistdata.forEach(function (element, index, array) {
                        // element: 指向当前元素的值
                        // index: 指向当前索引
                        // array: 指向Array对象本身
                        //console.log(element + ', index = ' + index);
                        element.done = false;
                    });
                    this_list.todo = newslistdata;
                    console.log(str);
                }
            };
            xhr.send();
        }
    },
    computed: {
        todoByStatus: function() {

            if (!this.sortByStatus) {
                return this.todo;
            }

            var sortedArray = []
            var doneArray = this.todo.filter(function(item) { return item.done; });
            var notDoneArray = this.todo.filter(function(item) { return !item.done; });

            sortedArray = [...notDoneArray, ...doneArray]; //将一个数组转为用逗号分隔的参数序列,取代concat()
            return sortedArray;
        }
    }
});
waitlist.refreshList();