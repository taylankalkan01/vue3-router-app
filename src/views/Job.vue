<template>
  <div>
      <h1>Jobs Title: </h1>
      <br>
      <div v-for="job in jobs " :key="job.id" class="job">
          <router-link  :to="{name : 'JobDetails', params: { id: job.id, title:job.title }}">
                <h2>{{job.title}}</h2>
          </router-link>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[
                {title:"FrontEnd Developer",    id:1,   details : "html-css-js-vue"},
                {title:"Mobile Developer",      id:2,   details : "mobile dev"},
                {title:"Security",              id:3,   details : "security"},
                {title:"BackEnd Developer",     id:4,   details : "java, Spring boot"},
                {title:"DevOps engineer",       id:5,   details : "AWS"}
            ]
        }
    },
}
</script>

<style>
.job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 15px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.job h2:hover{
    background: #ddd;
}
.job a{
    text-decoration: none;
}
</style>