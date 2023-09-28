const { createApp } = Vue;

createApp({
  data() {
    return {
      disks: [],
    };
  },

  mounted() {
    axios
      .get("http://localhost:8888/php-dischi-json/backend/data/dischi.json")
      .then((response) => {
        this.disks = response.data;
        console.log(this.disks);
      });
  },
}).mount("#app");
