# 作業：迷你計算機 — 用 Stack 實作 Undo

## 作業目標

測試已經幫你寫好了！你的任務是**填寫 `calculator.js` 裡的 3 個 TODO**，讓全部 10 個測試通過。

透過實作，你會動手寫出：
- 用 **陣列的 push / pop** 來記錄操作歷史
- **Undo（還原）** — 從 undoStack pop 出來，還原上一步（LIFO！）

---

## 快速開始

```bash
# 1. 把作業 repo clone 下來
git clone <你的作業 repo 網址>
cd stack-calculator

# 2. 安裝套件
npm install

# 3. 跑測試（一開始會全部失敗，這是正常的！）
npm test
```

一開始跑測試會看到一片紅色，每實作一個方法就會有更多測試變綠。

---

## 檔案結構

```
stack-calculator/
├── .github/workflows/test.yml  ← GitHub Actions 自動跑測試
├── calculator.js               ← 你要寫的（裡面有 TODO）
├── __tests__/
│   └── calculator.test.js      ← 測試（已寫好，不用改）
├── package.json
└── README.md
```

> **你只需要修改 `calculator.js`**，其他檔案都不用動。

---

## 實作順序

1. **先寫 `add(n)` 和 `subtract(n)`** — 跑 `npm test` 看前 5 題變綠
2. **再寫 `undo()`** — 全部 10 題變綠就完成了！

打開 `calculator.js`，每個 TODO 上方都有註解提示。

---

## 測試清單（10 題）

### 基本計算（5 題）

| # | 測試 | 實作哪個方法 |
|---|------|------------|
| 1 | 初始值是 0 | （自動通過） |
| 2 | add(10) 後值是 10 | `add` |
| 3 | subtract(3) 後值正確 | `subtract` |
| 4 | 連續 add 累加 | `add` |
| 5 | 可以減到負數 | `subtract` |

### Undo 還原（5 題）

| # | 測試 | 實作哪個方法 |
|---|------|------------|
| 6 | undo 還原上一步 add | `undo` |
| 7 | undo 還原上一步 subtract | `undo` |
| 8 | 連續 undo 依序還原（LIFO） | `undo` |
| 9 | 空的 undo 不報錯 | `undo` |
| 10 | undo 後 undoCount 減少 | `undo` |

---

## GitHub Actions 自動測試

你的 repo 已經設定好 GitHub Actions，每次 push 都會自動跑測試。

到 GitHub repo 頁面 → **Actions** 分頁，就能看到測試結果：
- 全部通過 = 綠色勾勾
- 有失敗 = 紅色叉叉（點進去看哪一題沒過）

---

## 評分標準

**全部 10 個測試通過 = 滿分！**

```bash
npm test
# 目標：10 個測試全綠
```

---

## 繳交方式

1. 把作業 push 到你的 GitHub repo
2. 確認 GitHub Actions 顯示綠色勾勾
3. 繳交你的 GitHub repo 網址.
