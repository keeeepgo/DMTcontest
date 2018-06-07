
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

var newslist = new Vue({
    el: '#newslist',
    data: {
        sortByStatus: false,
        todo: [
        { id: 1, label: "Learn VueJs", done: true},
        { id: 2, label: "Code a todo list", done: false},
        { id: 3, label: "Learn something else", done: false}
        ],
        nowread_id: nowread_id
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