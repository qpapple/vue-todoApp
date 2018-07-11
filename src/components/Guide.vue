<template>
  <section>
    <h1>텝플릿 문법</h1>

    <article>
      <h2>1 - 문자 보관법</h2>
      <p>{{msg}}</p>
      <p v-text="msg"></p>
      <p v-html="msg"></p>
    </article>

    <article>
      <h2>v-bind 속성 보관법</h2>
      <p v-bind:id="dynamicId">id입력</p>
    </article>
  </section>

</template>

<script>
    export default {
        name: "Guide",
        data() {
          return {
            msg : "hello<b>굵게</b>",
            dynamicId : "abcId"
          }
        }
    }
</script>

<style scoped>
  article {margin:40px 0;}
</style>
