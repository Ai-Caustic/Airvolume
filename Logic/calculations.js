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
