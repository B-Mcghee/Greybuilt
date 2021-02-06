/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import "tailwindcss/tailwind.css"
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import BioList from './views/BioList.vue'

window.Vue = Vue;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: Home
    },
    //   {
    //     path: '/main',
    //     name: 'Main',
    //     component: Main
    //   },
      {
        path: '/about',
        name: 'About',
        component: () => { return import ('./views/BioList.vue')}
      },
    //   {
    //     path:'/about/:id',
    //     name: 'SingleBio',
    //     component: Bio,
    //     props: true
    //   },
    //   {
    //     path: '/projects',
    //     name: 'Project',
    //     component: () => { return import ('../views/ProjectList.vue') }
    //   },
    //   {
    //     path:'/project/:id',
    //     name:'SingleProject',
    //     component: Project,
    //     props: true
    //   },
    //   {
    //     path: '/contact',
    //     name: 'Contact',
    //     component: () => { return import ('../views/Contact.vue') }
    //   },
    //   {
    //     path: '/testimonials',
    //     name: 'Testimonial',
    //     component: () => { return import ('../views/TestimonialList.vue')}

    //   },
    //   {
    //     path: '/example',
    //     name: 'Example',
    //     component: Example
    //   },
    //   {
    //     path: '/calendar',
    //     name: 'Calendar',
    //     component: Calendar
    //   },
    //   {
    //     path: '/admin',
    //     name: 'Admin',
    //     component: Admin,
    //     props: true,
    //     children: [
    //       {
    //         path: 'Add',
    //         name: 'AddProject',
    //         component: AddProject,
    //         props: true
    //       }
    //     ]
    //   }

];

// Vue.use(VueApollo);
// const apolloClient = new ApolloClient({
//     // You should use an absolute URL here
//     uri: 'http://127.0.0.1:8000/graphql'
//   });

//   const apolloProvider = new VueApollo({
//     defaultClient: apolloClient,
//   });

const router = new VueRouter({
    mode: 'history',
    routes
});

// import moment from 'moment';

// Vue.filter("timeago", value => moment(value).fromNow());
// Vue.filter("longDate", value => moment(value).format("MMMM Do, YYYY"));
const app = new Vue({
    el: '#app',
    router,
    // apolloProvider
});

