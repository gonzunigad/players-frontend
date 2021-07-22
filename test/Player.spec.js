import { mount } from '@vue/test-utils'
import Player from '@/components/Player.vue'

describe('Player', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Player, {
      propsData: {
        player: {
          nickname: 'sfasfsa',
          status: 'sfasfas',
          balance: 1500,
          id: 2,
          avatar: 'https://drive.google.com/thumbnail?id=1fpl6FOG7Gi-X4oHH-dAm3b0UGDYJE9Jr'
        }
      }
    })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.vm.balance).toBe('1.500')
  })
})
