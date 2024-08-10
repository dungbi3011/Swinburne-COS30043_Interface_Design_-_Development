<template>
  <br><h1>Post My Status</h1><br>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div>
          <label for="status">Status:</label>
          <input
            id="status"
            type="text"
            v-model="strStatus"
            @keyup.enter="add(strStatus)"
            autocomplete="off"
          />
          <button type="button" @click="add(strStatus)">Post</button>
          <ul>
            <li v-for="(status, index) in statPosts" :key="index">
              <span v-if="!isEditing[index]">{{ status }}</span>
              <button type="button" @click="remove(index)">Del</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  name: "TasksView",
  data() {
    return {
      statPosts: [],
      strStatus: "",
      modifiedStatus: "",
      isEditing: [],
    };
  },
  methods: {
    add(status) {
      if (status.trim() !== "") {
        this.statPosts.push(status);
        this.strStatus = "";
      }
    },
    remove(index) {
      this.statPosts.splice(index, 1);
      this.isEditing.splice(index, 1);
    },
    toggleEdit(index) {
      if (!this.isEditing[index]) {
        this.modifiedStatus = this.statPosts[index];
      } else {
        this.statPosts[index] = this.modifiedStatus.trim();
        this.modifiedStatus = "";
      }
      this.isEditing[index] = !this.isEditing[index];
    },
  },
};
</script>

  <style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

ul {
  margin-top: 5px;
}

li {
  margin-top: 3px;
  text-align: left;
}

#bt1 {
  margin-left: 5px;
}

input,
button {
  margin-left: 5px;
}
</style>
  