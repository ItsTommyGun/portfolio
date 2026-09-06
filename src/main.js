import { createApp, nextTick } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// v-observe directive: adds a simple intersection observer that adds the 'fadeIn' class
// to direct children of the element when it enters the viewport.
app.directive('observe', {
	mounted(el, binding) {
		const options = binding.value || {}
		const threshold = options.threshold ?? 0.5

		// wait for children to be rendered before adding hide class
		nextTick(() => {
			// hide direct children so nested components which add their own inner
			// children still inherit the hidden state
			for (const child of Array.from(el.children)) {
				child.classList.add('opacity-0')
			}
		})

		const io = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				if (import.meta.env.DEV) console.log('v-observe intersect:', el, entries[0])
				for (const child of Array.from(el.children)) {
					const cdelay = child.dataset && child.dataset.delay ? child.dataset.delay : null
					if (cdelay) child.style.animationDelay = cdelay
					child.classList.add('fadeIn')
				}
				io.unobserve(el)
			}
		}, { threshold })

		io.observe(el)
		el.__vueObserve = io
	},
	unmounted(el) {
		if (el.__vueObserve) {
			el.__vueObserve.disconnect()
			delete el.__vueObserve
		}
	},
})

app.mount('#app')
