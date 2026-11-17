<script setup>
import { useBeautifier } from './composables/useBeautifier'
import WordInput from './components/WordInput.vue'
import ResultPanel from './components/ResultPanel.vue'
import AlphabetLegend from './components/AlphabetLegend.vue'

const { input, tokens, sentence, hasResult, copied, copySentence, clearAll, randomWord } = useBeautifier()
</script>

<template>
  <div class="page">
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>
    <div class="bg-blob blob-3"></div>

    <main class="card">
      <header>
        <div class="sparkle">✦</div>
        <h1>单词美好器</h1>
        <p class="subtitle">把每个字母，都换成一份美好 · GoodWord</p>
      </header>

      <WordInput v-model="input" @random="randomWord" @clear="clearAll" />

      <ResultPanel
        v-if="hasResult"
        :tokens="tokens"
        :sentence="sentence"
        :copied="copied"
        @copy="copySentence"
      />
      <p v-else class="empty-hint">在上方输入字母，美好就会一个字一个字地长出来 🌱</p>
    </main>

    <AlphabetLegend @pick="letter => (input += letter)" />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 16px 64px;
}
.bg-blob {
  position: fixed;
  border-radius: 50%;
  filter: blur(70px);
  opacity: .5;
  z-index: 0;
  pointer-events: none;
}
.blob-1 {
  width: 380px;
  height: 380px;
  background: #d9c8ff;
  top: -120px;
  left: -80px;
  animation: float 9s ease-in-out infinite;
}
.blob-2 {
  width: 320px;
  height: 320px;
  background: #ffd3e2;
  bottom: -100px;
  right: -60px;
  animation: float 11s ease-in-out infinite reverse;
}
.blob-3 {
  width: 260px;
  height: 260px;
  background: #c8e4ff;
  top: 40%;
  left: 62%;
  animation: float 13s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(24px); }
}
.card {
  position: relative;
  z-index: 1;
  width: min(720px, 100%);
  background: rgba(255, 255, 255, .82);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, .7);
  border-radius: 28px;
  box-shadow: 0 24px 60px -18px rgba(120, 90, 200, .25);
  padding: 40px 36px 36px;
  text-align: center;
}
.sparkle {
  font-size: 26px;
}
h1 {
  font-size: 30px;
  margin-top: 6px;
  letter-spacing: 4px;
}
.subtitle {
  margin-top: 8px;
  color: var(--ink-soft);
  font-size: 14px;
  letter-spacing: 2px;
}
.empty-hint {
  margin-top: 28px;
  color: var(--ink-soft);
  font-size: 14px;
}
@media (max-width: 520px) {
  .page {
    padding: 28px 12px 48px;
  }
  .card {
    padding: 28px 18px;
    border-radius: 22px;
  }
  h1 {
    font-size: 24px;
  }
}
</style>
