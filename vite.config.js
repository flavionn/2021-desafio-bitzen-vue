import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'

const config = defineConfig({
	plugins: [
		createVuePlugin(),
		Pages(),
		Layouts(),
		ViteComponents({
			directoryAsNamespace: true
		}),
		WindiCSS()
	]
})

export default config
