var studMarks =  [
  {"name": "Amy", "mark": "90" },
  {"name": "Bill", "mark": "80" },
  {"name": "Casey", "mark": "78" },
  {"name": "David", "mark": "84" },
  {"name": "Emily", "mark": "96" },
  {"name": "Frank", "mark": "86" },
  {"name": "Gary", "mark": "74" },
  {"name": "Hank", "mark": "68" },
  {"name": "Ian", "mark": "48" },
  {"name": "James", "mark": "90" },
  {"name": "Karl", "mark": "38" },
  {"name": "Larry", "mark": "74" },
  {"name": "Mary", "mark": "90" },
  {"name": "Nara", "mark": "70" },
  {"name": "Obvilia", "mark": "60" },
  {"name": "Perry", "mark": "80" },
  {"name": "QDung", "mark": "100" },
  {"name": "Rude", "mark": "50" },
  {"name": "Sam", "mark": "46" },
  {"name": "Terry", "mark": "30" },
  {"name": "Uvuevuevue", "mark": "50" },
  {"name": "Vi", "mark": "63" },
  {"name": "William", "mark": "76" },
  {"name": "Xavier", "mark": "70" },
  {"name": "Yang", "mark": "84" },
  {"name": "Zack", "mark": "96" },
]

const studentMarks = {
    template: `
    <div class="container">
    <div>
          <br>
    		  <h1>Student Marks</h1><hr>
          <br>

          <v-table style="table, th, td {border: 1px solid black;}">
           <template v-slot:default>
            <thead>
              <tr>
                <th scope="col">Student</th>
                <th scope="col">Marks</th>
              </tr>
            </thead>
            <!-- Using v-for to loop units and list them -->
            <tbody>
              <tr v-for="unit in getItems" :key="unit.code"  >
                <td>{{unit.name}}</td>
                <td>{{unit.mark}}</td>
              </tr>
            </tbody>
           </template>
          </v-table>
      	</div><br>

        <!-- Vue Paginate template -->
        <paginate 
          :page-range="3" 
          :page-count="9"    
          :click-handler="clickCallback" 
          :prev-text="'Prev Page'" 		
          :next-text="'Next Page'" 
          :container-class="'pagination'" 
          :page-class="'page-item'"
          :active-class="'active'"
          >
        </paginate>
        </div>
        `,
    components: {
        paginate: VuejsPaginateNext,
    },
    data: function() {
        return {
          currentPage: 1,
          units: studMarks
        }
    },
    computed: {
        getItems: function() {
            let current = this.currentPage * 3;  // total 24 units, suppose 2 per page, 12 pages
            let start = current - 3;
            return this.units.slice(start, current);
          }
      },
    methods: {
        //sets the clicked page
        clickCallback: function(pageNum) {
          this.currentPage = Number(pageNum);
        }
    }
}

export default studentMarks