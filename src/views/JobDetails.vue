<template>
  <div>
      <h1>Job Details Page</h1>
      <p>The job id is {{id}}</p>
      <br>
      <p>The job title is {{title}}</p>
    
  </div>
</template>

<script>
export default {
    props: ['id','title'],
}
</script>

<style>
.detail{
  color: blue;
}
</style>