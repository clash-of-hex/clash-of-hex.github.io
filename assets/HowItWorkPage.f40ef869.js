import{_ as e,o as t,c as o,a}from"./App.2546ef21.js";const r="/img/info_game_rooms.png",n="/img/info_this_game.png",s="/img/info_30days_top.png",l="/img/info_first_cell_capture.png",i="/img/info_cell_lvlup.png",c="/img/info_free_cell_capture.png",h="/img/info_energy_transfer.png",u="/img/info_enemy_capture.png";const p={},m={class:"howto-wrapper flex flex-col items-center gap-20 bg-base-100 py-20"},d=a('<p>Attention</p><p> Before starting the game, make sure you have installed the <a href="https://chrome.google.com/webstore/detail/ever-wallet/cgeeodpfagjceefieflmdfphplkenlfk/">&quot;Ever Wallet&quot;</a> browser extension. All actions in the game are performed in a smart contract placed in the blockchain, which means that each action must be confirmed in the &quot;Ever Wallet&quot; from the account you have chosen to authorize in the game. The game is in test mode, so the test network &quot;testnet&quot; is used. Do not forget to switch to it in the wallet. Coins from the testnet you can always get in <a href="https://t.me/everdev_giver_bot">telegram bot</a>. </p><p>Interface</p><p>Game rooms</p><img src="'+r+'"><p> The panel displays all the current locations created by the players. To the right of each location is the number of players who have joined the game and the maximum number of players in the room. &quot;1/3&quot; means that the game joined 1 player out of 3. If not all seats are taken yet, you can join the game by pressing &quot;Join&quot;. The round starts as soon as the required number of players is reached. If the location is already filled with players, you can press &quot;Info&quot; and become an observer. </p><p> You can also create your own room. To do this, you need to specify &quot;Room name&quot;, select the maximum number of players and click &quot;Add&quot;. After confirming the transaction, your new location will be displayed in the list. </p><p>Current game information</p><p> After you have selected a room with the &quot;Join&quot; or &quot;Info&quot; buttons, information about it will be displayed in the &quot;This game&quot; tab. The list shows the address of the player and the number of cells he has captured. The color of the address in the list shows the color of the player&#39;s cells on the map. </p><img src="'+n+'"><p>Leaderboard</p><p> The best players are placed in the &quot;30 days TOP&quot;. The list shows the address of the player and the number of captured cells in the games in which he participated. </p><img src="'+s+'"><p>Gameplay</p><p> You can always minimize the information panel for a more comfortable game. You can also move the map by pressing the &quot;A&quot;-\u2B05\uFE0F, &quot;D&quot;-\u27A1\uFE0F, &quot;W&quot;-\u2B06\uFE0F, &quot;S&quot;-\u2B07\uFE0F </p><p> Capture the first cell. To capture the first cell, double left-click on any free cell on the map. </p><img src="'+l+'"><p> The cell has the following stats: current amount of energy, base capacity, rate of energy production. A table of stats is at the end of &quot;how to play&quot;. </p><p> Stats can be increased by leveling up. </p><p> After the last player joins and captures the first cell the round begins. The round lasts for 15 minutes. </p><p> Upgrade the level of your cell. To do this, mark the desired cell by clicking it once with the left mouse button, and then double-click the same cell with the left mouse button. You will lose 3k energy - this is the cost of the lvlup. Now the energy production rate of this cell has increased. </p><img src="'+i+'"><p> Wait until you accumulate 4k energy and capture the next cell. To do this, click on the cell near which you want to capture the cell and click on the cell you want to capture. You will lose 4k - this is the cost of the capture. Now you control two cells. </p><img src="'+c+'"><p> Wait until the energy of the cells fills up. Then transfer energy from the first cell to the second cell. To do this, select cell 1 and dbl click on cell 2. Now the energy of cell two has exceeded the base capacity and every second it will lose energy until it returns to the base capacity level. Hurry up to use your energy advantage in your tactics. </p><img src="'+h+'"><p> If you are adjacent to an enemy cell, you can attack and capture it if your energy exceeds the enemy&#39;s. To do this, select your cell and then the enemy cell. Energy is subtracted and if your energy is greater, the cell will be captured. </p><img src="'+u+'"><p> The goal of the game is to own as many cells as possible by the end of the round. </p><p> The game is over when the round time of the current location ends. After that, all captures and cell markings are prohibited. The winner is the player who captures the most cells on the map.<br><br> The winner&#39;s reward is all EVERs accumulated in the cell contracts and the main room contract.<br> How do I get a reward?<br> 1) Click the &quot;Destroy Cells&quot; button and wait for the process to complete. If there are any cells left on the field, press the button again. This will collect all the coins from their contracts in the main room contract.<br> 2) Click on the &quot;Calc Rewards&quot; button and wait for the process to finish.<br> 3) Click on &quot;Claim Reward&quot; and the prize money will be sent to your address if you are a winner. If there is more than one winner (they have the same number of cells), each winner must click the button to get their reward.<br></p><p> Game Parameters:<br><br> Empty Cell Marking Price: 4000 \u26A1\uFE0F<br> Levelup: 3000 \u26A1\uFE0F<br> Maximum Cell Capacity:<br> Level 1 - 5000 \u26A1\uFE0F<br> Level 2 - 7000 \u26A1\uFE0F<br> Level 3 - 10000 \u26A1\uFE0F<br> Energy generation in the cell:<br> level 1 - 20 \u26A1\uFE0F/sec<br> Level 2 - 35 \u26A1\uFE0F/sec<br> Level 3 - 50 \u26A1\uFE0F/sec<br> Decreasing energy in the cell when it exceeds its capacity: 20 \u26A1\uFE0F/sec<br></p>',31),f=[d];function y(g,b){return t(),o("div",m,f)}const _=e(p,[["render",y]]);export{_ as default};
