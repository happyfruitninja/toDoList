const app = Vue.createApp({
  data() {
    return { message: "Hello!" };
  },
  methods: {
    newList() {
        console.log("added");
    },
    modifyList() {},
    deleteList() {},
  },
});
