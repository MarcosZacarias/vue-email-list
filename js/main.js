const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello World",
    };
  },

  methods: {
    generateMail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          const result = response.data.response;
          console.log(result);
          this.message = result;
        });
    },
  },

  mounted() {
    this.generateMail();
  },
}).mount("#app");
