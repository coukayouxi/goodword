import { ref, computed } from 'vue'
import { WORD_MAP, SAMPLES } from '../data/words'

/**
 * 单词美好器核心逻辑：
 * 输入英文单词 -> 每个字母映射为对应美好词，空格分隔、词首大写
 */
export function useBeautifier() {
  const input = ref('')
  const copied = ref(false)
  let copyTimer = null

  // 每个字母 -> 美好词（自动忽略数字、符号等非字母字符）
  const tokens = computed(() =>
    input.value
      .toUpperCase()
      .split('')
      .filter(ch => WORD_MAP[ch])
      .map(ch => ({ letter: ch, ...WORD_MAP[ch] }))
  )

  // 最终美好句：词首大写、空格分隔
  const sentence = computed(() => tokens.value.map(t => t.word).join(' '))
  const hasResult = computed(() => tokens.value.length > 0)

  async function copySentence() {
    if (!sentence.value) return
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(sentence.value)
      } else {
        throw new Error('clipboard api unavailable')
      }
    } catch {
      // 降级方案
      const ta = document.createElement('textarea')
      ta.value = sentence.value
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    copied.value = true
    clearTimeout(copyTimer)
    copyTimer = setTimeout(() => (copied.value = false), 1600)
  }

  function clearAll() {
    input.value = ''
  }

  function randomWord() {
    input.value = SAMPLES[Math.floor(Math.random() * SAMPLES.length)]
  }

  return { input, tokens, sentence, hasResult, copied, copySentence, clearAll, randomWord }
}
