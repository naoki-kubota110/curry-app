import { shallowMount, createLocalVue, RouterLinkStub} from '@vue/test-utils'
import Footer from '@/components/Footer.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
Vue.use(Vuetify);
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const store = new Vuex.Store({
  state: {},
})
const router = new VueRouter()

describe('Footer.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Footer,{
      localVue,
      store,
      router
    })
    expect(wrapper.isVueInstance).toBeTruthy()
  })
  it('Footerの文字が正しく表示されているかの確認', () => {
    const wrapper = shallowMount(Footer,{
      localVue,
      store,
      router
    })
    console.log(wrapper.html())
    const footerText = wrapper.find("#footerText")
    expect(footerText.text()).toBe("ラクラクカリー All Rights Reserved")
  })
  it('router-link HTML確認', () => {
    const wrapper = shallowMount(Footer,{
      localVue,
  　 store,
      router
    })
    const loginCheck = wrapper.find("#links")
    console.log(loginCheck.html())
    expect(loginCheck.html()).toContain("</router-link-stub>")
  })
  it('ホーム画面へのrouter-linkのテスト', () => {
    const wrapper = shallowMount(Footer,{
      localVue,
  　 store,
      router,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.at(0).props().to).toBe("/")
  })
  it('ショッピングカート画面へのrouter-linkのテスト', () => {
    const wrapper = shallowMount(Footer,{
      localVue,
  　 store,
      router,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.at(1).props().to).toBe("/cart")
  })
  it("v-if", () => {
    const wrapper = shallowMount(Footer,{
      localVue,
  　 store,
      router,
    })
    const profile = wrapper.find('#login');
    expect(profile.exists()).toBe(false)
  })
})