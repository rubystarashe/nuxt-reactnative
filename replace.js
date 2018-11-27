require("replace")({
  regex: '/app/',
  replacement: 'app/',
  paths: ['./reactnative/android/app/src/main/assets/nuxt'],
  recursive: true,
  silent: true,
})
