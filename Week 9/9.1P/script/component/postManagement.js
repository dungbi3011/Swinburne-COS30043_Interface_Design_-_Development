const postManagement = {
    template: "<div class='container'><br><h1>Status Post App</h1><hr><div class = 'row'><p>Status:&ensp;<input type='text' v-model = 'status'/>&ensp;<button v-on:click = 'add(status)'>Post</button></p></div>      <div v-for='(status,index) in statusList'><p>{{status}}&ensp;<button v-on:click='remove(index)'>Del</button></p></div></div>",


    data : function() {
        return {
            statusList:[],
            status: "",
        };
    },

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
}

export default postManagement