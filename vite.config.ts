/// <reference types="vitest" />


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import progress from 'vite-plugin-progress';
import handlebars from 'vite-plugin-handlebars';
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from 'vite-plugin-pwa'
import { qrcode } from 'vite-plugin-qrcode';
import { Schema, ValidateEnv } from "@julr/vite-plugin-validate-env";
import config from "./src/config";
import removeConsole from "vite-plugin-remove-console";
import Inspect from 'vite-plugin-inspect'
import Icons from 'unplugin-icons/vite'


export default defineConfig({
	plugins: [
		handlebars({
			context: {
				title: config.name,
				description: config.description
			},
		}),
		Icons({
			// experimental
			compiler: 'jsx',
			jsx: 'react',
			autoInstall: true,
		}),
		react(),
		removeConsole(),
		tsconfigPaths(),
		progress(),
		qrcode(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				name: config.name,
				short_name: config.name,
				description: config.description,
				icons: [
					{
						src: 'android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					},
				]
			},
			devOptions: {
				enabled: true
			},
		}),
		visualizer({ // last
			emitFile: true,
			gzipSize: true,
			brotliSize: true,
		}),
		ValidateEnv({
			// Verifies that an env variable exists and validates type. E.g.
			// A_KEY: Schema.string()
		}),
		Inspect()
	],
	server: {
		open: true,
		host: true
	},
	define: {
		'process.env': process.env
	},
	test: {
		watch: false,
		globals: true,
		environment: 'jsdom'
	},
})
