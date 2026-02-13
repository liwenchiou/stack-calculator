/**
 * Calculator（迷你計算機）— 用 Stack 實作 Undo
 *
 * 這台計算機的核心就是一個 Stack！
 *
 * undoStack：記錄每一步操作（add 或 subtract）
 *
 * 運作邏輯：
 * - add / subtract → 改變 value，把操作 push 進 undoStack
 * - undo → 從 undoStack pop 出最後一步，還原上一步
 */

export function createCalculator() {
  let value = 0
  const undoStack = []

  return {
    /**
     * 加上 n
     *
     * 做兩件事：
     * 1. 把 value 加上 n
     * 2. 把這次操作記錄到 undoStack（用物件 { type: 'add', value: n }）
     */
    add(n) {
      // TODO: 請實作
      value += n

undoStack.push({ type: 'add', value: n })
    },

    /**
     * 減去 n
     *
     * 跟 add 很像，只是方向相反：
     * 1. 把 value 減去 n
     * 2. 記錄 { type: 'subtract', value: n } 到 undoStack
     */
    subtract(n) {
      // TODO: 請實作
      value -= n

undoStack.push({ type: 'subtract', value: n })
    },

    /** 取得目前的值 */
    getValue() {
      return value
    },

    /**
     * 還原上一步
     *
     * undo 的重點是「還原上一步」！
     * 1. 如果 undoStack 是空的，就什麼都不做（直接 return）
     * 2. 從 undoStack pop 出最後一個操作
     * 3. 還原：
     *    - 如果 type 是 'add'，就把 value 減回去
     *    - 如果 type 是 'subtract'，就把 value 加回去
     */
    undo() {
      // TODO: 請實作
      if (undoStack.length === 0) return

const last = undoStack.pop()

if (last.type === 'add') {

value -= last.value

} else {

value += last.value

}
    },

    /** 可以 Undo 幾次（undoStack 裡有幾個操作） */
    getUndoCount() {
      return undoStack.length
    },
  }
}
