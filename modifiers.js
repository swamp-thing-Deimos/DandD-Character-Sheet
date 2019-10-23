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

function proficiencyCheck() {
    let charLevel = 5; //pull level from object
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
    return isProficient ? baseMod + proficiencyCheck() : baseMod;
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
    return parseInt(mainStatModifier)+ proficiencyCheck();
}
//damage modifier (note: damage modifier is just the primary stat modifier used for that weapon type.
//spell save DC
function spellSaveDC(abilityModifier, specialMod) {
    return 8+parseInt(abilityModifier)+proficiencyCheck()+parseInt(specialMod);
}


// modifiers that use str: Athletics, extra: melee attacks
//example:

// modifiers that use dex: Acrobatics, Sleight of hand, Stealth, extra: ranged attacks

// modifiers that use Constitution: N/A

// modifiers that use Int: Arcana, History, Investigation, Nature, Religion

// modifiers that use Wisdom: Animal Handling, Insight, Medicine, Perception, Survival, extra: passive perception

// modifiers that use charisma: Deception, intimidation, Performance, Persuasion


//optionals:
// hit dice rolls

function healthRoll(startingLevel,hitDie, conMod) {
    return startingLevel*diceRoll(hitDie) + conMod;
}







