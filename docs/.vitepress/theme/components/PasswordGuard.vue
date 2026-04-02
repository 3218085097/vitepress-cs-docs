<script setup>
import { ref, onMounted, watch } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

const PASSWORD = 'jrh2005130'
const PROTECTED_PATHS = ['/daily-realization/', '/mind-methods/']
const STORAGE_KEY = 'vitepress_auth_token'
const BROWSER_ID_KEY = 'vitepress_browser_id'

const isProtected = ref(false)
const isAuthenticated = ref(false)
const showPasswordModal = ref(false)
const inputPassword = ref('')
const errorMessage = ref('')

const getBrowserId = () => {
  let browserId = localStorage.getItem(BROWSER_ID_KEY)
  if (!browserId) {
    browserId = 'browser_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
    localStorage.setItem(BROWSER_ID_KEY, browserId)
  }
  return browserId
}

const checkProtection = () => {
  const currentPath = page.value.relativePath
  isProtected.value = PROTECTED_PATHS.some(path => currentPath.startsWith(path.replace(/^\//, '')))
  
  if (isProtected.value) {
    const browserId = getBrowserId()
    const storedToken = localStorage.getItem(STORAGE_KEY)
    
    if (storedToken) {
      try {
        const decoded = atob(storedToken)
        const [storedBrowserId, storedPassword] = decoded.split(':')
        
        if (storedBrowserId === browserId && storedPassword === PASSWORD) {
          isAuthenticated.value = true
          showPasswordModal.value = false
          return
        }
      } catch (e) {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
    
    showPasswordModal.value = true
  }
}

const verifyPassword = () => {
  if (inputPassword.value === PASSWORD) {
    const browserId = getBrowserId()
    const token = btoa(`${browserId}:${PASSWORD}`)
    localStorage.setItem(STORAGE_KEY, token)
    isAuthenticated.value = true
    showPasswordModal.value = false
    errorMessage.value = ''
  } else {
    errorMessage.value = '密码错误，请重试'
    inputPassword.value = ''
  }
}

onMounted(() => {
  checkProtection()
})

watch(() => page.value.relativePath, () => {
  checkProtection()
})
</script>

<template>
  <template v-if="showPasswordModal">
    <div class="password-content-hide"></div>
    <div class="password-guard">
      <div class="password-modal">
        <h3>此内容需要密码访问</h3>
        <div class="password-input-wrapper">
          <input
            v-model="inputPassword"
            type="password"
            placeholder="请输入密码"
            @keyup.enter="verifyPassword"
            autofocus
          />
          <button @click="verifyPassword">确认</button>
        </div>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
</template>

<style scoped>
.password-content-hide {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--vp-c-bg);
  z-index: 9998;
}

.password-guard {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.password-modal {
  background: var(--vp-c-bg);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  width: 90%;
}

.password-modal h3 {
  margin: 0 0 1.5rem 0;
  text-align: center;
  color: var(--vp-c-text-1);
}

.password-input-wrapper {
  display: flex;
  gap: 0.5rem;
}

.password-input-wrapper input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  font-size: 1rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.password-input-wrapper input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.password-input-wrapper button {
  padding: 0.75rem 1.5rem;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.password-input-wrapper button:hover {
  background: var(--vp-c-brand-2);
}

.error-message {
  color: var(--vp-c-danger-1);
  margin: 1rem 0 0 0;
  text-align: center;
  font-size: 0.9rem;
}
</style>
