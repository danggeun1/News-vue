import { fetchNewsList, fetchAsksList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';

export default {


    // FETCH_NEWS(context) {
    //     fetchNewsList()
    //         .then(response => {
    //             console.log(response);
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // },

    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },

    async FETCH_ASKS( {commit}) {
        const response = await fetchAsksList();
        commit('SET_ASKS', response.data);
        return response;
    },

    async FETCH_JOBS ( {commit} ) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);

        }
        
    },
    // FETCH_ASKS({ commit }) {
    //     fetchAsksList()
    //         .then(({ data }) => {
    //             // console.log(response);
    //             commit('SET_ASKS', data);
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // },
    // FETCH_JOBS({ commit }) {
    //     fetchJobsList()
    //         .then(({ data }) => {
    //             // console.log(response);
    //             commit('SET_JOBS', data);
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data)
            })
            .catch( error => {
                console.log(error)
            })
    },
    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
            .then(({ data }) => {
                // console.log(response);
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error)
            })
    },

    async FETCH_LIST( {commit}, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data)
        return response;
    },
    // FETCH_LIST( {commit}, pageName) {
    //     fetchList(pageName)
    //     .then( ({data}) => {
    //         commit('SET_LIST', data)
    //     })
    //     .catch( error => {
    //         console.log(error)
    //     }) 

    // }
}