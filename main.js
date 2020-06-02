/**********************************
 * This is the program driver, that
 * will call other functions
 * *******************************/

import { createPlayer } from "./player.js";
import {
  savePlayersToStorage,
  getPlayersFromStorage,
} from "./LocalStorageUtilsObjectLiteral.js";

function main() {
  const localStorageKey = "stored_players";
  let players = getPlayersFromStorage(localStorageKey);

  let player = createPlayer("Crusty");
  let player2 = createPlayer("Venom");
  let player3 = createPlayer("JackBluffer");

  players.push(player);
  players.push(player2);
  players.push(player3);
  savePlayersToStorage(localStorageKey, JSON.stringify(players));
}

main();
