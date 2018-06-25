import Vue from 'vue'
import Router from 'vue-router'

import found_music from '@/components/found_music'
import my_music from '@/components/my_music'
import friends from '@/components/friends'

import shop from '@/components/shop'
import musci_person from '@/components/music_person'
import client_download from '@/components/client_download'
import login from '@/components/login'

import recommend from '@/components/found_music/recommend'
import ranking_list from '@/components/found_music/ranking_list'
import song_list from '@/components/found_music/song_list'
import Radio from '@/components/found_music/Radio'
import singer from '@/components/found_music/singer'
import new_disc from '@/components/found_music/new_disc'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/found_music',
      name: 'found_music',
      component: found_music,
      children:[
	      {
	      	path: 'recommend',
	      	name: 'recommend',
	      	component: recommend,
	      },
	      {
	      	path: 'ranking_list',
	      	name: 'ranking_list',
	      	component: ranking_list,
	      },
	      {
	      	path: 'song_list',
	      	name: 'song_list',
	      	component: song_list,
	      },
	      {
	      	path: 'Radio',
	      	name: 'Radio',
	      	component: Radio,
	      },
	      {
	      	path: 'singer',
	      	name: 'singer',
	      	component: singer,
	      },
	      {
	      	path: 'new_disc',
	      	name: 'new_disc',
	      	component: new_disc,
	      }
	    ]
      
    },
    {
      path: '/my_music',
      name: 'my_music',
      component: my_music
    },
    {
      path: '/friends',
      name: 'friends',
      component: friends
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/musci_person',
      name: 'musci_person',
      component: musci_person
    },
    {
      path: '/client_download',
      name: 'client_download',
      component: client_download
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
