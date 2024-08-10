const app = Vue.createApp({ })

app.component ("app-mypost", // indicating the component tag
{
    // defining data to be used in the component
    data : function() {
        return {
            statusList:[],
            status: "",
        };
    },

    // define the template for the component
    template: " <div class = 'row'><p>Status:&ensp;<input type='text' v-model = 'status'/>&ensp;<button v-on:click = 'add(status)'>Post</button></p></div>      <div v-for='(status,index) in statusList'><p>{{status}}&ensp;<button v-on:click='remove(index)'>Del</button></p></div>",

    // defining the methods for add and remove status
    methods : {
        add: function (status) { //push status into statPosts array
            if (this.status.trim() != "") {
                this.statusList.push(status);
                this.status = "";
            } else alert("Status can not be empty");
        },

        remove : function (index) { //delete status from statPost using index
            this.statusList.splice (index, 1); //removing status at position = index
        },
    },
});
app.mount('#app')
