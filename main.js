var vueInstance = new Vue({
    el: '#app',
    data: {
        x: 5,
        clientX: 0,
        clientY: 0,
    },
    
    methods: {
        handleClick(e,x){
            console.log('click',e);
            this.x++;
        },
        handleMousemove(e){
            console.log('mousemove',e);
            this.clientX= e.clientX;
            this.clientY= e.clientY;
        }

    }
});
//Reactivity
console.log(vueInstance);

