import axios from "axios";
import axiosClient from "./axiosClient"


//SKILLS







//QUEST
export const getAllQuests = () => {
  return axiosClient.get("/quests");
}

export const getQuestType = () => {
  return axiosClient.get("/questType");
}

export const getStepQuest = (questId) => {
  return axiosClient.get(`/questStep/${questId}`);
}

export const updateStateQuest = (questId, state, newDate) => {
  return axiosClient.put(`/updateStateQuest/${questId}`, {done: state, date: newDate});
}

export const addQuest = (newname, newtypeQuestId, newRewards ) => {
  return axiosClient.post(`/addQuest`, {name:newname, typeQuestId:newtypeQuestId, rewards: newRewards})
}

export const addStepQuest = (questId, newStep) => {
  return axiosClient.post(`/addStepQuest/${questId}`, {step:newStep});
}

export const deleteQuests = (questId) => {
  return axiosClient.delete(`/deleteQuest/${questId}`);
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

//update level player
export const updateLevel = (playerId,newLevel,newMaxXp) => {
  return axiosClient.put(`/updatePlayerLevel/${playerId}`, {level: newLevel, maxXp: newMaxXp});
}

//update stat point
export const updateStatPoint = (playerId, newPoint, statId) => {
  return axiosClient.put(`/updateStat/${playerId}`, {point: newPoint, stat_id: statId});
}