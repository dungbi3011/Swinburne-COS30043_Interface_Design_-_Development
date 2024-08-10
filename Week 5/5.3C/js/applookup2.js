var units = [
    {
      code: "ICT10001",
      desc: "Problem Solving with ICT",
      cp: 12.5,
      type: "Core",
    },
    { code: "COS10005",
      desc: "Web Development",
      cp: 12.5,
      type: "Core",
    },
    {
      code: "INF10003",
      desc: "Introduction to Business Information Systems",
      cp: 12.5,
      type: "Core",
    },
    {
      code: "INF10002",
      desc: "Database Analysis and Design",
      cp: 12.5,
      type: "Core",
    },
    {
      code: "COS10009",
      desc: "Introduction to Programming",
      cp: 12.5,
      type: "Core",
    },
    {
      code: "INF30029",
      desc: "Information Technology Project Management",
      cp: 12.5,
      type: "Core",
    },
    {
      code: "ICT30005",
      desc: "Professional Issues in Information Technology",
      cp: 12.5,
      type: "Core",
    },
    {
      code: "ICT30001",
      desc: "Information Technology Project",
      cp: 12.5,
      type: "Core",
    },
]

const Unit = {
    data() {
      return { units };
    },

template:
`<div>
    <h1>Unit Code: {{ $route.params.id }}</h1>

    <ul v-for="unit in filteredUnits">
        <li>{{unit.code}}</li>
        <li>{{unit.desc}}</li>
        <li>{{unit.cp.toFixed(2)}}</li>
        <li>{{unit.type}}</li>
    </ul>
</div>`,

computed: {
    filteredUnits: function () {
        return this.units.filter((s) =>
            s.code.toLowerCase().match(this.$route.params.id.toLowerCase())
        );
    },
},

};

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: "/unit/:id",
            component: Unit,
        },
    ],
});

const app = Vue.createApp({});

app.component("app-lookup2", {
    data: function () {
        return {
            units,
        };
    },

template: `
<div>
    <h1>Unit Information System</h1>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="row">Code</th>
                <th scope="row">Description</th>
                <th scope="row">More Info</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="s in units">
                <td>{{ s.code }}</td>
                <td>{{ s.desc }}</td>
                <td><router-link :to="{ path:'/unit/'+ s.code }">Show details</router-link></td>
            </tr>
        </tbody>

    </table>
    <router-view></router-view>
</div>`,
});

app.use(router);
app.mount("#app");