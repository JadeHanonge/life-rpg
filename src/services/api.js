import axiosClient from "./axiosClient"


//SKILLS







//QUEST





//PLAYER


//fetch player's stats
export const getPlayerStats = () => {
  return axiosClient.get("/player-stat");
}