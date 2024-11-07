<template>
<header>
        <div class="logo">
            <img src="" alt="Alef Development">
        </div>
        <nav>
            <p href="#">Форма</p>
            <p href="#">Превью</p>
        </nav>
    </header>
</template>
  
<script setup>

</script>
  
<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header .logo img {
    width: 100px;
}

nav {
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 20px;
}

nav a {
    color: #888;
    text-decoration: none;
    font-size: 18px;
}

</style>
  
  