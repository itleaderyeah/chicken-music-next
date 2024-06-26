import { ref, computed } from 'vue'

export default function useShortCut(props, groupRef) {
  const scrollRef = ref(null)
  const touch = {}
  const ANCHOR_HEIGHT = 18

  const shortcutList = computed(() => {
    return props.data.map(group => group.title)
  })

  function onShortcutTouchStart(e) {
    const anchorIndex = parseInt(e.target.dataset.index)
    touch.y1 = e.touches[0].pageY
    touch.anchorIndex = anchorIndex
    scrollTo(anchorIndex)
  }

  function onShortcutTouchMove(e) {
    touch.y2 = e.touches[0].pageY
    const delta = (touch.y2 - touch.y1) / ANCHOR_HEIGHT | 0
    const anchorIndex = touch.anchorIndex + delta
    scrollTo(anchorIndex)
  }

  function scrollTo(index) {
    index = Math.max(0, Math.min(shortcutList.value.length - 1, index))
    const targetEle = groupRef.value.children[index]
    const scroll = scrollRef.value.scroll
    scroll.scrollToElement(targetEle, 0)
  }

  return {
    scrollRef,
    onShortcutTouchStart,
    onShortcutTouchMove
  }
}
