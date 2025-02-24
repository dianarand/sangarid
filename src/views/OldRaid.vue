<template>
    <main>
      <div class="main-content">
        <p>{{ name }} raid on lõppenud</p>
        <p>Värskeimad raidiplaanid leiad Discordist</p>
      </div>
      <p>
        <a href="/discord"><button>Liitu Discordiga</button></a>
      </p>
    </main>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
