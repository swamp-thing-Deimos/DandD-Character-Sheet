"use strict";


function calcThrow(mod, roll) {
    let diceThrow = mod + roll;
    return diceThrow;
}

function diceRoll(pickedDice){
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

function proficiencyBonusNumber() {
    let charLevel = parseInt(character.generalStats.level); //pull level from object
    if (parseInt(charLevel) >16 && parseInt(charLevel) <= 20){
        return 6;
    }else if (parseInt(charLevel) <= 16 && parseInt(charLevel) > 12){
        return 5;
    }else if (parseInt(charLevel) <= 12 && parseInt(charLevel) > 8){
        return 4;
    }else if (parseInt(charLevel) <= 8 && parseInt(charLevel) > 4){
        return 3;
    }else  if (parseInt(charLevel) <= 4 && parseInt(charLevel) > 0){
        return 2;
    }else {
        alert("ERROR proficiencyCheck charlevel input is not valid");
        return false;
    }
}

function criticalCheck(roll) {
    return parseInt(roll) === 1 ? "Critical Failure" : parseInt(roll) === 20 ? "Critical Success" : false;
}

function addMod(isProficient, baseMod){
    return isProficient ? baseMod + proficiencyBonusNumber() : baseMod;
}

function levelCheck(charlevel) {
    return parseInt(charlevel) >= 1 && parseInt(charlevel) <= 20;
}

// push modifiers into object
//calculate mod first (bonus mod is 0 at this point and is not important for the moment)
function calcMod(charStat, bonusMod) {

    let statTotal = charStat + bonusMod;
    let modStat = 0;
    if (statTotal >= 20) {
        statTotal = 20;
        modStat = 5;
    }else if (statTotal < 20 && statTotal >= 18) {
        modStat = 4;
    }else if (statTotal < 18 && statTotal >= 16) {
        modStat = 3;
    }else if (statTotal < 16 && statTotal >= 14) {
        modStat = 2;
    }else if (statTotal < 14 && statTotal >= 12) {
        modStat = 1;
    }else if (statTotal < 12 && statTotal >= 10) {
        modStat = 0;
    }else if (statTotal < 10 && statTotal >= 8) {
        modStat = -1;
    }else if (statTotal < 8 && statTotal >= 6) {
        modStat = -2;
    }else if (statTotal < 6 && statTotal >= 4) {
        modStat = -3;
    }else if (statTotal < 4 && statTotal >= 2) {
        modStat = -4;
    }else if (statTotal < 2 && statTotal > 0) {
        modStat = -5;
    }else if (statTotal <= 0) {
        statTotal = 1;
        modStat = -5;
    }
    return modStat;
}

// attack rolls
function attackModifier(mainStatModifier) {
    return parseInt(mainStatModifier)+ proficiencyBonusNumber();
}
//damage modifier (note: damage modifier is just the primary stat modifier used for that weapon type.
//spell save DC
function spellSaveDC(abilityModifier, specialMod) {
    return 8+parseInt(abilityModifier)+proficiencyBonusNumber()+parseInt(specialMod);
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



//optionals:
// hit dice rolls

function healthRoll(startingLevel,hitDie, conMod) {
    return startingLevel*diceRoll(hitDie) + conMod;
}

// object functions
function runModifierCalc() {
    character.savingThrowModifier.strength = calcMod(character.primaryStats.strength, proficiencyBonusNumber());
    character.savingThrowModifier.dexterity = calcMod(character.primaryStats.dexterity, proficiencyBonusNumber());
    character.savingThrowModifier.constitution = calcMod(character.primaryStats.constitution, proficiencyBonusNumber());
    character.savingThrowModifier.intelligence = calcMod(character.primaryStats.intelligence, proficiencyBonusNumber());
    character.savingThrowModifier.wisdom = calcMod(character.primaryStats.wisdom, proficiencyBonusNumber());
    character.savingThrowModifier.charisma = calcMod(character.primaryStats.charisma, proficiencyBonusNumber());
}

function runSkillModifierCheck() {
    character.skillStats.acrobatics = addMod(character.savingThrowModifier.dexterity, false);
    character.skillStats.animalHandling = addMod(character.savingThrowModifier.wisdom, false);
    character.skillStats.arcana = addMod(character.savingThrowModifier.intelligence, false);
    character.skillStats.athletics = addMod(character.savingThrowModifier.strength, false);
    character.skillStats.deception = addMod(character.savingThrowModifier.charisma, false);
    character.skillStats.history = addMod(character.savingThrowModifier.intelligence, false);
    character.skillStats.insight = addMod(character.savingThrowModifier.wisdom, false);
    character.skillStats.intimidation = addMod(character.savingThrowModifier.charisma, false);
    character.skillStats.investigation = addMod(character.savingThrowModifier.intelligence, false);
    character.skillStats.medicine = addMod(character.savingThrowModifier.wisdom, false);
    character.skillStats.nature = addMod(character.savingThrowModifier.intelligence, false);
    character.skillStats.perception = addMod(character.savingThrowModifier.wisdom, false);
    character.skillStats.performance = addMod(character.savingThrowModifier.charisma, false);
    character.skillStats.persuasion = addMod(character.savingThrowModifier.charisma, false);
    character.skillStats.religion = addMod(character.savingThrowModifier.intelligence, false);
    character.skillStats.sleight = addMod(character.savingThrowModifier.dexterity, false);
    character.skillStats.stealth = addMod(character.savingThrowModifier.dexterity, false);
    character.skillStats.survival = addMod(character.savingThrowModifier.wisdom, false);
}





