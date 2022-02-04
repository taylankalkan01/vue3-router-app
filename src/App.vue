<template>
  <div class="container">
   
    <div class="mb-2">

      <router-link class="nav-link" active-class="active" :to="{ name : 'HomePage' }" >
      Home Page
    </router-link>

     <router-link class="nav-link" active-class="active" :to="{name : 'AboutPage'}">
      About me
    </router-link>
    
      <router-link class="nav-link" active-class="active" :to="{name : 'DetailPage'}">
      Details
    </router-link>

    <router-link class="nav-link" active-class="active" :to="{name : 'JobPage'}">
      Jobs
    </router-link>
  
    </div>

<router-view/>
 
  </div>
</template>

<style>
.nav-link {
  padding: 5px 10px;
  text-decoration: none;
  border: 1px solid #fa6558;
  color: #fa6558;
  display: inline-block;
  margin-right: 5px;
  margin-top: 5px !important;
}

.active {
  background-color: #fa6558;
  color: #fff;
}
</style>
