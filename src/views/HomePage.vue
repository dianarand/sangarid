<script setup lang="ts">
</script>

<template>
  <main>
    <div class="main-content">
      <h1>Sangarid</h1>
      <p>Eesti guild World of Warcraftis</p>
      <p>Tegutseme Tarren Mill realmis Horde poolel</p>
      <p>Oodatud huvilised ka mujalt</p>
    </div>
    <p>
      <a href="/discord"><button>Liitu Discordiga</button></a>
    </p>
    <p>
      <a href="https://raider.io/guilds/eu/tarren-mill/Sangarid"><img src="/io-logo.png" class="icon"></a>
      <a href="https://worldofwarcraft.blizzard.com/en-gb/guild/eu/tarren-mill/sangarid"><img src="/wow-logo.png" class="icon"></a>
      <a href="https://www.warcraftlogs.com/guild/eu/tarren-mill/Sangarid"><img src="/logs-logo.png" class="icon"></a>
    </p>
  </main>
</template>

<style>
h1 {
  font-size: 2.25rem;
  line-height: 1.3;
  letter-spacing: 0.5rem;
  font-weight: 600;
  margin: 0 0 2rem 0;
}

p {
  font-size: 0.8rem;
  letter-spacing: inherit;
  margin: 0 0 1rem 0;
  display: block;
}

button {
  background-color: var(--accent-color);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 500;
  padding: 1rem 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: inherit;
  display: inline-block;
}

.main-content {
  border: 0;
  border-style: solid;
  border-color: white;
  border-top-width: 1px;
  border-bottom-width: 1px;
  max-width: 100%;
  padding: 3rem 2rem;
  display: block;
}

@media (max-height: 700rem) {
  .main-content {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}

@media (min-height: 700rem) {
  .main-content {
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
  }
}

.icon {
  width: 50px; 
  height: 50px;
  margin: 5px;
}
</style>
