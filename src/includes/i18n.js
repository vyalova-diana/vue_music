import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'

function customRule(choice, choicesLength) {
  if (choice === 0) {
    return 0
  }

  const teen = choice > 10 && choice < 20
  const endsWithOne = choice % 10 === 1
  if (!teen && endsWithOne) {
    return 1
  }
  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 2
  }

  return choicesLength < 4 ? 2 : 3
}

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  pluralizationRules: {
    ru: customRule
  },
  messages: {
    en,
    ru
  },
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD",
      }
    },
    ru: {
      currency: {
        style: "currency",
        currency: "RUB",
      }
    }
  }
})
