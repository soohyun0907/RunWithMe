// board => list => cardList
const state = {
    boardList: [
        {
            id: 1,
            title: "Gull Vue",
            list: [
                {
                    id: 1,
                    title: 'Drag and Drop',
                    cardList: [
                        {
                            id: 1,
                            title: "Beautiful Duo",
                            coverImage: require("@/assets/images/products/headphone-1.jpg"),
                            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                            comments: [
                                {
                                    id: 1,
                                    
                                    image: require("@/assets/images/faces/2.jpg"),
                                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                                    time: new Date()
                                },
                                {
                                    id: 2,
                                    
                                    image: require("@/assets/images/faces/3.jpg"),
                                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr`,
                                    time: new Date()
                                },
                                {
                                    id: 3,
                                    
                                    image: require("@/assets/images/faces/5.jpg"),
                                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's `,
                                    time: new Date()
                                },
                                {
                                    id: 4,
                                    
                                    image: require("@/assets/images/faces/4.jpg"),
                                    text: `Lorem Ipsum is simply dummy text.`,
                                    time: new Date()
                                },
                            ]
                        },
                        {
                            id: 2,
                            title: "Nested Dnd",
                            coverImage: require("@/assets/images/products/headphone-1.jpg"),
                            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                            comments: [
                                {
                                    id: 1,
                                    uid: "7863a6802ez0e277a0f98534",
                                    image: require("@/assets/images/faces/2.jpg"),
                                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                                    time: new Date()
                                },
                                {
                                    id: 2,
                                    uid: "7863a6802ez0e277a0f98534",
                                    image: require("@/assets/images/faces/2.jpg"),
                                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                                    time: new Date()
                                }
                            ]
                        }
                        
                    ]
                },
                {
                    id: 2,
                    title: 'Drag and Down',
                    cardList: [
                        {
                            id: 1,
                            title: "Beautiful Duo Second",
                            coverImage: require("@/assets/images/products/headphone-1.jpg"),
                            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                            comments: [
                                {
                                    id: 1,
                                    uid: "7863a6802ez0e277a0f98534",
                                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                                    time: new Date()
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Beautiful Duo Third",
                            coverImage: require("@/assets/images/products/headphone-1.jpg"),
                            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                            comments: [
                                {
                                    id: 1,
                                    uid: "7863a6802ez0e277a0f98534",
                                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                                    time: new Date()
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            id: 2,
            title: "Gull Angular",
            list: [
                {
                    id: 1,
                    title: 'Drag and Down',
                    cardList: [
                        {
                            id: 1,
                            title: "Nested Duo",
                            coverImage: require("@/assets/images/products/headphone-1.jpg"),
                            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                            comments: [
                                {
                                    id: 1,
                                    uid: "7863a6802ez0e277a0f98534",
                                    image: require("@/assets/images/faces/2.jpg"),
                                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                                    time: new Date()
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Nested Duo",
                            coverImage: require("@/assets/images/products/headphone-1.jpg"),
                            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                            comments: [
                                {
                                    id: 1,
                                    uid: "7863a6802ez0e277a0f98534",
                                    image: require("@/assets/images/faces/4.jpg"),
                                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                                    time: new Date()
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ],
    editBoardList:'',
    editCardList: '',
    newList:'',
    newBoardList:''
    
}

const getters = {
    getBoardList: state => state.boardList,
    getEditBoardList: state => state.editBoardList,
    getEditCardList: state => state.editCardList,
    getNewBoardList: state => state.newBoardList

};

const actions = {
    addBoard({ commit }, data) {
        commit('ADD_BOARD', data)
    },
    editBoardList({ commit }, data) {
        commit('EDIT_SCRUMBOARD', data)
    },
    editCardList({ commit }, data){
        commit('EDIT_CARD_LIST', data)
    },
    addList({ commit },  data) {
        commit('ADD_LIST', data)
    },
    addCard({ commit }, data  ) {
        commit('ADD_CARD', data )
    },
    addComment({ commit }, data  ) {
        commit('ADD_COMMENT', data )
    },
    updateCardList({ commit }, data){
        commit('UPDATE_CARDLIST', data)
    },
    updateBoard({ commit }, data){
        commit('UPDATE_BOARD', data)
    }
};

const mutations = {
    ADD_BOARD(state, data) {
        state.boardList.push({
            title:"untitled",
            list:[
                
            ],
            
        })
        console.log(state.boardList);
        
               
    },
    
    UPDATE_BOARD(state, data){
        console.log('updating',data);
        
        
    },
    EDIT_SCRUMBOARD(state, data) {
        state.editBoardList = data
        // console.log(state.editBoardList = data);
        
    },
    EDIT_CARD_LIST(state, data) {
        state.editCardList = data
        // console.log(state.editCardList = data, 'working');
    },
    ADD_LIST(state, data) {
        state.editBoardList.list.push({
            id: state.editBoardList.list.length + 1,
            title: data,
            cardList:[]
        });   

        
        console.log(state.editBoardList.list, data, state.boardList);
        
    },
    
    ADD_CARD(state, data) {
        let {list, cardListTitle} = data
       
        list.cardList.push({
            id:list.cardList.length + 1,
            title: cardListTitle,
            comments: [],
            
        })
            
    // console.log(list.cardList.length, cardListTitle, state.boardList);
    
    },
    ADD_COMMENT(state, data){
        if(data == ''){     
            console.log( state.editCardList.comments ,data);
        }
        else{
            state.editCardList.comments.push({
                image: require("@/assets/images/faces/1.jpg"),
                text: data,
                time: new Date()
            })
        }
          
    },
    UPDATE_CARDLIST(state, data){
        
        
        console.log('Testing Update',state.editBoardList = data);
        
    },
    

};

export default {
    state,
    getters,
    actions,
    mutations
}