<template>
  <div>
    <main>
      <section class="form-container">
        <h2>Персональные данные</h2>
        <div class="input-group">
          <label>ФИО</label>
          <input type="text" v-model="fullName" placeholder="Введите ваше ФИО" />
        </div>
        <div class="input-group">
          <label>Возраст</label>
          <input type="number" v-model="age" placeholder="Введите ваш возраст" />
        </div>

        <h2>Дети (макс. 5)
          <button v-if="childArray.length < 5" @click="addChild" class="add-child">+ Добавить ребенка</button>
        </h2>

        <div id="children-container" class="children">
          <div 
            class="child" 
            v-for="(child, index) in childArray" 
            :key="index"
          >
            <div class="input-group">
              <label>Имя</label>
              <input type="text" v-model="child.name" placeholder="Имя ребенка" />
            </div>
            <div class="input-group">
              <label>Возраст</label>
              <input type="number" v-model="child.age" placeholder="Возраст ребенка" />
            </div>
            <a href="#" class="delete" @click.prevent="removeChild(index)">Удалить</a>
          </div>
        </div>

        <button @click="checkAndSaveData" class="save">Сохранить</button>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

let fullName = ref('');
let age = ref(null);
const childArray = ref([]);

const addChild = () => {
  if (childArray.value.length < 5) {
    childArray.value.push({ name: '', age: null });
  }
};

const removeChild = (index) => {
  childArray.value.splice(index, 1); 
};

const checkAndSaveData = () => {

  if (!fullName.value || age.value === null) {
    alert("Пожалуйста, заполните обязательные поля для родителя (ФИО и возраст).");
    return;
  }

  for (let child of childArray.value) {
    if (!child.name || child.age === null) {
      alert("Пожалуйста, заполните обязательные поля для всех детей (имя и возраст).");
      return;
    }
  }


  const userData = {
    fullName: fullName.value,
    age: age.value,
    children: childArray.value,
  };

  localStorage.setItem('userData', JSON.stringify(userData)); 

  router.push('/setting');
};
</script>

  
<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

body {
    background-color: #fff; 
    color: #333;
}


main {
    display: flex;
    justify-content: center;
    padding: 40px;
}

.form-container {
    width: 500px;
    background-color: transparent;
    padding: 20px 40px;
    border: none; 
    box-shadow: none; 
    border-radius: 8px;
}


h2 {
    font-size: 20px;
    color: #333;
    margin-bottom: 15px; 
}

.add-child {
    margin-left: 120px; 
}


.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.input-group label {
    font-size: 14px;
    color: #888;
    margin-bottom: 5px;
}

.input-group input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    color: #333;
}

.children {
    margin-top: 20px;
}

.child {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
}

.delete {
    color: #00aaff;
    text-decoration: none;
    font-size: 14px;
}

.add-child {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 10px 15px;
    background-color: #fff;
    border: 2px solid #00aaff;
    color: #00aaff;
    border-radius: 20px; 
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease; 
}

.add-child:hover {
    background-color: #00aaff; 
    color: #fff;
}



.save {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #00aaff;
    color: #fff;
    border: none;
    border-radius: 20px; 
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease; 
}

.save:hover {
    background-color: #0088cc; 
}



  </style>
  
  