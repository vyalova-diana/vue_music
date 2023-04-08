import { shallowMount } from '@vue/test-utils'
import Home from '@/views/HomeView.vue'
import SongItem from '@/components/SongItem.vue'

vi.mock('@/includes/firebase', () => ({
  auth: {
    signInWithEmailAndPassword: () => Promise.resolve()
  }
}))

describe('Home.vue', () => {
  test('renders list of songs', () => {
    const songs = [{}, {}, {}]
    const component = shallowMount(Home, {
      data() {
        return {
          songs
        }
      },
      global: {
        mocks: {
          $t: (msg) => msg
        }
      }
    })

    const items = component.findAllComponents(SongItem)

    expect(items).toHaveLength(songs.length)

    items.forEach((wrapper, i) => {
      expect(wrapper.props().song).toStrictEqual(songs[i])
    })
  })
})
