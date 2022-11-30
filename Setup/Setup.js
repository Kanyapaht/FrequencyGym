// https://highlightjs.org/static/demo/
// ;[...document.querySelectorAll('.styles > li')].map(item =>item.innerText.toLocaleLowerCase().replace(/\s/g, '-').replace(/(-)?(\d+)(-)?/g,'$2').replace(/(qtcreator)(-)(dark|light)/, '$1_$3').replace(/(kimbie)(-)(dark|light)/,'$1.$2'))
const themes = [
    'default',
    'a11y-dark',
    'a11y-light',
    'agate',
    'an-old-hope',
    'androidstudio',
    'arduino-light',
    'arta',
    'ascetic',
    'atelier-cave-dark',
    'atelier-cave-light',
    'atelier-dune-dark',
    'atelier-dune-light',
    'atelier-estuary-dark',
    'atelier-estuary-light',
    'atelier-forest-dark',
    'atelier-forest-light',
    'atelier-heath-dark',
    'atelier-heath-light',
    'atelier-lakeside-dark',
    'atelier-lakeside-light',
    'atelier-plateau-dark',
    'atelier-plateau-light',
    'atelier-savanna-dark',
    'atelier-savanna-light',
    'atelier-seaside-dark',
    'atelier-seaside-light',
    'atelier-sulphurpool-dark',
    'atelier-sulphurpool-light',
    'atom-one-dark-reasonable',
    'atom-one-dark',
    'atom-one-light',
    'brown-paper',
    'codepen-embed',
    'color-brewer',
    'darcula',
    'dark',
    'darkula',
    'docco',
    'dracula',
    'far',
    'foundation',
    'github-gist',
    'github',
    'gml',
    'googlecode',
    'grayscale',
    'gruvbox-dark',
    'gruvbox-light',
    'hopscotch',
    'hybrid',
    'idea',
    'ir-black',
    'isbl-editor-dark',
    'isbl-editor-light',
    'kimbie-dark',
    'kimbie-light',
    'lightfair',
    'magula',
    'mono-blue',
    'monokai-sublime',
    'monokai',
    'nord',
    'obsidian',
    'ocean',
    'paraiso-dark',
    'paraiso-light',
    'pojoaque',
    'purebasic',
    'qtcreator_dark',
    'qtcreator_light',
    'railscasts',
    'rainbow',
    'routeros',
    'school-book',
    'shades-of-purple',
    'solarized-dark',
    'solarized-light',
    'sunburst',
    'tomorrow-night-blue',
    'tomorrow-night-bright',
    'tomorrow-night-eighties',
    'tomorrow-night',
    'tomorrow',
    'vs',
    'vs2015',
    'xcode',
    'xt256',
    'zenburn'
  ]
  // google Monospace fonts:  https://fonts.google.com/?sort=date&category=Monospace
  // ;[...document.querySelectorAll('.fonts-module-title')].map(item => item.innerText)
  const fonts = [
    'Fira Code',
    'B612 Mono',
    'Major Mono Display',
    'IBM Plex Mono',
    'Nanum Gothic Coding',
    'Overpass Mono',
    'Space Mono',
    'Roboto Mono',
    'Fira Mono',
    'Share Tech Mono',
    'Cutive Mono',
    'Source Code Pro'
  ]
  const fetchStyleText = url =>
    fetch(url, {
      headers: {
        'Content-Type': 'text/plain'
      }
    }).then(response => {
      return response.text()
    })
  const getCurrentThemeBackground = styleText =>
    styleText.match(/background:(.*?)[;}]/)[1]
  
  const poll = ({condition, resolve, reject = () => {}, millisecond = 1000, retries = 1}) => {
    if (condition()) return resolve()
      
    let time = 0
    const int = setInterval(()=>{
          time++
      if (condition()) {
              console.log('condition')
              clearInterval(int)
              return resolve()
      } else if (time > retries) {
              console.log('time out')
              clearInterval(int)
              return reject()
      }
      console.log('time:', time)
    }, millisecond)
    const stop = () => { clearInterval(int) }
    return stop
  }
  // b-field b-select b-slider b-switch b-button
  const vueTemplate = `<div id="vue-app" class="container">
      <div class="columns is-vcentered is-centered">
          <div class="column is-3">
              <section>
                  <b-field label="Themes">
                      <b-select placeholder="Select a name" @input="changeTheme" v-model="current.theme" rounded>
                          <option v-for="(item, index) in themes" :value="item" :key="index">
                              {{item}}
                          </option>
                      </b-select>
                  </b-field>
                  <b-field label="Monospace Fonts">
                      <b-select placeholder="Select a name" @input="changeFont" v-model="current.font" rounded>
                          <option v-for="(item, index) in fonts" :value="item" :key="index">
                              {{item}}
                          </option>
                      </b-select>
                  </b-field>
                  <b-field label="Font Size">
                      <b-slider v-model="fontSize" @input="changeFontSize"></b-slider>
                  </b-field>
                  <b-field label="Apply theme changes">
                      <b-switch v-model="isApplyThemeChanges" true-value="Yes" false-value="No">
                          {{ isApplyThemeChanges }}
                      </b-switch>
                  </b-field>
                  <b-field label="Apply font changes">
                      <b-switch v-model="isApplyFontChanges" true-value="Yes" false-value="No">
                          {{ isApplyFontChanges }}
                      </b-switch>
                  </b-field>
                  <b-field label="Force theme background">
                      <b-switch v-model="isForcePreBackground" true-value="Yes" false-value="No">
                          {{ isForcePreBackground }}
                      </b-switch>
                  </b-field>
                                   <b-field label="铁幕重重困青年">
                      <b-switch v-model="isGFW" true-value="Fuck" false-value="No thank you">
                          {{ isGFW }}
                      </b-switch>
                  </b-field>
              </section>
                          <section>
                              <b-button type="is-primary" rounded disabled>Apply</b-button>
                              <b-button type="is-warning" rounded disabled>Close</b-button>
                              <b-button type="is-danger" rounded @click="reset">Reset</b-button>
                          </section>
          </div>
          <div class="column">
              <b-field label="Real-time preview" class="has-text-centered">
                  <pre class="has-text-left" :style="styles.pre" ref="pre">
                      <code :style="styles.code" ref="code">
  import something from 'something'
  
  // 获取并设置样式
  const setStyle = () => {
    // 获取主题样式并添加
    const themeStyle = GM_getValue(currentTheme)
  
    if (themeStyle) {
      GM_addStyle(themeStyle)
    } else {
      const themeUrl = \`https://cdn.bootcss.com/highlight.js/9.15.10/styles/\${currentTheme}.min.css\`
  
      fetchStyleText(themeUrl).then(style => {
        GM_addStyle(style)
        GM_setValue(currentTheme, style)
      })
    }
  }
  
  export default something
  
                      </code>
                  </pre>
              </b-field>
          </div>
      </div>
  </div>
  `
  const vm = new Vue({
    el: '#app',
    template: vueTemplate,
    data () {
      return {
        current:{
          theme: 'atom-one-dark',
          font: 'Fira Code'
        },
        styles: {
          pre: '',
          code: ''
        },
        cache: {
          themes: new Map(),
          fonts: new Map()
        },
        fontSize: 16,
        themes: themes,
        fonts: fonts,
        isApplyThemeChanges: 'Yes',
        isApplyFontChanges: 'Yes',
        isForcePreBackground: 'No',
        isGFW: 'Fuck',
              defaultBackground: '' 
      }
    },
      watch: {
          isForcePreBackground (value) {
              console.log(value)
              if (value === 'No') {
                  this.$refs.pre.style.background = this.defaultBackground
              } else {
                  poll({
                      condition: () => this.cache.themes.get(this.current.theme), 
                      resolve: () => { this.$refs.pre.style.background = getCurrentThemeBackground(this.cache.themes.get(this.current.theme)) },
                      millisecond: 1000,
                      retries: 5,
                  })
              }
          }
      },
    methods: {
          reset () {
              this.fontSize = 16
              this.isApplyThemeChanges = 'Yes'
        this.isApplyFontChanges = 'Yes'
        this.isForcePreBackground = 'No'
        this.isGFW = 'Fuck'
              this.current.theme = 'atom-one-dark'
              this.current.font = 'Fira Code'
              this.changeTheme(this.current.theme)
          this.changeFont(this.current.font)		
          },
      changeTheme (value) {
        if (this.isApplyThemeChanges === 'No') return false
  
        const doChangeTheme = (thmemName, themeStyle) => {
          const styleEle = document.querySelector('#themeStyle')
          styleEle.innerText = themeStyle
  
          if (this.isForcePreBackground=== 'Yes') {
            this.$refs.pre.style.background = getCurrentThemeBackground(
              themeStyle
            )
                      console.log(getCurrentThemeBackground(
              themeStyle
            ))
          }
  
          window.hljs.highlightBlock(this.$refs.code)
        }
  
        if (this.cache.themes.has(value)) {
          doChangeTheme(value, this.cache.themes.get(value))
          console.log(`get theme: ${value} in cache`)
        } else {
          const url = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/${value}.min.css`
          console.log(url)
          fetchStyleText(url).then(style => {
                      this.cache.themes.set(value, style)
            doChangeTheme(value, style)
          })
        }
              console.log('current theme', this.current.theme)
      },
      changeFont (value) {
        if (this.isApplyFontChanges === 'No') return false
  
        const doChangeFont = (fontName, fontStyle) => {
          const styleEle = document.querySelector('#fontStyle')
          styleEle.innerText = fontStyle
          const font = new window.FontFaceObserver(fontName)
          font.load().then(
            () => {
              console.log('Font is available')
              this.$refs.code.style.fontFamily = fontName
            },
            () => {
              console.log('Font is not available')
            }
          )
        }
  
        if (this.cache.fonts.has(value)) {
          doChangeFont(value, this.cache.fonts.get(value))
          console.log(`get font: ${value} in cache`)
        } else {
          const url =
            this.GFW === 'Fuck'
              ? `https://fonts.loli.net/css?family=${value}`
              : `https://fonts.googleapis.com/css?family=${value}`
          fetchStyleText(url).then(style => {
                      this.cache.fonts.set(value, style)
            doChangeFont(value, style)
          })
        }
  
        console.log(value)
      },
      changeFontSize (value) {
        console.log(value)
        this.$refs.code.style.fontSize = `${value}px`
      }
    },
    mounted () {
          this.defaultBackground = this.$refs.pre.style.background
      this.changeTheme(this.current.theme)
      this.changeFont(this.current.font)					
    }
  })
  