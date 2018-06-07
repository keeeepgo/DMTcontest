// 说明：JS时间Date格式化参数
// 参数：格式化字符串如：'yyyy-MM-dd HH:mm:ss'
// 结果：如2016-06-01 10:09:00
var nowread_id = 1498627266558;

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

var waitlist = new Vue({
    el: '#waitlist',
    data: {
        newitem: '',
        sortByStatus: false,
        todo: [
            { id: 1498627266558, label: "Learn VueJs", done: true, date: '2018/5/19' },
            { id: 1498627266557, label: "Code a todo list", done: false, date: '2018/5/19' },
            { id: 1498627266556, label: "Learn something else", done: false, date: '2018/5/19' }
        ],
        nowread_id: nowread_id
    },
    methods: {
        addItem: function() {
            var today = new Date();
            this.todo.push({ id: today.getTime(), label: this.newitem, done: false, date: today.toLocaleDateString() });
            this.newitem = '';
        },
        markAsDoneOrUndone: function(item) {
            item.done = !item.done;
        },
        deleteItemFromList: function(item) {
            let index = this.todo.indexOf(item)
            this.todo.splice(index, 1);
        },
        changeReadNow: function(item) {
            this.nowread_id = item.id;
            nowread_id = item.id;
        },
        movedonetoogle: function(active) {
            this.sortByStatus = active;
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