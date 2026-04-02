import DefaultTheme from 'vitepress/theme'
import PasswordGuard from './components/PasswordGuard.vue'
import {h} from 'vue'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            'doc-before': () => h(PasswordGuard)
        })
    }
}
