<template>
<div>
  Two
  {{$route.params}}
  <button @click="$router.push('/two/' + Math.floor(Math.random() * 10))">rand param</button>
  <button @click="$router.push('/')">go index</button>
</div>
</template>
