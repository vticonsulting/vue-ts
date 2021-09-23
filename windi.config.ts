import { defineConfig } from 'windicss/helpers'

import colors from 'windicss/colors'
import plugin from 'windicss/plugin'
import typography from 'windicss/plugin/typography'
import filters from 'windicss/plugin/filters'
import forms from 'windicss/plugin/forms'
import aspectRatio from 'windicss/plugin/aspect-ratio'
import lineClamp from 'windicss/plugin/line-clamp'

import { colors as hancockColors } from './tokens'

export default defineConfig({
  preflight: false,
  extract: {
    include: [
      '**/*.{vue,ts,jsx,ts,tsx,svelte,cshtml}',
      'shared/**/*.{vue,ts}',
    ],
  },
  safelist: ['prose', 'prose-sm', 'm-auto'],
  darkMode: 'class',

  // https://windicss.org/posts/v30.html#attributify-mode
  // attributify: true,

  plugins: [
    typography({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
    filters,
    forms,
    aspectRatio,
    lineClamp,
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      }
      addUtilities(newUtilities)
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },

        '.btn-blue': {
          'backgroundColor': '#3490dc',
          'color': '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },

        '.btn-red': {
          'backgroundColor': '#e3342f',
          'color': '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      }
      addComponents(buttons)
    }),
    plugin(({ addDynamic, variants }) => {
      addDynamic('skew', ({ Utility, Style }) => {
        return Utility.handler
          .handleStatic(Style('skew'))
          .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
          .createProperty('transform')
      }, variants('skew'))
    }),
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        secondary: colors.gray,
        brand: colors.gray,
      },
      fontSize: {
        '2xs': '.625rem', // 10px
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
})
