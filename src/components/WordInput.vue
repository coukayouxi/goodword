<script setup>
defineProps({
  modelValue: { type: String, default: '' }
})
defineEmits(['update:modelValue', 'random', 'clear'])
</script>

<template>
  <div class="input-row">
    <input
      class="word-input"
      type="text"
      maxlength="24"
      placeholder="输入英文单词，如 HOPE"
      spellcheck="false"
      autocomplete="off"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="tool-row">
      <button class="ghost-btn" type="button" @click="$emit('random')">🎲 随机来一个</button>
      <button class="ghost-btn" type="button" :disabled="!modelValue" @click="$emit('clear')">🧹 清空</button>
    </div>
  </div>
</template>

<style scoped>
.input-row {
  margin-top: 26px;
}
.word-input {
  width: 100%;
  padding: 16px 20px;
  font-size: 22px;
  letter-spacing: 6px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  color: var(--ink);
  border: 2px solid #e6dcff;
  border-radius: 16px;
  background: #fff;
  outline: none;
  transition: border-color .2s, box-shadow .2s;
}
.word-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(139, 108, 240, .15);
}
.word-input::placeholder {
  letter-spacing: 1px;
  color: #b9b2cf;
  font-weight: 400;
  font-size: 16px;
}
.tool-row {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 14px;
}
.ghost-btn {
  padding: 8px 16px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 13px;
  color: #6d6390;
  background: rgba(255, 255, 255, .7);
  border: 1px solid #e6dcff;
  transition: background .15s, transform .15s;
}
.ghost-btn:hover:not(:disabled) {
  background: #fff;
  transform: translateY(-1px);
}
.ghost-btn:disabled {
  opacity: .45;
  cursor: not-allowed;
}
@media (max-width: 520px) {
  .word-input {
    letter-spacing: 3px;
    font-size: 18px;
  }
}
</style>
