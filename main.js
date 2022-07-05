var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Dien thoai Samsung',
    },
    methods: {
        say:function(text){
            return 'Hello'+text;
        }
    }
});
//Reactivity
console.log(vueInstance);

setTimeout(() => {
    vueInstance.title = 'Dien thoai Nokia';
},3000);