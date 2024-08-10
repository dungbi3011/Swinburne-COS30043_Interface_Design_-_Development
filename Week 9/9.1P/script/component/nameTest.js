const nameTest = {
    template:`
    <div class="container">
        <br>
        <h1>String Test</h1><hr>
        <div id="name">
            <p>Please enter your name: <input type="text" v-model="strName"></p>
            <div v-show="strName.trim().length > 0">
            <p v-if="strName.toLowerCase() == 'dung' ">Awesome Name!</p>
            <p v-else>{{ strName }} is not my name!</p>
          </div>
        </div>
    </div>
    `,

    data() {
        return {
            strName: ""
        };
      },

    computed: {
        isName: function() {
            return this.strName.toLowerCase() == "dung"
        }
    }
}

export default nameTest