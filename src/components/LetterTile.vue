<script setup>
defineProps({
  letter: { type: String, required: true },
  word: { type: String, required: true },
  meaning: { type: String, required: true },
  index: { type: Number, default: 0 }
})
</script>

<template>
  <div class="tile" :style="{ animationDelay: index * 0.06 + 's' }">
    <span class="tile-letter">{{ letter }}</span>
    <span class="tile-word">{{ word }}</span>
    <span class="tile-meaning">{{ meaning }}</span>
  </div>
</template>

<style scoped>
.tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  min-width: 92px;
  padding: 12px 14px 10px;
  border-radius: 16px;
  background: linear-gradient(160deg, #ffffff, #f6f2ff);
  border: 1px solid #eee6ff;
  box-shadow: 0 6px 16px -6px rgba(124, 92, 240, .25);
  animation: pop .45s cubic-bezier(.34, 1.56, .64, 1) both;
}
@keyframes pop {
  from {
    opacity: 0;
    transform: translateY(14px) scale(.85);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.tile-letter {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
}
.tile-word {
  font-weight: 700;
  font-size: 15px;
  color: #4a3f6b;
}
.tile-meaning {
  font-size: 12px;
  color: var(--ink-soft);
}
</style>
