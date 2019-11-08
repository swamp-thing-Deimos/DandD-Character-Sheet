"use strict";

//function to calculate the roll made plus the modifier
function calcThrow(mod, roll) {
    let diceThrow = mod + roll;
    return diceThrow;
}

//function that takes in a string from d4 to d20 and returns a random number based on the dice or false with an alert
//if the input is not one of the desired inputs
function diceRoll(pickedDice) {
    switch (pickedDice) {
        case 'd4':
            return Math.floor(Math.random() * 4) + 1;
        case 'd6':
            return Math.floor(Math.random() * 6) + 1;
        case 'd8':
            return Math.floor(Math.random() * 8) + 1;
        case 'd10':
            return Math.floor(Math.random() * 10) + 1;
        case 'd12':
            return Math.floor(Math.random() * 12) + 1;
        case 'd20':
            return Math.floor(Math.random() * 20) + 1;
        default:
            alert("ERROR: diceRoll function got invalid input");
            return false;
    }

}

//function that pulls from the character object the character's level and calculates' the character
function proficiencyBonusNumber() {
    let charLevel = parseInt(character.generalStats.level); //pull level from object
    if (parseInt(charLevel) > 16 && parseInt(charLevel) <= 20) {
        return 6;
    } else if (parseInt(charLevel) <= 16 && parseInt(charLevel) > 12) {
        return 5;
    } else if (parseInt(charLevel) <= 12 && parseInt(charLevel) > 8) {
        return 4;
    } else if (parseInt(charLevel) <= 8 && parseInt(charLevel) > 4) {
        return 3;
    } else if (parseInt(charLevel) <= 4 && parseInt(charLevel) > 0) {
        return 2;
    } else {
        alert("ERROR proficiencyCheck charlevel input is not valid");
        return false;
    }
}

function criticalCheck(roll) {
    return parseInt(roll) === 1 ? "Critical Failure" : parseInt(roll) === 20 ? "Critical Success" : false;
}

function addMod(baseMod, isProficient) {
    return isProficient ? baseMod + proficiencyBonusNumber() : baseMod;
}

function isProficientString(proficient,skill) {
    if (proficient === true) {
        return proficiencyBonusNumber() + " : Character is proficient in " +skill;
    } else return "0 : character not Proficient in "+ skill;
}

function levelCheck(charlevel) {
    return parseInt(charlevel) >= 1 && parseInt(charlevel) <= 20;
}

// push modifiers into object
//calculate mod first (bonus mod is 0 at this point and is not important for the moment)
function calcMod(charStat, bonusMod) {
    charStat = parseInt(charStat);
    // console.log(charStat);
    var statTotal = parseInt(charStat) + parseInt(bonusMod);
    // console.log(statTotal);
    var modStat = 0;
    if (statTotal >= 20) {
        modStat = 5;
    } else if (statTotal < 20 && statTotal >= 18) {
        modStat = 4;
    } else if (statTotal < 18 && statTotal >= 16) {
        modStat = 3;
    } else if (statTotal < 16 && statTotal >= 14) {
        modStat = 2;
    } else if (statTotal < 14 && statTotal >= 12) {
        modStat = 1;
    } else if (statTotal < 12 && statTotal >= 10) {
        modStat = 0;
    } else if (statTotal < 10 && statTotal >= 8) {
        modStat = -1;
    } else if (statTotal < 8 && statTotal >= 6) {
        modStat = -2;
    } else if (statTotal < 6 && statTotal >= 4) {
        modStat = -3;
    } else if (statTotal < 4 && statTotal >= 2) {
        modStat = -4;
    } else if (statTotal < 2 && statTotal > 0) {
        modStat = -5;
    } else if (statTotal <= 0) {
        modStat = -5;
    } else {
        return "error";
    }
    return modStat;
}

function checkAndFixPrimaryStats(stat) {
    stat = parseInt(stat);
    if (stat > 20) {
        return 20;
    } else if (stat < 1) {
        return 1;
    } else if (!isNaN(stat)) {
        return stat;
    } else return 10;
}

// attack rolls
function attackModifier(mainStatModifier) {
    return parseInt(mainStatModifier) + proficiencyBonusNumber();
}

//damage modifier (note: damage modifier is just the primary stat modifier used for that weapon type.
//spell save DC
function spellSaveDC(abilityModifier, specialMod) {
    return 8 + parseInt(abilityModifier) + proficiencyBonusNumber() + parseInt(specialMod);
}


// modifiers that use str: Athletics, extra: melee attacks

var athleticBox = document.getElementById("athlStat");


// modifiers that use dex: Acrobatics, Sleight of hand, Stealth, extra: ranged attacks
var acrobaticsBox = document.getElementById("acroStat");
var SlightOfHandBox = document.getElementById("sleightStat");
var stealthBox = document.getElementById("stealthStat");

// modifiers that use Constitution: N/A

// modifiers that use Int: Arcana, History, Investigation, Nature, Religion
var arcanaBox = document.getElementById("arcanaStat");
var historyBox = document.getElementById("histStat");
var investigationBox = document.getElementById("investStat");
var natureBox = document.getElementById("natStat");
var religionBox = document.getElementById("reliStat");

// modifiers that use Wisdom: Animal Handling, Insight, Medicine, Perception, Survival, extra: passive perception
var animalHandlingBox = document.getElementById("animalStat");
var insightBox = document.getElementById("insightStat");
var medicineBox = document.getElementById("mediStat");
var perceptionBox = document.getElementById("percStat");
var survivalBox = document.getElementById("survStat");


// modifiers that use charisma: Deception, intimidation, Performance, Persuasion
var deceptionBox = document.getElementById("deceptStat");
var intimidationBox = document.getElementById("intimStat");
var performanceBox = document.getElementById("perfStat");
var persuasionBox = document.getElementById("persStat");


// hit dice rolls
function pullClassHitDice(charClass) {
    switch (charClass) {
        case 'fighter':
            return playerClasses.fighter.hitDice;
        case 'warlock':
            return playerClasses.warlock.hitDice;
        case 'wizard':
            return playerClasses.wizard.hitDice;
        case 'monk':
            return playerClasses.monk.hitDice;
        case 'bard':
            return playerClasses.bard.hitDice;
        case 'barbarian':
            return playerClasses.barbarian.hitDice;
        case 'rogue':
            return playerClasses.rogue.hitDice;
        case 'ranger':
            return playerClasses.ranger.hitDice;
        case 'druid':
            return playerClasses.druid.hitDice;
        case 'paladin':
            return playerClasses.paladin.hitDice;
        case 'sorcerer':
            return playerClasses.sorcerer.hitDice;
        case 'cleric':
            return playerClasses.cleric.hitDice;
        default:
            alert("ERROR: " + charClass + " is not a valid character class");
            return 0;
    }

}

function healthRoll(startingLevel, hitDie, conMod) {
    return startingLevel * diceRoll(hitDie) + conMod;
}

function generateHealth() {
    if (character.generalStats.health === '' && character.generalStats.class !== '' && character.generalStats.level !== 0 && character.primaryStats.constitution !== 0) {
        character.generalStats.health = healthRoll(character.generalStats.level, pullClassHitDice(character.generalStats.class), calcMod(character.primaryStats.constitution, 0));
        document.getElementById('healthBlock').value = character.generalStats.health;
    }
}

// object functions
function primaryStatsFixer() {
    character.primaryStats.strength = checkAndFixPrimaryStats(character.primaryStats.strength);
    character.primaryStats.dexterity = checkAndFixPrimaryStats(character.primaryStats.dexterity);
    character.primaryStats.constitution = checkAndFixPrimaryStats(character.primaryStats.constitution);
    character.primaryStats.intelligence = checkAndFixPrimaryStats(character.primaryStats.intelligence);
    character.primaryStats.wisdom = checkAndFixPrimaryStats(character.primaryStats.wisdom);
    character.primaryStats.charisma = checkAndFixPrimaryStats(character.primaryStats.charisma);
}

//
function runMainStatCalc() {
    character.savingThrowModifier.strength = calcMod(character.primaryStats.strength, 0);
    character.savingThrowModifier.dexterity = calcMod(character.primaryStats.dexterity, 0);
    character.savingThrowModifier.constitution = calcMod(character.primaryStats.constitution, 0);
    character.savingThrowModifier.intelligence = calcMod(character.primaryStats.intelligence, 0);
    character.savingThrowModifier.wisdom = calcMod(character.primaryStats.wisdom, 0);
    character.savingThrowModifier.charisma = calcMod(character.primaryStats.charisma, 0);
}

function runSkillModifierCheck() {

    character.skillStats.acrobatics = addMod(character.savingThrowModifier.dexterity, determineIfProficient("acrobatics", character.generalStats.proficientSkills));
    character.skillStats.animalHandling = addMod(character.savingThrowModifier.wisdom, determineIfProficient("animal handling", character.generalStats.proficientSkills));
    character.skillStats.arcana = addMod(character.savingThrowModifier.intelligence, determineIfProficient("arcana", character.generalStats.proficientSkills));
    character.skillStats.athletics = addMod(character.savingThrowModifier.strength, determineIfProficient("athletics", character.generalStats.proficientSkills));
    character.skillStats.deception = addMod(character.savingThrowModifier.charisma, determineIfProficient("deception", character.generalStats.proficientSkills));
    character.skillStats.history = addMod(character.savingThrowModifier.intelligence, determineIfProficient("history", character.generalStats.proficientSkills));
    character.skillStats.insight = addMod(character.savingThrowModifier.wisdom, determineIfProficient("insight", character.generalStats.proficientSkills));
    character.skillStats.intimidation = addMod(character.savingThrowModifier.charisma, determineIfProficient("intimidation", character.generalStats.proficientSkills));
    character.skillStats.investigation = addMod(character.savingThrowModifier.intelligence, determineIfProficient("investigation", character.generalStats.proficientSkills));
    character.skillStats.medicine = addMod(character.savingThrowModifier.wisdom, determineIfProficient("medicine", character.generalStats.proficientSkills));
    character.skillStats.nature = addMod(character.savingThrowModifier.intelligence, determineIfProficient("nature", character.generalStats.proficientSkills));
    character.skillStats.perception = addMod(character.savingThrowModifier.wisdom, determineIfProficient("perception", character.generalStats.proficientSkills));
    character.skillStats.performance = addMod(character.savingThrowModifier.charisma, determineIfProficient("performance", character.generalStats.proficientSkills));
    character.skillStats.persuasion = addMod(character.savingThrowModifier.charisma, determineIfProficient("persuasion", character.generalStats.proficientSkills));
    character.skillStats.religion = addMod(character.savingThrowModifier.intelligence, determineIfProficient("religion", character.generalStats.proficientSkills));
    character.skillStats.sleight = addMod(character.savingThrowModifier.dexterity, determineIfProficient("sleight of hand", character.generalStats.proficientSkills));
    character.skillStats.stealth = addMod(character.savingThrowModifier.dexterity, determineIfProficient("stealth", character.generalStats.proficientSkills));
    character.skillStats.survival = addMod(character.savingThrowModifier.wisdom, determineIfProficient("survival", character.generalStats.proficientSkills));
}


function connectCharacterToClassObject(charClass) {
    switch (charClass) {
        case "Barbarian":
            return playerClasses.barbarian;
        case "Bard":
            return playerClasses.bard;
        case "Cleric":
            return playerClasses.cleric;
        case "Druid":
            return playerClasses.druid;
        case "Fighter":
            return playerClasses.fighter;
        case "Monk":
            return playerClasses.monk;
        case "Paladin":
            return playerClasses.paladin;
        case "Ranger":
            return playerClasses.ranger;
        case "Rogue":
            return playerClasses.rogue;
        case "Sorcerer":
            return playerClasses.sorcerer;
        case "Warlock":
            return playerClasses.warlock;
        case "Wizard":
            return playerClasses.wizard;
        default:
            alert("Error: unknown Class, pulling barbarian object to compensate!");
            return playerClasses.barbarian;
    }
}


function grabRandomSkills(numberOfSkills, SkillArray) {
    var proficientArray = [];
    var allSkillsArray = ['acrobatics', 'animal handling', 'arcana', 'athletics', 'deception', 'history', 'insight',
        'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'religion', 'sleight of hand', 'stealth', 'survival'];
    var randomSkill;
    for (var i = 0; i < numberOfSkills; i++) {
        if (SkillArray[0] === 'all') {
            randomSkill = Math.floor(Math.random() * allSkillsArray.length);
            proficientArray.push(allSkillsArray[randomSkill]);
        } else {
            randomSkill = Math.floor(Math.random() * SkillArray.length);
            proficientArray.push(SkillArray[randomSkill]);
        }
    }
    return proficientArray;
}

function determineIfProficient(skillName, skillArray) {
    var isProficient = false;
    skillArray.forEach(function (skill) {
        if (skill === skillName) {
            isProficient = true;
        }
    });
    return isProficient;
}












