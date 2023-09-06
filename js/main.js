const { createApp } = Vue;

createApp({
  data() {
    return {
      numberMails: 10,
      listMails: [],
      doneList: false,
    };
  },

  methods: {
    generateMail() {
      for (let i = 0; i < this.numberMails; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            const result = response.data.response;
            // console.log(result);
            this.listMails.push(result);
          });
      }
    },
  },

  mounted() {
    this.generateMail();
  },
}).mount("#app");
