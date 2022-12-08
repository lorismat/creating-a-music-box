<template>
  <div>
    <!-- 
      <header>
        <nav>
          <ul>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/documentation">Documentation</NuxtLink></li>
          </ul>
        </nav>
      </header>
    -->
    <TheHomePage />
  </div>
</template>

<script setup>
// testing state without the store 
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>