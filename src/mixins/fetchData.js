export default {
  data() {
    return {
      api: {},
      loading: true
    }
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api = null;
      fetch(`http://localhost:3000${url}`)
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          this.api = data;
          this.loading = false;
        }, 1500);

      }); 
    }
  },
}