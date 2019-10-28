/**
 * Here, we define all the front-end routes, setting the components that will be
 * rendered in each of them. This routes are thinked to be used with VueRouter,
 * so we follow it's conventions.
 */

import index from '@/sections/Index.vue';
import work from '@/sections/Work.vue';
import about from '@/sections/About.vue';
import contact from '@/sections/Contact.vue';

const Index = {
    path: '/',
    component: index
};

const Work = {
    path: '/work',
    component: work
};

const About = {
    path: '/about',
    component: about
};

const Contact = {
    path: '/contact',
    component: contact
};

export default [Index, Work, About, Contact];