"use strict";
// these allow popovers and tooltips to be used
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
    $('[data-toggle="popover"]').popover()
});
// race and class are read only
$('.non').keydown(function(e) {
    e.preventDefault();
    return false;
});
// These are the triggers to allow popover and choose race and class from the carousel
$('#chooseDwarf').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.raceModal').modal('hide');
    $('#raceBlock').val("Dwarf");
});

$('#chooseElf').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.raceModal').modal('hide');
    $('#raceBlock').val("Elf");
});

$('#chooseHalfing').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.raceModal').modal('hide');
    $('#raceBlock').val("Halfling");
});

$('#chooseHuman').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.raceModal').modal('hide');
    $('#raceBlock').val("Human");
});

$('#chooseDragonborn').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.raceModal').modal('hide');
    $('#raceBlock').val("Dragonborn");
});

$('#chooseGnome').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.raceModal').modal('hide');
    $('#raceBlock').val("Gnome");
});

$('#chooseHalfElf').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.raceModal').modal('hide');
    $('#raceBlock').val("Half-Elf");
});

$('#chooseHalfOrc').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.raceModal').modal('hide');
    $('#raceBlock').val("Half-Orc");
});

$('#chooseTiefling').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.raceModal').modal('hide');
    $('#raceBlock').val("Tiefling");
});

$('#chooseBarbarian').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.classModal').modal('hide');
    $('#classBlock').val("Barbarian");
});

$('#chooseBard').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.classModal').modal('hide');
    $('#classBlock').val("Bard");
});

$('#chooseCleric').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.classModal').modal('hide');
    $('#classBlock').val("Cleric");
});

$('#chooseDruid').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.classModal').modal('hide');
    $('#classBlock').val("Druid");
});

$('#chooseFighter').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.classModal').modal('hide');
    $('#classBlock').val("Fighter");
});

$('#chooseMonk').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.classModal').modal('hide');
    $('#classBlock').val("Monk");
});

$('#choosePaladin').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.classModal').modal('hide');
    $('#classBlock').val("Paladin");
});

$('#chooseRanger').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.classModal').modal('hide');
    $('#classBlock').val("Ranger");
});

$('#chooseRogue').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.classModal').modal('hide');
    $('#classBlock').val("Rogue");
});

$('#chooseSorcerer').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.classModal').modal('hide');
    $('#classBlock').val("Sorcerer");
});

$('#chooseWarlock').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.classModal').modal('hide');
    $('#classBlock').val("Warlock");
});

$('#chooseWizard').popover({ trigger: 'hover'}).click(function(e){
    e.preventDefault();
    $('.classModal').modal('hide');
    $('#classBlock').val("Wizard");
});