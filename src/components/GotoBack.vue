<template>
    <BackButton 
      @backClick="goBack" 
      class="mt-4"
    />
</template>

<script>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>