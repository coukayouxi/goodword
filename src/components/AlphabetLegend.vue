<script setup>
import { WORD_MAP } from '../data/words'

defineEmits(['pick'])
</script>

<template>
  <section class="legend">
    <h2>美好词表 · A → Z（点击可直接追加字母）</h2>
    <div class="legend-grid">
      <div
        v-for="(v, k) in WORD_MAP"
        :key="k"
        class="legend-item"
        :title="'追加字母 ' + k"
        @click="$emit('pick', k)"
      >
        <b>{{ k }}</b>
        <span class="legend-word">{{ v.word }}</span>
        <span class="legend-meaning">{{ v.meaning }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.legend {
  position: relative;
  z-index: 1;
  width: min(720px, 100%);
  margin-top: 28px;
  text-align: center;
}
.legend h2 {
  font-size: 15px;
  color: var(--ink-soft);
  font-weight: 600;
  margin-bottom: 14px;
  letter-spacing: 1px;
}
.legend-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 8px;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, .65);
  border: 1px solid rgba(255, 255, 255, .8);
  cursor: pointer;
  transition: transform .15s, background .15s, box-shadow .15s;
  text-align: left;
}
.legend-item:hover {
  transform: translateY(-2px);
  background: #fff;
  box-shadow: 0 6px 14px -6px rgba(124, 92, 240, .3);
}
.legend-item b {
  color: var(--accent);
  font-size: 14px;
  min-width: 14px;
}
.legend-word {
  font-weight: 600;
  font-size: 13px;
  color: #4a3f6b;
}
.legend-meaning {
  margin-left: auto;
  font-size: 12px;
  color: var(--ink-soft);
}
</style>
