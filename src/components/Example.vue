<template>
    <div class="panel">
      <h1>example title.</h1>
      <div class="panel-body">
        {{msg}}
      </div>
    </div>
</template>

<script>
    export default {
        name: "Example",
        data() {
          return {
            msg : 'Example msg(변수명) 들어간다'
          }
      }
    }
</script>

<style>
  .panel {padding:0 5px 20px; border:1px solid #000;}
</style>
