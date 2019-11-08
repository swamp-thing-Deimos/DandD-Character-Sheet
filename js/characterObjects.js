"use strict";

// array of objects to hold data for each character
// var allCharacters = [];

// nested objects to hold stats for a character
var character = {
    // object to hold general stats
    generalStats: {
        name: "",
        age: 0,
        race: "",
        class: "",
        level: 0,
        health: 0,
        speed: 0,
        proficientAttributes:[],
        proficientSkills: []
    },
    // object to hold primary stats
    primaryStats: {
        proficiency: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    // object to hold the saving throw modifiers
    savingThrowModifier: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    // object to hold the skill stats
    skillStats: {
        acrobatics: 0,
        animalHandling: 0,
        arcana: 0,
        athletics: 0,
        deception: 0,
        history: 0,
        insight: 0,
        intimidation: 0,
        investigation: 0,
        medicine: 0,
        nature: 0,
        perception: 0,
        performance: 0,
        persuasion: 0,
        religion: 0,
        sleight: 0,
        stealth: 0,
        survival: 0
    },
    // object to hold the character's background info
    backgroundInfo: {
        personality: "",
        ideals: "",
        bonds: "",
        flaws: "",
        languages: "",
        other: ""
    },
    // object to hold the character's features and traits
    featTraits: {
        features: "",
        traits: ""
    },
    // object to hold the equipment
    equipment: {
        armor: [],
        weapons: [],
        items: []
    },
    // object to hold spells
    spells: {
        cantrips: [],
        levelOne: [],
        levelTwo: [],
        levelThree: [],
        levelFour: [],
        levelFive: [],
        levelSix: [],
        levelSeven: [],
        levelEight: [],
        levelNine: []
    },
    // object to hold battle stats
    battle: {
        armorClass: "",
        initiative: 0,
        weaponBlock: 0,
        magicBlock: 0
    },
    loadFlags: {
        emptyCharacterObject: true,
        emptyGeneralObject: true,
        emptyPrimeStatObject: true,
        emptySkillStatObject: true,
        emptyBackgroundObject: true,
        emptyEquipmentObject: true,
        emptySpellsObject: true,
        emptyBattleObject: true
    }
};

var playerClasses = {
    fighter: {
        proficiency: ['str', 'con'],
        hitDice: 'd10',
        skillChoices: ['acrobatics', 'animal handling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'],
        numberOfSkillChoices: 2
    },
    cleric: {
        proficiency: ['wis', 'cha'],
        hitDice: 'd8',
        skillChoices: ['history', 'insight', 'medicine', 'persuasion', 'religion'],
        numberOfSkillChoices: 2
    },
    rogue: {
        proficiency: ['dex', 'int'],
        hitDice: 'd10',
        skillChoices: ['acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'investigation', 'perception', 'performance', 'persuasion', 'sleight of hand', 'stealth'],
        numberOfSkillChoices: 4
    },
    wizard: {
        proficiency: ['int', 'wis'],
        hitDice: 'd6',
        skillChoices: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'],
        numberOfSkillChoices: 2
    },
    warlock: {
        proficiency: ['wis', 'cha'],
        hitDice: 'd8',
        skillChoices: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion'],
        numberOfSkillChoices: 2
    },
    monk: {
        proficiency: ['str', 'dex'],
        hitDice: 'd8',
        skillChoices: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth'],
        numberOfSkillChoices: 2
    },
    paladin: {
        proficiency: ['wis', 'cha'],
        hitDice: 'd10',
        skillChoices: ['athletics', 'insight', 'intimidation', 'medicine', 'persuasion', 'religion'],
        numberOfSkillChoices: 2
    },
    ranger: {
        proficiency: ['str', 'dex'],
        hitDice: 'd10',
        skillChoices: ['animal handling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival'],
        numberOfSkillChoices: 3
    },
    druid: {
        proficiency: ['int', 'wis'],
        hitDice: 'd8',
        skillChoices: ['arcana', 'animal handling', 'insight', 'medicine', 'nature', 'perception', 'religion', 'survival'],
        numberOfSkillChoices: 2
    },
    sorcerer: {
        proficiency: ['con', 'cha'],
        hitDice: 'd6',
        skillChoices: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion'],
        numberOfSkillChoices: 2
    },
    barbarian: {
        proficiency: ['str', 'con'],
        hitDice: 'd12',
        skillChoices: ['animal handling', 'athletics', 'intimidation', 'nature', 'perception', 'survival'],
        numberOfSkillChoices: 2
    },
    bard: {
        proficiency: ['dex', 'cha'],
        hitDice: 'd8',
        skillChoices: ['all'],
        numberOfSkillChoices: 3
    },
};

var playerRaces = {
    dragonborn: {
        statBonus: ['2 str', '1 cha'],
        racialTraits: ['araconic ancestry', 'breath weapon', 'damage resistance']
    },
    dwarf: {
        statBonus: ['2 con'],
        racialTraits: ['darkvision', 'dwarven resilience', 'dwarven combat training', 'stonecunning']
    },
    elf: {
        statBonus: ['2 dex'],
        racialTraits: ['darkvision', 'keen senses', 'fey ancestry', 'trance']
    },
    gnome: {
        statBonus: ['2 int'],
        racialTraits: ['darkvision', 'gnome cunning']
    },
    halfElf: {
        statBonus: ['2 cha', '1 other'],
        racialTraits: ['darkvision', 'fey ancestry', 'skill versatility']
    },
    halfling: {
        statBonus: ['2 dex'],
        racialTraits: ['lucky', 'brave', 'halfling nimbleness']
    },
    halfOrc: {
        statBonus: ['2 str', '1 con'],
        racialTraits: ['darkvision', 'menacing', 'relentless endurance', 'savage attacks']
    },
    human: {
        statBonus: ['1 all'],
        racialTraits: ['extra language']
    },
    tiefling: {
        statBonus: ['2 cha', '1 int'],
        racialTraits: ['darkvision', 'hellish resistance', 'infernal legacy']
    }
};

//function to pull class object info for


// function that will get the values of the inputted values for the general stats into the character array
function setGeneral(e) {
    e.preventDefault();
    character.generalStats.name = document.getElementById('nameBlock').value;
    character.generalStats.age = document.getElementById('ageBlock').value;
    character.generalStats.race = document.getElementById('raceBlock').value;
    character.generalStats.class = document.getElementById('classBlock').value;
    character.generalStats.level = document.getElementById('levelBlock').value;
    character.generalStats.health = document.getElementById('healthBlock').value;
    character.generalStats.speed = document.getElementById('speedBlock').value;
    // generateHealth();
    character.loadFlags.emptyGeneralObject = false;
    if (character.generalStats.level !== 0) {
        character.primaryStats.proficiency = proficiencyBonusNumber();
        document.getElementById('profStat').value = character.primaryStats.proficiency;
    }
}

// document.getElementById('submitGeneral').onclick(function (event){setGeneral(event)});q

// function to pull from the character object's general object to the html web page
function pullGeneral(event) {
    document.getElementById('nameBlock').value = character.generalStats.name;
    document.getElementById('ageBlock').value = character.generalStats.age;
    document.getElementById('raceBlock').value = character.generalStats.race;
    document.getElementById('classBlock').value = character.generalStats.class;
    document.getElementById('levelBlock').value = character.generalStats.level;
    document.getElementById('healthBlock').value = character.generalStats.health;
    document.getElementById('speedBlock').value = character.generalStats.speed;
}

// document.getElementById('').onclick(pullGeneral());

// function to push primary stats into the character.primary object
function setPrimary(e) {
    e.preventDefault();
    character.primaryStats.proficiency = document.getElementById('profStat').value;
    character.primaryStats.strength = document.getElementById('strStat').value;
    character.primaryStats.dexterity = document.getElementById('dexStat').value;
    character.primaryStats.constitution = document.getElementById('conStat').value;
    character.primaryStats.intelligence = document.getElementById('intStat').value;
    character.primaryStats.wisdom = document.getElementById('wisStat').value;
    character.primaryStats.charisma = document.getElementById('chaStat').value;
    primaryStatsFixer();
    pullPrimary();
    runMainStatCalc();
    var classObject = connectCharacterToClassObject(character.generalStats.class);
    character.generalStats.proficientSkills = grabRandomSkills(classObject.numberOfSkillChoices, classObject.skillChoices);
    pullSkills();
    character.loadFlags.emptyPrimeStatObject = false;
    // generateHealth();
}

// document.getElementById('submitPrimary').onclick(function (event){setPrimary(event)});

//function to pull from character.primary object to the html page
function pullPrimary() {
    document.getElementById('profStat').value = character.primaryStats.proficiency;
    document.getElementById('strStat').value = character.primaryStats.strength;
    document.getElementById('dexStat').value = character.primaryStats.dexterity;
    document.getElementById('conStat').value = character.primaryStats.constitution;
    document.getElementById('intStat').value = character.primaryStats.intelligence;
    document.getElementById('wisStat').value = character.primaryStats.wisdom;
    document.getElementById('chaStat').value = character.primaryStats.charisma;
}

// document.getElementById('').onclick(pullPrimary());


//function to push from html to character.savingThrowModifier
function setSave(e) {
    e.preventDefault();
    character.savingThrowModifier.strength = document.getElementById('strSave').value;
    character.savingThrowModifier.dexterity = document.getElementById('dexSave').value;
    character.savingThrowModifier.constitution = document.getElementById('conSave').value;
    character.savingThrowModifier.intelligence = document.getElementById('intSave').value;
    character.savingThrowModifier.wisdom = document.getElementById('wisSave').value;
    character.savingThrowModifier.charisma = document.getElementById('chaSave').value;
}

// document.getElementById('submitPrimary').onclick(function (event){setSave(event)});

//function to pull from the character.savingThrowModifier to html
function pullSave() {
    document.getElementById('strSave').value = character.savingThrowModifier.strength;
    document.getElementById('dexSave').value = character.savingThrowModifier.dexterity;
    document.getElementById('conSave').value = character.savingThrowModifier.constitution;
    document.getElementById('intSave').value = character.savingThrowModifier.intelligence;
    document.getElementById('wisSave').value = character.savingThrowModifier.wisdom;
    document.getElementById('chaSave').value = character.savingThrowModifier.charisma;
}

// document.getElementById('').onclick(pullPrimary());

//function to push from html to the character.skillStats object
function setSkills(e) {
    e.preventDefault();
    character.skillStats.acrobatics = document.getElementById('acroMODIFY').value;
    character.skillStats.animalHandling = document.getElementById('animalMODIFY').value;
    character.skillStats.arcana = document.getElementById('arcanaMODIFY').value;
    character.skillStats.athletics = document.getElementById('athlMODIFY').value;
    character.skillStats.deception = document.getElementById('deceptMODIFY').value;
    character.skillStats.history = document.getElementById('hisMODIFY').value;
    character.skillStats.insight = document.getElementById('insightMODIFY').value;
    character.skillStats.intimidation = document.getElementById('intimMODIFY').value;
    character.skillStats.investigation = document.getElementById('investMODIFY').value;
    character.skillStats.medicine = document.getElementById('mediMODIFY').value;
    character.skillStats.nature = document.getElementById('natMODIFY').value;
    character.skillStats.perception = document.getElementById('percMODIFY').value;
    character.skillStats.performance = document.getElementById('perfMODIFY').value;
    character.skillStats.persuasion = document.getElementById('persMODIFY').value;
    character.skillStats.religion = document.getElementById('reliMODIFY').value;
    character.skillStats.sleight = document.getElementById('sleightMODIFY').value;
    character.skillStats.stealth = document.getElementById('stealthMODIFY').value;
    character.skillStats.survival = document.getElementById('survMODIFY').value;
    character.loadFlags.emptySkillStatObject = false;
}

// document.getElementById('submitSkills').onclick(function (event){setSkills(event)});
function pullPrimeForSkills() {
    document.getElementById('acroStat').value = character.savingThrowModifier.dexterity;
    document.getElementById('animalStat').value = character.savingThrowModifier.wisdom;
    document.getElementById('arcanaStat').value = character.savingThrowModifier.intelligence;
    document.getElementById('athlStat').value = character.savingThrowModifier.strength;
    document.getElementById('deceptStat').value = character.savingThrowModifier.charisma;
    document.getElementById('histStat').value = character.savingThrowModifier.intelligence;
    document.getElementById('insightStat').value = character.savingThrowModifier.wisdom;
    document.getElementById('intimStat').value = character.savingThrowModifier.charisma;
    document.getElementById('investStat').value = character.savingThrowModifier.intelligence;
    document.getElementById('mediStat').value = character.savingThrowModifier.wisdom;
    document.getElementById('natStat').value = character.savingThrowModifier.intelligence;
    document.getElementById('percStat').value = character.savingThrowModifier.wisdom;
    document.getElementById('perfStat').value = character.savingThrowModifier.charisma;
    document.getElementById('persStat').value = character.savingThrowModifier.charisma;
    document.getElementById('reliStat').value = character.savingThrowModifier.intelligence;
    document.getElementById('sleightStat').value = character.savingThrowModifier.dexterity;
    document.getElementById('stealthStat').value = character.savingThrowModifier.dexterity;
    document.getElementById('survStat').value = character.savingThrowModifier.wisdom;
}

function skillMisc() {
    document.getElementById('acroMISC').innerHTML = isProficientString(determineIfProficient("acrobatics", character.generalStats.proficientSkills),"acrobatics");
    document.getElementById('animalMISC').innerHTML = isProficientString(determineIfProficient("animal handling", character.generalStats.proficientSkills),"animal handling");
    document.getElementById('arcanaMISC').innerHTML = isProficientString(determineIfProficient("arcana", character.generalStats.proficientSkills),"arcana");
    document.getElementById('athlMISC').innerHTML = isProficientString(determineIfProficient("athletics", character.generalStats.proficientSkills),"athletics");
    document.getElementById('deceptMISC').innerHTML = isProficientString(determineIfProficient("deception", character.generalStats.proficientSkills),"deception");
    document.getElementById('hisMISC').innerHTML = isProficientString(determineIfProficient("history", character.generalStats.proficientSkills),"history");
    document.getElementById('insightMISC').innerHTML = isProficientString(determineIfProficient("insight", character.generalStats.proficientSkills),"insight");
    document.getElementById('intimMISC').innerHTML = isProficientString(determineIfProficient("intimidation", character.generalStats.proficientSkills),"intimidation");
    document.getElementById('investMISC').innerHTML = isProficientString(determineIfProficient("investigation", character.generalStats.proficientSkills),"investigation");
    document.getElementById('mediMISC').innerHTML = isProficientString(determineIfProficient("medicine", character.generalStats.proficientSkills),"medicine");
    document.getElementById('natMISC').innerHTML = isProficientString(determineIfProficient("nature", character.generalStats.proficientSkills),"nature");
    document.getElementById('percMISC').innerHTML = isProficientString(determineIfProficient("perception", character.generalStats.proficientSkills),"perception");
    document.getElementById('perfMISC').innerHTML = isProficientString(determineIfProficient("performance", character.generalStats.proficientSkills),"performance");
    document.getElementById('persMISC').innerHTML = isProficientString(determineIfProficient("persuasion", character.generalStats.proficientSkills),"persuasion");
    document.getElementById('reliMISC').innerHTML = isProficientString(determineIfProficient("religion", character.generalStats.proficientSkills),"religion");
    document.getElementById('sleightMISC').innerHTML = isProficientString(determineIfProficient("sleight of hand", character.generalStats.proficientSkills),"sleight of hand");
    document.getElementById('stealthMISC').innerHTML = isProficientString(determineIfProficient("stealth", character.generalStats.proficientSkills),"stealth");
    document.getElementById('survMISC').innerHTML = isProficientString(determineIfProficient("survival", character.generalStats.proficientSkills),"survival");
}

//function to pull from the character.skillStats to the html
function pullSkills() {
    runSkillModifierCheck();
    skillMisc();
    pullPrimeForSkills();

    document.getElementById('acroMODIFY').innerHTML = character.skillStats.acrobatics;
    document.getElementById('animalMODIFY').innerHTML = character.skillStats.animalHandling;
    document.getElementById('arcanaMODIFY').innerHTML = character.skillStats.arcana;
    document.getElementById('athlMODIFY').innerHTML = character.skillStats.athletics;
    document.getElementById('deceptMODIFY').innerHTML = character.skillStats.deception;
    document.getElementById('hisMODIFY').innerHTML = character.skillStats.history;
    document.getElementById('insightMODIFY').innerHTML = character.skillStats.insight;
    document.getElementById('intimMODIFY').innerHTML = character.skillStats.intimidation;
    document.getElementById('investMODIFY').innerHTML = character.skillStats.investigation;
    document.getElementById('mediMODIFY').innerHTML = character.skillStats.medicine;
    document.getElementById('natMODIFY').innerHTML = character.skillStats.nature;
    document.getElementById('percMODIFY').innerHTML = character.skillStats.perception;
    document.getElementById('perfMODIFY').innerHTML = character.skillStats.performance;
    document.getElementById('persMODIFY').innerHTML = character.skillStats.persuasion;
    document.getElementById('reliMODIFY').innerHTML = character.skillStats.religion;
    document.getElementById('sleightMODIFY').innerHTML = character.skillStats.sleight;
    document.getElementById('stealthMODIFY').innerHTML = character.skillStats.stealth;
    document.getElementById('survMODIFY').innerHTML = character.skillStats.survival;
}

// document.getElementById('').onclick(pullSkills());

//function to push from html to the character.backgroundInfo
function setBackground(e) {
    e.preventDefault();
    character.backgroundInfo.personality = document.getElementById('personTraits').value;
    character.backgroundInfo.ideals = document.getElementById('idealsBlock').value;
    character.backgroundInfo.bonds = document.getElementById('bondBlock').value;
    character.backgroundInfo.flaws = document.getElementById('flawsBlock').value;
    character.backgroundInfo.languages = document.getElementById('langBlock').value;
    character.backgroundInfo.other = document.getElementById('other').value;
    character.loadFlags.emptyBackgroundObject = false;
}

// document.getElementById('submitBackground').onclick(function (event){setBackground(event)});

//function to pull from the character.backgroundInfo object to the html
function pullBackground() {
    document.getElementById('personTraits').value = character.backgroundInfo.personality;
    document.getElementById('idealsBlock').value = character.backgroundInfo.ideals;
    document.getElementById('bondBlock').value = character.backgroundInfo.bonds;
    document.getElementById('flawsBlock').value = character.backgroundInfo.flaws;
    document.getElementById('langBlock').value = character.backgroundInfo.languages;
    document.getElementById('other').value = character.backgroundInfo.other;
}

// document.getElementById('').onclick(pullBackground());

//function to push from html to character.featTraits object
function setFeatTraits(e) {
    e.preventDefault();
    character.featTraits.features = document.getElementById('featsBlock').value;
    character.featTraits.traits = document.getElementById('traitsBlock').value;
    // character.loadFlags.
}

// document.getElementById('submitFeatTraits').onclick(function (event){setFeatTraits(event)});

//function to pull from character.featTraits object to html
function pullFeatTraits() {
    document.getElementById('featsBlock').value = character.featTraits.features;
    document.getElementById('traitsBlock').value = character.featTraits.traits;
}

// document.getElementById('').onclick(pullFeatTraits());

//function to push from html to character.equipment object
function setEquipment(e) {
    e.preventDefault();
    character.equipment.armor.push(document.getElementById('armorBlock').value);
    character.equipment.weapons.push(document.getElementById('weaponsBlock').value);
    character.equipment.items.push(document.getElementById('itemsBlock').value);
}

// document.getElementById('submitEquipment').onclick(function (event){setEquipment(event)});

//function to pull from character.equipment to html
function pullEquipment() {


}

// document.getElementById('').onclick(pullEquipment());

//function to pull from html to character.spells
function setSpells(e) {
    e.preventDefault();
    character.spells.cantrips.push(document.getElementById('0level').value);
    character.spells.levelOne.push(document.getElementById('1level').value);
    character.spells.levelTwo.push(document.getElementById('2level').value);
    character.spells.levelThree.push(document.getElementById('3level').value);
    character.spells.levelFour.push(document.getElementById('4level').value);
    character.spells.levelFive.push(document.getElementById('5level').value);
    character.spells.levelSix.push(document.getElementById('6level').value);
    character.spells.levelSeven.push(document.getElementById('7level').value);
    character.spells.levelEight.push(document.getElementById('8level').value);
    character.spells.levelNine.push(document.getElementById('9level').value);
}

// document.getElementById('submitSpells').onclick(function (event){setSpells(event)});

//function to push from character.spells to html
function pullSpells() {

}

// document.getElementById('').onclick(pullSpells());

//function to pull from html to character.battle
function setBattle(e) {
    e.preventDefault();
    document.getElementById('armorClass').value = character.battle.armorClass;
    document.getElementById('initiativeBlock').value = character.battle.initiative;
    document.getElementById('weaponBlock').value = character.battle.weaponBlock;
    document.getElementById('magicBlock').value = character.battle.magicBlock;
}

// document.getElementById('submitBattleBloock').onclick(function (event){setBattle(event)});

//function to push from character.battle object to html
function pullBattle() {
    character.battle.armorClass = document.getElementById('armorClass').value;
    character.battle.initiative = document.getElementById('initiativeBlock').value;
    character.battle.weaponBlock = document.getElementById('weaponBlock').value;
    character.battle.magicBlock = document.getElementById('magicBlock').value;

}

// document.getElementById('').onclick(pullBattle());

// setting query triggers
var submitGeneral = document.querySelector('#submitGeneral');
var submitPrimary = document.querySelector('#submitPrimary');
var submitSave = document.querySelector('#submitSave');
var submitSkills = document.querySelector('#submitSkills');
var submitBackground = document.querySelector('#submitBackground');
var submitFeatTraits = document.querySelector('#submitFeatTraits');
var submitEquipment = document.querySelector('#submitEquipment');
var submitSpells = document.querySelector('#submitSpells');
var submitBattle = document.querySelector('#submitBattle');

// add event listener to submit general stats button
submitGeneral.addEventListener('click', setGeneral);
submitPrimary.addEventListener('click', setPrimary);
submitSave.addEventListener('click', setSave);
submitSkills.addEventListener('click', setSkills);
submitSkills.submit(false);
submitBackground.addEventListener('click', setBackground);
submitFeatTraits.addEventListener('click', setFeatTraits);
submitEquipment.addEventListener('click', setEquipment);
submitSpells.addEventListener('click', setSpells);
submitBattle.addEventListener('click', setBattle);

//event listeners for stats
// TABS CLICK EVENTS DO NOT WORK******************************************
// var getGeneral = document.getElementById('#tab-1-a');
// var getPrimary = document.getElementById('#tab-2-a');
//
// var getBackground = document.getElementById('#tab-4-a');
// var getTraitsAndEquipment = document.getElementById('#tab-5-a');
// var getSpells = document.getElementById('#tab-6-a');
//
//
// //tab 1 general stats
// getGeneral.addEventListener('click',function () {
//     if (character.loadFlags.emptyGeneralObject === false){
//         pullGeneral();
//     }
// });
// //tab 2 primary stats
// getPrimary.addEventListener('click',function () {
//    if (character.loadFlags.emptyPrimeStatObject === false){
//        pullPrimary();
//    }
// });
//
// // tab 3 skills
// $(document).ready(function () {
//     // event.preventDefault();
//     var getSkills = document.getElementById('#tab-3-a');
//     $('#tab-3-a').click(function () {
//         event.preventDefault();
//     });
//     // getSkills.addEventListener('click',function () {
//     //     // if (character.loadFlags.emptySkillStatObject === false || character.loadFlags.emptyPrimeStatObject === false){
//     //     pullSkills();
//     //     // }
//     // });
// });


//tab 4 Background Info

//tab 5 traits and equipment

//tab 6 spells


//Load character saved from a database
function LoadCharacter() {
    //load from database to object


    //push database to front end.
    pullGeneral();
    pullPrimary();
    pullSave();
    pullSkills();
    pullBackground();
    pullBattle();
    pullEquipment();
    pullFeatTraits();
    pullSpells();
}
// need to get jquery that isn't slim
// function giveSaveThrowBackground() {
//
//     document.getElementById('#acroMISC').style.backgroundColor = 'white';
//     $('#acroMODIFY').css({'background-color':'white','border-radius':'5px'});
//     $('#animalMISC').css('color','red');
//
//
//
//
//
// }
// giveSaveThrowBackground();



