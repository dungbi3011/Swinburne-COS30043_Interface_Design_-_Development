<template>
  <div class="container">
    <h1>Welcome {{ Firstname }} {{ Lastname }}!</h1>
    <p>What is your name?</p>
    <div class="form-group">
      <label for="Fname">First Name</label>
      <input
        id="Fname"
        name="FirstName"
        type="text"
        v-model="Firstname"
        autocomplete="off"
      />
    </div>
    <div class="form-group">
      <label for="Lname">Last Name</label>
      <input
        id="Lname"
        name="LastName"
        type="text"
        v-model="Lastname"
        autocomplete="off"
      />
    </div>
    <div class="from-group">
      <input
        type="radio"
        id="ocean"
        name="ocean"
        value="ocean"
        v-model="preferance"
      />
      <label for="ocean">Ocean</label>
      <input
        type="radio"
        id="mountain"
        name="mountain"
        value="mountain"
        v-model="preferance"
      />
      <label for="ocean">Mountain</label>
    </div>
    <div class="image-container">
      <img
        v-if="preferance === 'ocean'"
        src="@/assets/ocean.jpg"
        alt="Ocean image"
      />
      <img
        v-else-if="preferance === 'mountain'"
        src="@/assets/mountain.jpg"
        alt="Mountain image"
      />
    </div>
  </div>
</template>

  <script>
export default {
  name: "HomeView",
  component: {},
  data() {
    return {
      Firstname: "",
      Lastname: "",
      preferance: "",
    };
  },
};
</script>

<style scoped>
h1 {
  margin-top: 20px;
}
.form-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}

label {
  margin-right: 10px;
}

.image-container {
  margin-top: 10px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-group input {
  align-self: baseline;
}
</style>

