const app = Vue.createApp({ })

app.component ("app-mypost", // indicating the component tag
{
    // defining data to be used in the component
    data : function() {
        return {
            commentList:[],
            comment: "",
        };
    },

    // define the template for the component
    template: '<div class="row"><p>Comment:&ensp;<input type="text" v-model="comment">&ensp;<button class="add_comment" type="button" v-on:click="add(comment)">Add Comment</button></p></div>    <div v-for="comment in commentList"><p>- {{comment}}</p></div>',

    // defining the methods for add and remove status
    methods : {
        add: function (comment) { //push status into statPosts array
            if (this.comment.trim() != "") {
                this.commentList.push(comment);
                this.comment = "";
            } else alert("Comment can not be empty");
        },
    },
});
app.mount('#app')