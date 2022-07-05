var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Data Binding',
        url: 'https://www.google.com',
        target: '_blank',
        price:10000
    },
    methods: {
        say:function(text){
            return 'Hello'+ text;
        },
        formatPrice(){
            const number = this.price;

           const price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number);
            return price;
        }
    }
});
//Reactivity
console.log(vueInstance);

