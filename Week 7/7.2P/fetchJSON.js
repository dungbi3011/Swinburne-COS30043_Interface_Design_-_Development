const app = Vue.createApp({	})
app.component('app-readjson', {
        data: function() {
          return  {
				    err: "",
				    objs: "",
			    }
        },

        template: '<h1>Retrieving Data from a Text File</h1><br><div><table class="table table-striped table-hover"><thead><tr><th scope="col">Code</th><th scope="col">Description</th><th scope="col">CP</th><th scope="col">Type</th></tr></thead><tbody><tr v-for="o in objs"><td>{{ o.code }}</td><td>{{ o.desc }}</td><td>{{ o.cp }}</td><td>{{ o.type }}</td></tr></tbody></table></div>',

        mounted() { //Called after the instance has been mounted
          var self = this;
          var url = 'units.json';
          fetch(url)     //javascript fetch api
          .then( response => {
            if (!response.ok) {
              this.err = "Error (" + response.url + "): " + response.status;
            } else {
              return response.json()
            }
          })
          .then( data =>{
            //This is the data you wanted to get from url
            self.objs = data;
          })
          .catch(error => {
            self.err=error
          });

          }
})
app.mount('#app')