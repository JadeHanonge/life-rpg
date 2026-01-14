export const questsData = {
  daily: [
    { id: 1, text: 'Faire la vaisselle', done: false, reward: { xp: 5, stat: { energy: 1 } } },
    { id: 2, text: 'Prendre une douche', done: false, reward: { xp: 5, stat: { hygiene: 2 } } },
    { id: 3, text: 'Se nourrir', done: false, reward: { xp: 5, stat: { health: 2 } } }
  ],
  weekly: [
    { id: 4, text: 'Faire le ménage', done: false, reward: { xp: 10, stat: { energy: 3 } } },
    { id: 5, text: 'Faire le linge', done: false, reward: { xp: 10, stat: { energy: 2 } } },
    { id: 6, text: 'Faire les courses', done: false, reward: { xp: 10, stat: { energy: 3 } } }
  ],
  main: [
    { id: 7, text: 'Définir mes valeurs', done: false, reward: { xp: 20, stat: { intelligence: 1 } } },
    { id: 8, text: 'Commencer un projet créatif', done: false, reward: { xp: 20, stat: { creativity: 2 } } },
    { id: 9, text: 'Planifier une expérience significative', done: false, reward: { xp: 20, stat: { charisma: 1 } } }
  ],
  side: [
    { id: 10, text: 'Explorer un nouveau hobby', done: false, reward: { xp: 10, stat: { creativity: 1 } } },
    { id: 11, text: 'Participer à un atelier', done: false, reward: { xp: 10, stat: { charisma: 1 } } }
  ],
  rest: [
    { id: 12, text: 'Jouer à un jeu', done: false, reward: { xp: 2, stat: { happiness: 1 } } },
    { id: 13, text: 'Lire un livre', done: false, reward: { xp: 2, stat: { intelligence: 1 } } },
    { id: 14, text: 'Regarder la télé', done: false, reward: { xp: 1, stat: { relaxation: 1 } } },
    { id: 15, text: 'Scroll sur TikTok', done: false, reward: { xp: 0, stat: { relaxation: 1 } } }
  ]
}
