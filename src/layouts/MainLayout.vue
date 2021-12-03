<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white" elevated>
      <q-toolbar>

        <q-toolbar-title>
        </q-toolbar-title>

        <div class="row q-gutter-lg items-center">
          <q-icon name="zoom_out" color="grey-7" size="22px"/>
          <div class="text-grey-6">Reset</div>
          <q-icon name="zoom_in" color="grey-7"  size="22px"/>
          <q-avatar color="blue" text-color="white" icon="person"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="bg-blue-9 text-grey-2"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <div >
        <q-avatar size="100px" font-size="52px" color="blue-9" text-color="grey-3">Q</q-avatar>
        <div class="q-mt-md q-ml-md text-white" style="font-size: 24px">iQuantile LLC</div>
        <div class="q-mtb-md q-ml-md text-grey-4" style="font-size: 14px">Established in 2014</div>
      </div>
      <q-list>
        <q-item
          v-for="item in menuItems" :key="item.title"
          clickable
        >
          <q-item-section
            v-if="item.icon"
            avatar
          >
            <q-icon :name="item.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  data(){
    return{
      leftDrawerOpen: true,
      menuItems: [
        {
          title: 'Dashboard',
          icon: 'dashboard',
        },{
          title: 'User & Permission',
          icon: 'public_off',
        },{
          title: 'Organization',
          icon: 'games',
        },{
          title: 'Budget',
          icon: 'paid',
        },{
          title: 'Personnel',
          icon: 'person',
        },{
          title: 'Programs',
          icon: 'assignment',
        },{
          title: 'Projects',
          icon: 'fact_check',
        },{
          title: 'Client Intake',
          icon: 'work',
        },{
          title: 'Case Management',
          icon: 'report',
        },{
          title: 'Training',
          icon: 'snowshoeing',
        },{
          title: 'Events',
          icon: 'calendar_today',
        },
      ]
    }
  }
}
</script>
