const SAVE_KEY = 'life-rpg-save'

export function loadGame() {
  const data = localStorage.getItem(SAVE_KEY)
  return data ? JSON.parse(data) : null
}

export function saveGame(game) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(game))
}
