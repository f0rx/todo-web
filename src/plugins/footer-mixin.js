let footerMixin = {
  data: () => ({
    folderModal: false,
    taskModal: false,
    fab: false
  }),

  methods: {
    createFolder() {
      this.folderModal = false;
    },

    createTask() {
      this.taskModal = false;
    }
  }
};

export default footerMixin;