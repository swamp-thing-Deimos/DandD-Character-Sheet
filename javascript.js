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
        speed: 0
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
    }
};


// function that will get the values of the inputted values for the general stats into the character array
function setGeneral(e){
    e.preventDefault();
    character.generalStats.name = document.getElementById('nameBlock').value;
    character.generalStats.age = document.getElementById('ageBlock').value;
    character.generalStats.race = document.getElementById('raceBlock').value;
    character.generalStats.class = document.getElementById('classBlock').value;
    character.generalStats.level = document.getElementById('levelBlock').value;
    character.generalStats.health = document.getElementById('healthBlock').value;
    character.generalStats.speed = document.getElementById('speedBlock').value;
}

function setPrimary(e){
    e.preventDefault();
    character.primaryStats.proficiency = document.getElementById('profStat').value;
    character.primaryStats.strength = document.getElementById('strStat').value;
    character.primaryStats.dexterity = document.getElementById('dexStat').value;
    character.primaryStats.constitution = document.getElementById('conStat').value;
    character.primaryStats.intelligence = document.getElementById('intStat').value;
    character.primaryStats.wisdom = document.getElementById('wisStat').value;
    character.primaryStats.charisma = document.getElementById('chaStat').value;
}

function setSave(e){
    e.preventDefault();
    character.savingThrowModifier.strength = document.getElementById('strSave').value;
    character.savingThrowModifier.dexterity = document.getElementById('dexSave').value;
    character.savingThrowModifier.constitution = document.getElementById('conSave').value;
    character.savingThrowModifier.intelligence = document.getElementById('intSave').value;
    character.savingThrowModifier.wisdom = document.getElementById('wisSave').value;
    character.savingThrowModifier.charisma = document.getElementById('chaSave').value;
}

function setSkills(e){
    e.preventDefault();
    character.skillStats.acrobatics = document.getElementById('acroStat').value;
    character.skillStats.animalHandling = document.getElementById('animalStat').value;
    character.skillStats.arcana = document.getElementById('arcanaStat').value;
    character.skillStats.athletics = document.getElementById('athlStat').value;
    character.skillStats.deception = document.getElementById('deceptStat').value;
    character.skillStats.history = document.getElementById('histStat').value;
    character.skillStats.insight = document.getElementById('insightStat').value;
    character.skillStats.intimidation = document.getElementById('intimStat').value;
    character.skillStats.investigation = document.getElementById('investStat').value;
    character.skillStats.medicine = document.getElementById('mediStat').value;
    character.skillStats.nature = document.getElementById('natStat').value;
    character.skillStats.perception = document.getElementById('percStat').value;
    character.skillStats.performance = document.getElementById('perfStat').value;
    character.skillStats.persuasion = document.getElementById('persStat').value;
    character.skillStats.religion = document.getElementById('reliStat').value;
    character.skillStats.sleight = document.getElementById('sleightStat').value;
    character.skillStats.stealth = document.getElementById('stealthStat').value;
    character.skillStats.survival = document.getElementById('survStat').value;
}

function setBackground(e) {
    e.preventDefault();
    character.backgroundInfo.personality = document.getElementById('personTraits').value;
    character.backgroundInfo.ideals = document.getElementById('idealsBlock').value;
    character.backgroundInfo.bonds = document.getElementById('bondBlock').value;
    character.backgroundInfo.flaws = document.getElementById('flawsBlock').value;
    character.backgroundInfo.languages = document.getElementById('langBlock').value;
    character.backgroundInfo.other = document.getElementById('other').value;
}

function setFeatTraits(e){
    e.preventDefault();
    character.featTraits.features = document.getElementById('featsBlock').value;
    character.featTraits.traits = document.getElementById('traitsBlock').value;
}

function setEquipment(e){
    e.preventDefault();

}

function setSpells(e){
    e.preventDefault();
}

function setBattle(e){
    e.preventDefault();
    character.battle.armorClass = document.getElementById('armorClass').value;
    character.battle.initiative = document.getElementById('initiativeBlock').value;
    character.battle.weaponBlock = document.getElementById('weaponBlock').value;
    character.battle.magicBlock = document.getElementById('magicBlock').value;
}

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
submitBackground.addEventListener('click', setBackground);
submitFeatTraits.addEventListener('click', setFeatTraits);
submitEquipment.addEventListener('click', setEquipment);
submitSpells.addEventListener('click', setSpells);
submitBattle.addEventListener('click', setBattle);