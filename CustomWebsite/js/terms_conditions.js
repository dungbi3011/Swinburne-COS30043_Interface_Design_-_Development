const vuetify = Vuetify.createVuetify();
const app = Vue.createApp
({
    methods: {
        toggle() {
            this.show = !this.show;   //showing Terms and Conditions
        },
    },

    data: () => ({ show: false, }),
});

app.use(vuetify);
app.mount("#app");