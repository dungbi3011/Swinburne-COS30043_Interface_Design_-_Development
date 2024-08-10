const app = Vue.createApp({	})
app.component("app-readjson", {
	data: function() {
		return  {
			url: 'https://jsonplaceholder.typicode.com/posts',
        	err: '',
        	objects: []
		}
	},

	template: '<h1>Requesting External Data</h1><br><p v-show="err">Error: {{err}}</p><div><ul><li v-for="o in objects">{{o.id}} - {{o.title}}</li></ul></div>',

	mounted() {
		var self = this;
		$.getJSON(self.url, function(data) {
			self.objects = data;
  		})
		.fail(function(xhr, textStatus, errorThrown) {
			// alert('getJSON request failed! ');
			self.err = 'Request failed: URL('+self.url+') => ' + xhr.status
		})
  	}
})

app.mount('#app')