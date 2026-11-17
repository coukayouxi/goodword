<script setup>
import LetterTile from './LetterTile.vue'

defineProps({
  tokens: { type: Array, required: true },
  sentence: { type: String, required: true },
  copied: { type: Boolean, default: false }
})
defineEmits(['copy'])
</script>

<template>
  <div>
    <div class="divider"><span>✨ 美好降临 ✨</span></div>
    <p class="sentence">{{ sentence }}</p>
    <button class="copy-btn" type="button" @click="$emit('copy')">
      {{ copied ? '✓ 已复制美好' : '复制美好' }}
    </button>

    <div class="tiles">
      <LetterTile
        v-for="(t, i) in tokens"
        :key="i + '-' + t.letter"
        :letter="t.letter"
        :word="t.word"
        :meaning="t.meaning"
        :index="i"
      />
    </div>
  </div>
</template>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 26px;
  color: #b9a8e8;
  font-size: 13px;
  letter-spacing: 2px;
}
.divider::before,
.divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #d9cbff, transparent);
}
.sentence {
  font-family: Georgia, "Times New Roman", "Songti SC", serif;
  font-size: clamp(26px, 5vw, 40px);
  font-weight: 700;
  line-height: 1.45;
  background: linear-gradient(90deg, #7c5cf0, #d6568f, #e88a3c);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  word-break: break-word;
  margin: 18px 0 20px;
}
.copy-btn {
  padding: 10px 26px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  box-shadow: 0 8px 20px -8px rgba(160, 100, 220, .6);
  transition: transform .15s, box-shadow .15s, filter .15s;
}
.copy-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.05);
}
.copy-btn:active {
  transform: scale(.96);
}
.tiles {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 24px;
}
</style>
