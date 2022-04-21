import Vue from 'vue';
import VueRouter from 'vue-router';
import bus from '../utils/bus.js'
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';
import { store } from '../store/index.js'


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        
        {
            path : '/',
            redirect : '/news'
        },
        {
            path :'/news',
            name : 'news',
            // component : NewsView
            component: createListView('NewsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('fetched');
                        bus.$emit('end:spinner');
                        next();

                    })
                    .catch((error) => {
                        console.log(error)
                    });
                // console.log('to', to);
                // console.log('from', from);
                // console.log(next);
                // next();
            },
        },
        {
            path: '/jobs',
            name : 'jobs',
            // component: JobsView
            component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('fetched');
                        bus.$emit('end:spinner');
                        next();

                    })
                    .catch((error) => {
                        console.log(error)
                    });
                // console.log('to', to);
                // console.log('from', from);
                // console.log(next);
                // next();
            },
        },
        {
            path: '/ask',
            name : 'ask',
            // component: AskView
            component: createListView('AskView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('fetched');
                        // bus.$emit('end:spinner');
                        next();

                    })
                    .catch((error) => {
                        console.log(error)
                    });
                // console.log('to', to);
                // console.log('from', from);
                // console.log(next);
                // next();
            },
        },
        {
            // UserView에서 id를 params로 넘긴다
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        },
    ]

})