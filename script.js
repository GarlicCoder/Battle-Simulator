// declare query selectors
const mainContainer = document.querySelector(".main-container");
const startButton = document.querySelector(".js-start-button");
const restartButton = document.querySelector(".js-restart");
const playerOneEl = document.querySelector(".player-one");
const playerTwoEl = document.querySelector(".player-two");
const attackButton = document.querySelector(".js-attack-button");
const battleLog = document.getElementById("battle-log");
const secretStat = document.querySelector(".secretStat");

// declare names
const names = [
  "Laios", // tall-man 0
  "Falin", // tall-man 1
  "Marcille", // half elf & half tall-man 2
  "Chilchuck", // half foot 3
  "Senshi", // dwarf 4
  "Izutsumi", // tall-man 5
  "Goku", // tall-man 6
  "Vegeta", // dwarf 7
  "Gohan", // tall-man 8
  "Goten", // half-foot 9
  "Trunks", // kobold 10
  "Deku", // tall-man 11
  "Bakugo", // dwarf 12
  "Coco", // gnome 13
  "Shin Chan", // elf 14
  "Spongebob", // tall-man 15
  "Kirby", // tall-man 16
  "Link", // tall-man 17
  "Zelda", // ogre 18
  "Inuyasha", // Orc 19
  "Frieren", // Orc 20
  "Peter Griffin", 
  "Bluey",
  "Chuu from LOONA",
  "Pikachu",
  "Ru Paul",
  "Garfield"
];

// declare types
const types = [
  "Elf", // 0
  "Ogre", // 1
  "Tall-man", // 2
  "Half-foot", // 3
  "Beast-man", // 4
  "Dwarf", // 5
  "Kbold", // 6
  "Orc", // 7
  "Gnome", // 8
];

// function to get random number between low and highest number
function getRandomNumberBetween(low, high) {
  return Math.floor(low + Math.random() * (high - low + 1));
}
/*
function matchType() {
  if (
    name === 0 ||
    name === 1 ||
    name === 5 ||
    name === 6 ||
    name === 8 ||
    name === 11 ||
    name === 15 ||
    name === 16 ||
    name === 17
  ) {
    type = types[2];
  } else {
    type = "Other";
  }
}; */

// function to generate random stats
function createCharacter() {
  return {
    name: names[getRandomNumberBetween(0, 26)],
    type: types[getRandomNumberBetween(0, 8)],
    age: getRandomNumberBetween(21, 80),
    health: getRandomNumberBetween(100, 200),
    hitPoints: getRandomNumberBetween(5, 30),
    defense: getRandomNumberBetween(1, 29),
    strength: getRandomNumberBetween(1, 10),
    persuasion: getRandomNumberBetween(1, 10),
    magic: getRandomNumberBetween(1, 10),
    cooking: getRandomNumberBetween(1, 10),
    evasion: getRandomNumberBetween(1, 10),
    secretStat: getRandomNumberBetween(1, 100),
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
let playerOneSecretStat = playerOne.secretStat;
let playerTwoSecretStat = playerTwo.secretStat;

// secret stat randomizer
function randomSecretStat() {
  playerOneSecretStat = getRandomNumberBetween(0, 100);
  playerTwoSecretStat = getRandomNumberBetween(0, 100);
  console.log("Player One Secret Stat: " + playerOneSecretStat);
  console.log("Player Two Secret Stat: " + playerTwoSecretStat);
}

// function random damage
function randomDamagePoints() {
  playerOneDamage =
    playerOne.hitPoints - Math.floor(Math.random() * playerTwo.defense);
  playerTwoDamage =
    playerTwo.hitPoints - Math.floor(Math.random() * playerOne.defense);
  console.log("Player One Damage: " + playerOneDamage);
  console.log("Player Two Damage: " + playerTwoDamage);
};

// function when player one attacks successfully
function playerOneAttack() {
  battleLog.innerHTML =
    "<strong>" + playerOne.name +
    "</strong> hits <strong>" +
    playerTwo.name +
    "</strong> dealing <strong>" +
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
    ")<br>";
};

// function when player two attacks successfully
function playerTwoAttack() {
  battleLog.innerHTML =
    "<strong>" + playerTwo.name +
    "</strong> hits <strong>" +
    playerOne.name +
    "</strong> dealing <strong>" +
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
    "<br>";
};

// function when secret stat is ===
function drawText() {
  battleLog.innerHTML =
    "<strong> " +
    playerOne.name +
    "</strong> and <strong>" +
    playerTwo.name +
    "</strong> got distracted by a dancing mushroom. Wait what?? Ok, Let's try this again.";
}

// function when no damage occurs
function noDamageText(attacker, receiver, receiverHealth, attackerHealth) {
  battleLog.innerHTML =
    attacker.name + " attempts to hit " + receiver.name + " but misses!<br>";
  battleLog.innerHTML +=
    "<strong>" + attacker.name + " health:</strong> " + attackerHealth + "<br>";
  battleLog.innerHTML +=
    "<strong>" + receiver.name + " health:</strong> " + receiverHealth + "<br>";
}

// function when health reaches 0
function gameOverText(winner) {
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
  battleLog.innerHTML += "<br>Game Over! " + winner.name + " wins!";
  attackButton.disabled = true;
}

// battle button, initiating battle
startButton.addEventListener("click", function () {
  battleLog.innerHTML =
    "<strong>" + playerOne.name + "</strong> and <strong>" + playerTwo.name + "</strong> begin to battle!" + "<br>";
});

// battle button, battling until a players health hits 0
attackButton.addEventListener("click", function () {
    randomSecretStat();
    randomDamagePoints();
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
