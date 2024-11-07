<template>
  <div class="preview-container">
    <h2>Предварительный просмотр</h2>
    <div class="user-info">
      <p><strong>ФИО:</strong> {{ userData.fullName }}</p>
      <p><strong>Возраст:</strong> {{ userData.age }}</p>
      
      <h3>Дети</h3>
      <ul>
        <li v-for="(child, index) in userData.children" :key="index" class="child-info">
          {{ child.name }} - {{ child.age }} лет

        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const userData = ref({ fullName: '', age: '', children: [] });

onMounted(() => {
  const storedData = localStorage.getItem('userData');
  if (storedData) {
    userData.value = JSON.parse(storedData);
  }
});
</script>

<style scoped>
.preview-container {
  max-width: 500px;
  margin: 40px auto; 
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  background-color: #f4faff;
  text-align: center; 
  border: 1px solid #007BFF;
}

h2, h3 {
  color: #007BFF; 
  font-family: 'Arial', sans-serif;
}

.user-info {
  margin-top: 20px;
}

.child-info {
  background-color: #e0f7ff;
  padding: 10px;
  border-radius: 5px; 
  margin: 5px 0;
  text-align: left; 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>

