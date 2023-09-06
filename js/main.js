const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello World",
      listMails: [],
    };
  },

  methods: {
    generateMail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            const result = response.data.response;
            // console.log(result);
            this.listMails.push(result);
          });
      }

      console.table(this.listMails);
    },
  },

  mounted() {
    this.generateMail();
  },
}).mount("#app");
