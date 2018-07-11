<template>
  <div class="todo_section">
    <h1>TodoList</h1>
    <div class="view_todo_article">
      <input type="text" placeholder="할일쓰기" v-model="newName" v-on:keyup.enter="createBtn(newName)" />
      <button type="button" class="btn_submit" @click="createBtn(newName)">등록</button>
    </div>

    <div class="list_todo_article">
      <ul>
        <li v-for="(todoItem, index) in todos">
          <p>{{index+1}} - {{todoItem.name}}</p>
          <button type="button" class="btn_delete" v-on:click="deleteBtn(index)">삭제</button>
        </li>

       <!-- <li>
          <p>2.차안에서 유투브 강의듣기</p>
          <button type="button" class="btn_delete">삭제</button>
        </li>

        <li>
          <p>3.vue.js 튜토리얼 따라해보기</p>
          <button type="button" class="btn_delete">삭제</button>
        </li>

        <li>
          <p>4.틈틈이 책보기</p>
          <button type="button" class="btn_delete">삭제</button>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TodoPage",
        data() {
          return {
            // msg : '?'

            newName : null,
            test: 'this 이것이다.',
            todos : [
              {name : 'todolist app 만들기'},
              {name : '차안에서 유투브 강의듣기'},
              {name : 'vue.js 튜토리얼 따라해보기'},
              {name : '책보기'},
              {name : 'git, restApi'}
              ]
          }
        },
        mounted() { // event가 들어가는구나~
         // alert('hi')
        },
        methods : {
          /* deleteBtn : function(event) {
             console.log(this, event)
             this.todos.splice(event,1)
          } */ // 이것도 사용 가능하다.
          deleteBtn(i) {
           this.todos.splice(i,1)
          },
          createBtn(name) {
            console.log(this, name, this.test);
            if(name !== null) {
              this.todos.push({name:name});
              this.newName = null;

            }
          }
        }
    }
</script>

<style scoped>
  * {list-style: none;}
  .todo_section {width:500px; margin:0 auto;}
  li {display:table; width:100%; text-align: left; border-bottom:1px solid #ddd; padding-top:5px;}
  ul {width:100%; padding:0;}
  input[type=text], p {width:90%; display:table-cell; margin:0;}
  input[type=text] {width:80%; height:30px;}
  .btn_submit, .btn_delete {display:table-cell; margin:0; min-width:40px; background:#fff;}
  .btn_submit {height:30px; line-height:30px;}
</style>
