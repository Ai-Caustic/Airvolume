let surfaceArea = 0;
let volumeRoom = 0;
let totalVolume = 0;
let floorVolume = 0;
let ceilingVolume = 0;
let cubed = " \u33A5";
let squared = " m" + "\u00B2";

//Room (without false floor or ceiling)

function roomSurface() {
  lengthRoom = document.getElementById("lengthRoom").value;
  widthRoom = document.getElementById("widthRoom").value;
  surfaceArea = lengthRoom * widthRoom;
  document.getElementById("areaRoom").innerHTML = surfaceArea + squared;
}

function roomVolume() {
  heightRoom = document.getElementById("heightRoom").value;
  lengthRoom = document.getElementById("lengthRoom").value;
  widthRoom = document.getElementById("widthRoom").value;
  volumeRoom = surfaceArea * heightRoom;
  document.getElementById("volumeRoom").innerHTML = volumeRoom + cubed;
}

//False Floor (additional)

function falseFloor() {
  heightFloor = document.getElementById("heightFloor").value;
  floorVolume = surfaceArea * heightFloor;
  document.getElementById("volumeFloor").innerHTML = floorVolume + cubed;
}

//Suspended Ceiling

function ceiling() {
  heightCeiling = document.getElementById("heightCeiling").value;
  ceilingVolume = surfaceArea * heightCeiling;
  document.getElementById("volumeCeiling").innerHTML = ceilingVolume + cubed;
}

function volumeTotal() {
  totalVolume = volumeRoom + floorVolume + ceilingVolume;
  document.getElementById("totalVolume").innerHTML = totalVolume + cubed;
  console.log(`Total Volume ${totalVolume}`);
}

function equipmentSurface() {
  lengthEquipment = document.getElementById("length-equipment").value;
  widthEquipment = document.getElementById("width-equipment").value;

  surfaceArea = lengthEquipment * widthEquipment;

  document.getElementById("areaEquipment").innerHTML = surfaceArea + squared;
}

function equipmentVolume() {
  lengthEquipment = document.getElementById("length-equipment").value;
  widthEquipment = document.getElementById("width-equipment").value;
  heightEquipment = document.getElementById("height-equipment").value;

  volume = lengthEquipment * widthEquipment * heightEquipment;

  document.getElementById("volumeEquipment").innerHTML = volume + cubed;
}
function sluiceVolume() {
  surfaceSluice = document.getElementById("surfaceSluice").value;
  heightSluice = document.getElementById("heightSluice").value;

  volume = surfaceSluice * heightSluice;

  document.getElementById("volumeSluice").innerHTML = volume + cubed;
}

function avgOpenings() {
  var monday = document.getElementById("monday").value;
  var tuesday = document.getElementById("tuesday").value;
  var wednesday = document.getElementById("wednesday").value;
  var thursday = document.getElementById("thursday").value;
  var friday = document.getElementById("friday").value;
  var saturday = document.getElementById("saturday").value;
  var sunday = document.getElementById("sunday").value;

  var avgMonday = monday / 24;
  var avgTuesday = tuesday / 24;
  var avgWednesday = wednesday / 24;
  var avgThursday = thursday / 24;
  var avgFriday = friday / 24;
  var avgSaturday = saturday / 24;
  var avgSunday = sunday / 24;

  document.getElementById("avgMonday").innerHTML = avgMonday.toFixed(4);
  document.getElementById("avgTuesday").innerHTML = avgTuesday.toFixed(4);
  document.getElementById("avgWednesday").innerHTML = avgWednesday.toFixed(4);
  document.getElementById("avgThursday").innerHTML = avgThursday.toFixed(4);
  document.getElementById("avgFriday").innerHTML = avgFriday.toFixed(4);
  document.getElementById("avgSaturday").innerHTML = avgSaturday.toFixed(4);
  document.getElementById("avgSunday").innerHTML = avgSunday.toFixed(4);
}
