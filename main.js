/**********************************
 * This is the program driver, that
 * will call other functions
 * *******************************/

import { addPlayer } from "./player.js";
import {
  savePlayersToStorage,
  getPlayersFromStorage,
} from "./LocalStorageUtilsObjectLiteral.js";

function main() {
  let newPlayer = "Doug Polk";
  const localStorageKey = "stored_players";
  let players = getPlayersFromStorage(localStorageKey); //array of player objects in localStorage
  players.push(addPlayer(newPlayer));
  savePlayersToStorage(localStorageKey, JSON.stringify(players));
}

main();
