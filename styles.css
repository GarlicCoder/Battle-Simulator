// declare query selectors
const mainContainer = document.querySelector(".main-container");
const startButton = document.querySelector(".js-start-button");
const restartButton = document.querySelector(".js-restart");
const defendButton = document.querySelector(".js-defend-button");
const statsButton = document.querySelector(".js-stats-button");
const playerOneEl = document.querySelector(".player-one");
const playerTwoEl = document.querySelector(".player-two");
const attackButton = document.querySelector(".js-attack-button");
const battleLog = document.getElementById("battle-log");
const winnerContainer = document.getElementById("winner");
const playerStats = document.getElementById("player-stats");
let action;

// declare names
const names = [
  "Goku", 
  "Vegeta",
  "Gohan", 
  "Goten", 
  "Trunks", 
  "Deku", 
  "Bakugo", 
  "Shin Chan", 
  "Spongebob", 
  "Kirby", 
  "Zelda", 
  "Inuyasha", 
  "Frieren",
  "Peter Griffin", 
  "Bluey",
  "Chuu from LOONA",
  "Pikachu",
  "Ru Paul",
  "Garfield", 
  "RX-78-2", 
  "underscores",
  "ninajirachi",
  "Porter Robinson",
  "Sakura",
  "Hello Kitty",
  "glep",
  "pink pantheress",
  "Meredith from Grey's Anatomy",
  "Luhan",
  "Aang",
  "Finn the Human",
  "Tanjiro",
  "Rico Nasty",
  "Olivia Rodrigo",
  "Bree Van de Kamp",
  "Lynette Scavo",
  "Susan Mayer",
  "Gabrielle Solis",
  "Zuko",
  "Sonic the Hedgehog",
  "iCarly"
];

function randomAction() {
  let actionList = [
  "KICK", "SLAM", "SLAP", "PUNCH", "PUSH", "SWIPE", "STARE DOWN", "STRIKE", "MAGIC SPELL", "KAMAHAMEHA", "RASENGAN", "DETROIT SMASH", "BIG BANG ATTACK", "SPIRIT BOMB", "TICKLE", "FALCON PUNCH", "DRAGON PUNCH", "TAUNT", "DOUBLE KICK", "DOUBLE PUNCH", "BURN", "BLAST", "CHOMP"
];
  action = actionList[Math.floor(Math.random() * actionList.length)];
}

// function to get random number between low and highest number
function getRandomNumberBetween(low, high) {
  return Math.floor(low + Math.random() * (high - low + 1));
}

// function to get random names
function randomName(names) {
   return Math.floor(Math.random() * names.length);
}



// function to generate random stats
function createCharacter() {
  return {
    name: names[randomName(names)],
    health: getRandomNumberBetween(250, 300),
    hitPoints: getRandomNumberBetween(5, 30),
    defense: getRandomNumberBetween(1, 20),
    /* strength: getRandomNumberBetween(1, 10),
   persuasion: getRandomNumberBetween(1, 10),
    magic: getRandomNumberBetween(1, 10),
    cooking: getRandomNumberBetween(1, 10),
    evasion: getRandomNumberBetween(1, 10), */
    luck: getRandomNumberBetween(1, 100),
  };
}

// function to display character info
function displayCharacterInfo(player, el) {
  const playerEl = document.querySelector(el);
  let characterInfo = "";

  for (const property in player) {
    characterInfo += `<span class="${property}" style="text-transform: capitalize"><span style="font-weight: bold">${property}:</span> ${player[property]} <br></span>`;
  }
  playerEl.innerHTML = characterInfo;
}

const playerOne = createCharacter();
const playerTwo = createCharacter();

// starting the battle and character generation
startButton.addEventListener("click", function () {
  mainContainer.style.display = "block";
  displayCharacterInfo(playerOne, ".player-one");
  displayCharacterInfo(playerTwo, ".player-two");
  startButton.style.display = "none";
  attackButton.style.display = "block";
  battleLog.style.display = "block";

});

// restart the page
restartButton.addEventListener("click", function () {
  location.reload();
});

// declaring variables for functions
let playerOneHealth = playerOne.health;
let playerTwoHealth = playerTwo.health;
let playerOneDamage;
let playerTwoDamage;
let playerOneDefense = playerOne.defense;
let playerTwoDefense = playerTwo.defense;
let playerOneSecretStat = playerOne.luck;
let playerTwoSecretStat = playerTwo.luck;
let actionNumber;



// secret stat randomizer
function randomSecretStat() {
  playerOneSecretStat = getRandomNumberBetween(0, 100);
  playerTwoSecretStat = getRandomNumberBetween(0, 100);
displaySecretStat;
}

function displaySecretStat() {
      console.log("Player One Secret Stat: " + playerOneSecretStat);
  console.log("Player Two Secret Stat: " + playerTwoSecretStat);
}

// function random damage
function randomDamagePoints() {
  playerOneDamage =
    playerOne.hitPoints - Math.floor(Math.random() * playerTwo.defense);
  playerTwoDamage =
    playerTwo.hitPoints - Math.floor(Math.random() * playerOne.defense);
    if (playerOneDamage <= 0) {
        playerOneDamage = 0;
    } else if (playerTwoDamage <= 0) {
        playerTwoDamage = 0;

    }
    displayDamage();
};

function decreasedDamagePoints() {
  playerOneDamage = Math.floor(Math.random() * 11);
  playerTwoDamage = Math.floor(Math.random() * 11);
   if (playerOneDamage <= 0) {
        playerOneDamage = 1;
    } else if (playerTwoDamage <= 0) {
        playerTwoDamage = 1;
    }
        displayDamage();
;}

function displayDamage() {
          console.log("Player One Damage: " + playerOneDamage);
  console.log("Player Two Damage: " + playerTwoDamage);
}

function randomDefensePoints() {
    playerOneDefense = playerOne.defense - Math.floor(Math.random() * playerOne.defense);
    playerTwoDefense = playerTwo.defense - Math.floor(Math.random() * playerTwo.defense);
    
};


// function when player one attacks successfully
function playerOneAttack() {
  battleLog.innerHTML =
    "<strong>" + playerOne.name +
    "</strong> uses <strong>" + action + "</strong> against <strong>" +
    playerTwo.name +
    "</strong>. It's effective and deals <strong>" +
    playerOneDamage +
    " damage.</strong><br>";
  playerTwoHealth -= playerOneDamage;
  battleLog.innerHTML +=
    "<strong>" +
    playerOne.name +
    " health:</strong> " +
    playerOneHealth +
    "<br>";
  battleLog.innerHTML +=
    "<strong>" +
    playerTwo.name +
    " health:</strong> " +
    playerTwoHealth +
    " (-" +
    playerOneDamage +
    ")<br> <img src=\"https://web.archive.org/web/20090731102826/http://hk.geocities.com/garveyhk/hamster/hamster/bite.gif\">";
};

// function when player two attacks successfully
function playerTwoAttack() {
  battleLog.innerHTML =
    "<strong>" + playerTwo.name +
    "</strong> uses <strong>" + action + "</strong> against <strong>" +
    playerOne.name +
    "</strong>. It's effective and deals <strong>" +
    playerTwoDamage +
    " damage.</strong>" +
    "<br>";
  playerOneHealth -= playerTwoDamage;
  battleLog.innerHTML +=
    "<strong>" +
    playerOne.name +
    " health:</strong> " +
    playerOneHealth +
    " (-" +
    playerTwoDamage +
    ")<br>";
  battleLog.innerHTML +=
    "<strong>" +
    playerTwo.name +
    " health:</strong> " +
    playerTwoHealth +
    "<br> <img src=\"https://web.archive.org/web/20090731102827/http://hk.geocities.com/garveyhk/hamster/hamster/sick3.gif\">";
};

function displayDefense() {
     console.log("Player One Defense: " + playerOneDefense);
        console.log("Player Two Defense: " + playerTwoDefense);
}

// function when defense is successful 
function defendSuccessText(defendant, attacker) {
    battleLog.innerHTML = "<strong>" + defendant.name + "</strong> creates a defense barrier around them. <strong>" + attacker.name  + "</strong> uses <strong>" + action + "</strong> and it does 0 damage!<br>";
     battleLog.innerHTML +=
    "<strong>" +
    playerOne.name +
    " health:</strong> " +
    playerOneHealth +
   "<br>";
  battleLog.innerHTML +=
    "<strong>" +
    playerTwo.name +
    " health:</strong> " +
    playerTwoHealth +
    "<br> <img src=\"https://web.archive.org/web/20090731102827/http://hk.geocities.com/garveyhk/hamster/hamster/play1.gif\">";
}

// function when defense is not successful 
function defendFailText(defendant, attacker) {
     battleLog.innerHTML = "<strong>" + defendant.name + "</strong> tries to create a defense barrier around them. But they accidentally farted instead! How embarrassing...The defense barrier fails... <br><strong>" + attacker.name  + "</strong> uses <strong>" + action + "</strong> and it does some damage!<br>";
    playerOneHealth -= playerTwoDamage;

 battleLog.innerHTML +=
    "<strong>" +
    playerOne.name +
    " health:</strong> " +
    playerOneHealth + " (-" + playerTwoDamage + 
    ")<br>";
  battleLog.innerHTML +=
    "<strong>" +
    playerTwo.name +
    " health:</strong> " + 
    playerTwoHealth + "<br> <img src=\"https://web.archive.org/web/20091027013601/http://hk.geocities.com/garveyhk/hamster/hamster/doublerod.gif\">";
}


// function when secret stat is ===
function drawText() {
  battleLog.innerHTML =
    "<strong> " +
    playerOne.name +
    "</strong> and <strong>" +
    playerTwo.name +
    "</strong> started talking and realized they actually have a mutual friend in common. What a small world! Wait a second, get back to fighting you guys!!!!! <br> <img src=\"https://web.archive.org/web/20090731102826/http://hk.geocities.com/garveyhk/hamster/hamster/angry.gif\">";

}

// function when no damage occurs
function noDamageText(attacker, receiver, receiverHealth, attackerHealth) {
  battleLog.innerHTML =
   "<strong>" + attacker.name + "</strong> attempts to use <strong>" + action + "</strong> against <strong> "+ receiver.name + "</strong> but misses!<br>";
   
  battleLog.innerHTML +=
    "<strong>" + attacker.name + " health:</strong> " + attackerHealth + "<br>";
  battleLog.innerHTML +=
    "<strong>" + receiver.name + " health:</strong> " + receiverHealth + "<br> <img src=\"https://web.archive.org/web/20090731102827/http://hk.geocities.com/garveyhk/hamster/hamster/look.gif\">";
}

// function when health reaches 0
function gameOverText(winner) {
    winnerContainer.style.display = "block";
  battleLog.innerHTML =
    "<strong>" +
    playerOne.name +
    " health:</strong> " +
    playerOneHealth +
    "<br>";
  battleLog.innerHTML +=
    "<strong>" +
    playerTwo.name +
    " health:</strong> " +
    playerTwoHealth;
  battleLog.innerHTML += "<br>Game Over! <strong>" + winner.name + "</strong> wins!";
 
  attackButton.disabled = true;
  defendButton.disabled = true;
}

// battle button, initiating battle
startButton.addEventListener("click", function () {
    battleLog.innerHTML =
    "Welcome to Battle Simulator! Your goal is to battle against the computer and try to win!<br>";
  battleLog.innerHTML +=
    "<strong>" + playerOne.name + "</strong> (You) and <strong>" + playerTwo.name + "</strong>  (Computer) begin to battle!" + "<br>";
statsButton.style.display = "block";
defendButton.style.display = "block";
});

// battle button, battling until a players health hits 0
attackButton.addEventListener("click", function () {
    randomSecretStat();
    randomDamagePoints();
    randomAction();
  if (playerOneSecretStat > playerTwoSecretStat) {
    if (playerOneDamage <= 0) {
      noDamageText(playerOne, playerTwo, playerTwoHealth, playerOneHealth);
    } else {
      playerOneAttack();
    };
  } else if (playerTwoSecretStat > playerOneSecretStat) {
    if (playerTwoDamage <= 0) {
      noDamageText(playerTwo, playerOne, playerOneHealth, playerTwoHealth);
    }
    else {
      playerTwoAttack();
    };
  } else {
    randomDamagePoints();
    drawText();
  };
  if (playerOneHealth <= 0) {
    gameOverText(playerTwo);
  } else if (playerTwoHealth <= 0) {
    gameOverText(playerOne);
  }
});

// defend button
defendButton.addEventListener("click", function () {
    displayDefense();
    randomSecretStat();
    decreasedDamagePoints();
    randomAction();

    if (playerOneSecretStat > playerTwoSecretStat) {
        if (playerOneDefense > playerTwoDefense) {
            defendSuccessText(playerOne, playerTwo)
        } else if (playerOneDefense < playerTwoDefense) {
          
            defendFailText(playerOne, playerTwo);
        }}
        else {
       
            defendFailText(playerOne, playerTwo);
        }
          if (playerOneHealth <= 0) {
    gameOverText(playerTwo);
  } else if (playerTwoHealth <= 0) {
    gameOverText(playerOne);
  }
});



function toggleStats() {
    if (playerStats.style.display === "none") {
        playerStats.style.display = "flex";
    } else {
        playerStats.style.display = "none";
    }
}
