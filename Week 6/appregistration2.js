const vuetify = Vuetify.createVuetify();
const app = Vue.createApp
({
    methods: {
        validate() {
            this.$refs.myForm.validate(); // validating all inputs
        },
        toggle() {
            this.show = !this.show;   //showing Terms and Conditions
        },
    },

    data: () => (
    {
        valid: true,
        firstName: "",
        lastName: "",
        username: "",
        pwd: "",
        pwd2: "",
        email: "",
        address: "",
        suburb: "",
        postcode: "",
        phoneNum: "",
        show: false,

        nameRules: [
            (v) => !!v || "Name required",
            (v) => /^[A-Za-z ]+$/.test(v) || 'Name cannot contain numbers or special symbols'
        ],
        usernameRules: [
            (v) => !!v || "User name required",
            (v) => (v && v.length >= 3) || "User name must be at least 3 characters",
        ],

        pwdRules: [
          (v) => !!v || "Password required",
          (v) => (v && v.length >= 8) || "Password must contain at least 8 characters",
          (v) => /[$%^&*#]/.test(v) || "Password must contain at least 1 special character ($, %, #, ^, &, or *)",
        ],

        emailRules: [
          (v) => !!v || "Email required",
          (v) => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) || "Email must be valid",
        ],

        phoneNumRules: [
            (v) => !!v || "Phone number required",
            (v) => (v && v.length == 10) || "Phone number must have 10 digits",
            (v) => /[0-9]/.test(v) || "Phone number must be numbers",
            (v) => v.startsWith("04") || "Phone number must start with 04",
        ],

        postcodeRules: [
          (v) => !!v || "Postcode required",
          (v) => (v && v.length == 4) || "Postcode must be exactly 4 digits",
          (v) => /[0-9]/.test(v) || "Postcode must be exactly 4 digits",
        ],

        addressRules: [],
        suburbRules: [],

    }),

    watch: {
        firstName() {
            this.$refs.myForm.validate();
        },
        lastName() {
            this.$refs.myForm.validate();
        },
        username() {
            this.$refs.myForm.validate();
        },
        pwd() {
            this.$refs.myForm.validate();
        },
        email() {
            this.$refs.myForm.validate();
        },
        address() {
            this.$refs.myForm.validate();
        },
        suburb() {
            this.$refs.myForm.validate();
        },
        postcode() {
            this.$refs.myForm.validate();
        },
        phoneNum() {
            this.$refs.myForm.validate();
        },
    },

});

app.use(vuetify);
app.mount("#app");