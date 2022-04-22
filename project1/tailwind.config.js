module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'darkred': '#B00020',
      'red': '#fc3c1d',
      'green': '#26a69a',
      'highlightdark': '#dc8e01',
      'highlightlight': '#feb32b',
      'text': '#f9eae1',
      'bglight': '#10294c',
      'bgdark': '#0c1221',
      'navfocus': '#a4bdd7ab',
      'postfocus': '#26a69a1a',
      'bgmid': '#181E2D',
    },
    fontFamily: {
      'IBMPlexMonoRegular': ['IBM Plex Mono Regular', 'mono'],
      'IBMPlexMonoItalic': ['IBM Plex Mono Italic', 'mono'],
      'IBMPlexMonoBold': ['IBM Plex Mono Bold', 'mono'],
    }
  },
  plugins: [
  ],
  variants: {
    display: ["group-hover"]
  },
}