import http from "@/utils/http-common";


export default {
  state: {
    events: []
  },
  getters: {
    events: state => state.events,
  },
  mutations: {
    mutateMainEvents(state,events){
      state.events = events
    },
  },
  actions: {
    getChallengesEvents(context) {
      var list = [];
      http
      .get("challenges/ing")
      .then(({data}) => {
        if(data.status==200){
          let obj;
          data.data.forEach(element => {
            obj = new Object();
            obj.id = element.challengeId;
            obj.title = element.title;
            obj.challengeImg = element.challengeImg;
            obj.startTime = element.startTime;
            obj.endTime = element.endTime;
            list.push(obj);
          });
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      });
      
      http
        .get("challenges/comingsoon")
        .then(({data}) => {
          if(data.status==200){
            let obj;
            data.data.forEach(element => {
              obj = new Object();
              obj.id = element.challengeId;
              obj.title = element.title;
              obj.challengeImg = element.challengeImg;
              obj.startTime = element.startTime;
              obj.endTime = element.endTime;
              list.push(obj);
            });
          }
        })
        .catch((error) => {
          console.log(error);
          return;
        });

      console.log(list);
      // localStorage.setItem("events",this.events);
      context.commit("events", list);
    },
  },
};
