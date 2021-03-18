import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let router = new Router({
	mode: 'history',
	routes: [
		{
      path:'/',
      name: 'Home',
      component: () => 
      import ('./components/MainPage'),
    },
    {
      path:'/page2',
      name: 'PAGE2',
      component: () => 
      import ('./components/page2/CardOne2'),
    },
    {
      path:'/page3',
      name: 'PAGE3',
      component: () => 
      import ('./components/page3/CardOne3'),
    },
    {
      path:'/page4',
      name: 'PAGE4',
      component: () => 
      import ('./components/page4/CardTwo4'),
    },
    {
      path:'/page5',
      name: 'PAGE5',
      component: () => 
      import ('./components/page5/CardTwo5'),
    },
  ],
  })
  export default router