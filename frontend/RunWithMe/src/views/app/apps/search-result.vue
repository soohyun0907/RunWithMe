<template>
  <div class="main-content">
    <breadcumb :page="'Search '" :folder="'Pages'" />

    <b-card>
      <b-row>
        <b-col md="12">
          <div class="ul-search-result__bar mb-30">
            <div class="card-title">Search Here</div>
            <b-form-input
              v-model="search"
              type="text"
              class="col-8"
              placeholder="search engine....."
            ></b-form-input>

            <h4 class="font-weight-300 mt-5">Search Result For "Vue.js"</h4>
            <small class="text-muted">About {{filterSearch.length}} result ( 0.20 seconds)</small>
          </div>

          <b-list-group flush>
            <b-list-group-item v-for="(list, key) in filterSearch" :key="key">
              <li class="list-group-item border-top-0">
                <h3>
                  <a href>{{ list.title }} </a>
                </h3>
                <a href class="text-15 text-success">{{ list.link }}</a>
                <p>{{ list.text }}</p>
              </li>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Icons"
  },
  data() {
    return {
      search: "",
      searchList: [
        {
          id: 1,
          title: "Vue.js",
          link: "https://vuejs.org",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima autem quam exercitationem eos, obcaecati aperiam delectus quia sapiente, deserunt quis atque dolorem ducimus recusandae perspiciatis mollitia excepturi ea rerum?"
        },
        {
          id: 2,
          title: "React.js",
          link: "https://reactjs.org",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima autem quam exercitationem eos, obcaecati aperiam delectus quia sapiente, deserunt quis atque dolorem ducimus recusandae perspiciatis mollitia excepturi ea rerum?"
        },
        {
          id: 3,
          title: "Angular.js",
          link: "https://angular.io",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima autem quam exercitationem eos, obcaecati aperiam delectus quia sapiente, deserunt quis atque dolorem ducimus recusandae perspiciatis mollitia excepturi ea rerum?"
        },
        {
          id: 4,
          title: "pug.js",
          link: "https://pugjs.org/",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima autem quam exercitationem eos, obcaecati aperiam delectus quia sapiente, deserunt quis atque dolorem ducimus recusandae perspiciatis mollitia excepturi ea rerum?"
        },
        {
          id: 5,
          title: "node.js",
          link: "https://nodejs.org/",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima autem quam exercitationem eos, obcaecati aperiam delectus quia sapiente, deserunt quis atque dolorem ducimus recusandae perspiciatis mollitia excepturi ea rerum?"
        },
        {
          id: 6,
          title: "express.js",
          link: "https://express.com/",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima autem quam exercitationem eos, obcaecati aperiam delectus quia sapiente, deserunt quis atque dolorem ducimus recusandae perspiciatis mollitia excepturi ea rerum?"
        }
      ]
    };
  },
  methods:{

  },
  computed: {
    filterSearch() {
      return this.searchList.filter(dataSearch => {
        return dataSearch.title.toLowerCase().match(this.search.toLowerCase());
        
        
      });
    }
  }
};
</script>
