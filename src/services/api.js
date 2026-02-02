import axiosClient from "./axiosClient"


//SKILLS







//QUEST
export const getAllQuests = () => {
  return axiosClient.get("/quests");
}

export const updateStateQuest = (questId, state) => {
  return axiosClient.put(`/updateStateQuest/${questId}`, {done: state});
}




//PLAYER


//fetch player's stats
export const getPlayerStats = () => {
  return axiosClient.get("/player-stat");
}

//fetch player's info
export const getPlayer = () => {
  return axiosClient.get("/player/1");
}

//update Xp player
export const updateXp = (playerId,newXp) => {
  return axiosClient.put(`/updateXp/${playerId}`, {xp: newXp});
}