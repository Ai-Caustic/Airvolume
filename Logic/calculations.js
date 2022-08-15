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
