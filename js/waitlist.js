
var nowread_id = 1;
var nowread_label ="";

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
        sortByStatus: false,
        todo: [
            { id: 1498627266558, label: "Learn VueJs", done: true, date: '2018/5/19' },
            { id: 1498627266557, label: "Code a todo list", done: false, date: '2018/5/19' },
            { id: 1498627266556, label: "Learn something else", done: false, date: '2018/5/19' }
        ],
        nowread_id: nowread_id,
        nowread_label : nowread_label
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
            this.nowread_id = item.id;
            nowread_id = item.id;
            this.nowread_label = item.label;
            nowread_label = item.label;
        },
        movewaitdonetoogle: function(active) {
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