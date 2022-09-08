// Määrittely //
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const WorkHours     = document.getElementById('work1');
const WorkHoursLast = document.getElementById('work2');
const PlayHours     = document.getElementById('play1');
const PlayHoursLast = document.getElementById('play2');
const StudHours     = document.getElementById('stud1');
const StudHoursLast = document.getElementById('stud2');
const ExerHours     = document.getElementById('exer1');
const ExerHoursLast = document.getElementById('exer2');
const SociHours     = document.getElementById('soci1');
const SociHoursLast = document.getElementById('soci2');
const SelfHours     = document.getElementById('self1');
const SelfHoursLast = document.getElementById('self2');

//// Omat määrrittelyt ////

/// Päivittäinen ///
// Work //
let WorkHoursDaily      = 5;
let WorkHoursLastDaily  = 7;
// Play //
let PlayHoursDaily      = 1;
let PlayHoursLastDaily  = 2;
// Study //
let StudHoursDaily      = 0;
let StudHoursLastDaily  = 1;
// Exercise //
let ExerHoursDaily      = 1;
let ExerHoursLastDaily  = 1;
// Social //
let SociHoursDaily      = 1;
let SociHoursLastDaily  = 3;
// Self Care //
let SelfHoursDaily      = 0;
let SelfHoursLastDaily  = 1;

/// Viikottainen ///
// Work //
let WorkHoursWeekly      = 32;
let WorkHoursLastWeekly  = 36;
// Play //
let PlayHoursWeekly      = 10;
let PlayHoursLastWeekly  = 8;
// Study //
let StudHoursWeekly      = 4;
let StudHoursLastWeekly  = 7;
// Exercise //
let ExerHoursWeekly      = 4;
let ExerHoursLastWeekly  = 5;
// Social //
let SociHoursWeekly      = 5;
let SociHoursLastWeekly  = 10;
// Self Care //
let SelfHoursWeekly      = 2;
let SelfHoursLastWeekly  = 2;

/// Kuukausittainen ///
// Work //
let workHoursMonthly      = 103;
let WorkHoursLastMonthly  = 128;
// Play //
let PlayHoursMonthly      = 23;
let PlayHoursLastMonthly  = 29;
// Study //
let StudHoursMonthly      = 13;
let StudHoursLastMonthly  = 19;
// Exercise //
let ExerHoursMonthly      = 11;
let ExerHoursLastMonthly  = 18;
// Social //
let SociHoursMonthly      = 21;
let SociHoursLastMonthly  = 23;
// Self Care //
let SelfHoursMonthly      = 7;
let SelfHoursLastMonthly  = 11;

// Funktionit //
function daily() {
    WorkHours.innerHTML     = WorkHoursDaily + "hrs";
    WorkHoursLast.innerHTML = "Last Day - " + WorkHoursLastDaily + "hrs";
    PlayHours.innerHTML     = PlayHoursDaily + "hrs";
    PlayHoursLast.innerHTML = "Last Day - " + PlayHoursLastDaily + "hrs";
    StudHours.innerHTML     = StudHoursDaily + "hrs";
    StudHoursLast.innerHTML = "Last Day - " + StudHoursLastDaily + "hrs";
    ExerHours.innerHTML     = ExerHoursDaily + "hrs";
    ExerHoursLast.innerHTML = "Last Day - " + ExerHoursLastDaily + "hrs";
    SociHours.innerHTML     = SociHoursDaily + "hrs";
    SociHoursLast.innerHTML = "Last Day - " + SociHoursLastDaily + "hrs";
    SelfHours.innerHTML     = SelfHoursDaily + "hrs";
    SelfHoursLast.innerHTML = "Last Day - " + SelfHoursLastDaily + "hrs";
}

function weekly() {
    WorkHours.innerHTML     = WorkHoursWeekly + "hrs";
    WorkHoursLast.innerHTML = "Last Week - " + WorkHoursLastWeekly + "hrs";
    PlayHours.innerHTML     = PlayHoursWeekly + "hrs";
    PlayHoursLast.innerHTML = "Last Week - " + PlayHoursLastWeekly + "hrs";
    StudHours.innerHTML     = StudHoursWeekly + "hrs";
    StudHoursLast.innerHTML = "Last Week - " + StudHoursLastWeekly + "hrs";
    ExerHours.innerHTML     = ExerHoursWeekly + "hrs";
    ExerHoursLast.innerHTML = "Last Week - " + ExerHoursLastWeekly + "hrs";
    SociHours.innerHTML     = SociHoursWeekly + "hrs";
    SociHoursLast.innerHTML = "Last Week - " + SociHoursLastWeekly + "hrs";
    SelfHours.innerHTML     = SelfHoursWeekly + "hrs";
    SelfHoursLast.innerHTML = "Last Week - " + SelfHoursLastWeekly + "hrs";
}

function monthly() {
    WorkHours.innerHTML     = workHoursMonthly + "hrs";
    WorkHoursLast.innerHTML = "Last Month - " + WorkHoursLastMonthly + "hrs";
    PlayHours.innerHTML     = PlayHoursMonthly + "hrs";
    PlayHoursLast.innerHTML = "Last Month - " + PlayHoursLastMonthly + "hrs";
    StudHours.innerHTML     = StudHoursMonthly + "hrs";
    StudHoursLast.innerHTML = "Last Month - " + StudHoursLastMonthly + "hrs";
    ExerHours.innerHTML     = ExerHoursMonthly + "hrs";
    ExerHoursLast.innerHTML = "Last Month - " + ExerHoursLastMonthly + "hrs";
    SociHours.innerHTML     = SociHoursMonthly + "hrs";
    SociHoursLast.innerHTML = "Last Month - " + SociHoursLastMonthly + "hrs";
    SelfHours.innerHTML     = SelfHoursMonthly + "hrs";
    SelfHoursLast.innerHTML = "Last Month - " + SelfHoursLastMonthly + "hrs";
}

// Tärkeä //
btn2.style.color = "white";

// Napin toiminta //
btn1.addEventListener('click', () => {
    btn1.style.color = "white";
    btn2.style.color = "hsl(236, 100%, 87%)";
    btn3.style.color = "hsl(236, 100%, 87%)";
    daily();
});

btn2.addEventListener('click', () => {
    btn1.style.color = "hsl(236, 100%, 87%)";
    btn2.style.color = "white";
    btn3.style.color = "hsl(236, 100%, 87%)";
    weekly();
});

btn3.addEventListener('click', () => {
    btn1.style.color = "hsl(236, 100%, 87%)";
    btn2.style.color = "hsl(236, 100%, 87%)";
    btn3.style.color = "white";
    monthly();
});