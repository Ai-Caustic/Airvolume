function hidefield() {
  document.getElementById("falsefloor").style.display = "none";
  document.getElementById("falseceiling").style.display = "none";
  document.getElementById("volumeAir").style.display = "none";
  document.getElementById("radiocirculation").style.display = "none";
  document.getElementById("insulation").style.display = "none";
  document.getElementById("wallData1").style.display = "none";
  document.getElementById("wallData2").style.display = "none";
  document.getElementById("wallData3").style.display = "none";
  document.getElementById("wallData4").style.display = "none";
  document.getElementById("wallData5").style.display = "none";
  document.getElementById("wallData6").style.display = "none";
  document.getElementById("warehouse-temperature").style.display = "none";
  document.getElementById("equipment-dimensions").style.display = "none";
  document.getElementById("temperatureWarehouse").style.display = "none";
  document.getElementById("manualroom").style.display = "none";
  document.getElementById("tableroom").style.display = "none";
  document.getElementById("storageType").style.display = "none";
  document.getElementById("tableOpenings").style.display = "none";
  document.getElementById("tableSluice").style.display = "none";
  document.getElementById("manualSluice").style.display = "none";
  document.getElementById("sluicevolume").style.display = "none";
  document.getElementById("tableSluice").style.display = "none";
  hidesections();
}

function displayFloor() {
  var val = document.getElementById("radiofloor");

  console.log(val.elements["radioFloor"].value);

  if (val.elements["radioFloor"].value == "yes") {
    document.getElementById("falsefloor").style.display = "block";
    document.getElementById("volumeFloor").innerHTML = "";
  } else {
    document.getElementById("falsefloor").style.display = "none";
    document.getElementById("heightFloor").value = "";
    floorVolume = 0;
    document.getElementById("volumeFloor").innerHTML = 0;
  }
}

function displayCeiling() {
  var val = document.getElementById("radioCeiling");

  console.log(val.elements["radioCeiling"].value);

  if (val.elements["radioCeiling"].value == "yes") {
    document.getElementById("falseceiling").style.display = "block";
  } else {
    document.getElementById("falseceiling").style.display = "none";
    document.getElementById("heightCeiling").value = "";
    ceilingVolume = 0;
    document.getElementById("volumeCeiling").innerHTML = 0;
  }
}

function displayCirculation() {
  var val = document.getElementById("radioventilation");

  console.log(val.elements["radioVentilation"].value);

  if (val.elements["radioVentilation"].value == "yes") {
    document.getElementById("radiocirculation").style.display = "block";
  } else {
    document.getElementById("radiocirculation").style.display = "none";
    document.getElementById("volumeAir").style.display = "none";
  }
}

function displayVolume() {
  var val = document.getElementById("radiocirculation");

  console.log(val.elements["radioCirculation"].value);

  if (val.elements["radioCirculation"].value == "fresh_air") {
    document.getElementById("volumeAir").style.display = "block";
  } else {
    document.getElementById("volumeAir").style.display = "none";
  }
}

function displayInsulation() {
  var val = document.getElementById("radiowalls");

  console.log(val.elements["radioWalls"].value);

  if (val.elements["radioWalls"].value != "0") {
    document.getElementById("insulation").style.display = "block";
  } else {
    document.getElementById("insulation").style.display = "none";
  }
}

function displayLayers() {
  var val = parseInt(document.getElementById("wall-layers").value);

  console.log(val);

  if (val == 1) {
    document.getElementById("wallData1").style.display = "block";
    document.getElementById("wallData2").style.display = "none";
    document.getElementById("wallData3").style.display = "none";
    document.getElementById("wallData4").style.display = "none";
    document.getElementById("wallData5").style.display = "none";
    document.getElementById("wallData6").style.display = "none";
  } else if (val == 2) {
    document.getElementById("wallData1").style.display = "block";
    document.getElementById("wallData2").style.display = "block";
    document.getElementById("wallData3").style.display = "none";
    document.getElementById("wallData4").style.display = "none";
    document.getElementById("wallData5").style.display = "none";
    document.getElementById("wallData6").style.display = "none";
  } else if (val == 3) {
    document.getElementById("wallData1").style.display = "block";
    document.getElementById("wallData2").style.display = "block";
    document.getElementById("wallData3").style.display = "block";
    document.getElementById("wallData4").style.display = "none";
    document.getElementById("wallData5").style.display = "none";
    document.getElementById("wallData6").style.display = "none";
  } else if (val == 4) {
    document.getElementById("wallData1").style.display = "block";
    document.getElementById("wallData2").style.display = "block";
    document.getElementById("wallData3").style.display = "block";
    document.getElementById("wallData4").style.display = "block";
    document.getElementById("wallData5").style.display = "none";
    document.getElementById("wallData6").style.display = "none";
  } else if (val == 5) {
    document.getElementById("wallData1").style.display = "block";
    document.getElementById("wallData2").style.display = "block";
    document.getElementById("wallData3").style.display = "block";
    document.getElementById("wallData4").style.display = "block";
    document.getElementById("wallData5").style.display = "block";
    document.getElementById("wallData6").style.display = "none";
  } else if (val >= 6) {
    document.getElementById("wallData1").style.display = "block";
    document.getElementById("wallData2").style.display = "block";
    document.getElementById("wallData3").style.display = "block";
    document.getElementById("wallData4").style.display = "block";
    document.getElementById("wallData5").style.display = "block";
    document.getElementById("wallData6").style.display = "block";
  }
}

function displayWarehouse() {
  var val = document.getElementById("radiowarehouse");

  console.log(val.elements["radioWarehouse"].value);

  if (val.elements["radioWarehouse"].value == "warehouse") {
    document.getElementById("warehouse-temperature").style.display = "block";
    document.getElementById("temperatureWarehouse").style.display = "block";
  } else {
    document.getElementById("warehouse-temperature").style.display = "none";
    document.getElementById("temperatureWarehouse").style.display = "none";
  }
}

function displayEquipment() {
  var val = document.getElementById("radioequipment");

  console.log(val.elements["radioEquipment"].value);

  if (val.elements["radioEquipment"].value == "yes") {
    document.getElementById("equipment-dimensions").style.display = "block";
  } else {
    document.getElementById("equipment-dimensions").style.display = "none";
  }
}

function displayStorage() {
  var val = document.getElementById("radiostorage");

  console.log(val.elements["radioStorage"].value);

  if (val.elements["radioStorage"].value == "yes") {
    document.getElementById("storageType").style.display = "block";
  } else {
    document.getElementById("storageType").style.display = "none";
  }
}

function displayRoom() {
  var val = document.getElementById("radioroom");

  console.log(val.elements["radioRoom"].value);

  if (val.elements["radioRoom"].value == "manually") {
    document.getElementById("manualroom").style.display = "block";
    document.getElementById("tableroom").style.display = "none";
  } else {
    document.getElementById("manualroom").style.display = "none";
    document.getElementById("tableroom").style.display = "block";
  }
}

function displayOpenings() {
  var val = document.getElementById("radioopenings");

  console.log(val.elements["radioOpenings"].value);

  if (
    val.elements["radioOpenings"].value == "door" ||
    val.elements["radioOpenings"].value == "doorFast"
  ) {
    document.getElementById("tableOpenings").style.display = "block";
    document.getElementById("tableSluice").style.display = "none";
    document.getElementById("sluicevolume").style.display = "none";
    document.getElementById("manualSluice").style.display = "none";
  } else if (val.elements["radioOpenings"].value == "sluice") {
    document.getElementById("tableOpenings").style.display = "none";
    document.getElementById("sluicevolume").style.display = "block";
  }
}

function manualSluice() {
  var val = document.getElementById("sluicevolume");

  console.log(val.elements["sluiceVolume"].value);

  if (val.elements["sluiceVolume"].value == "yes") {
    document.getElementById("manualSluice").style.display = "block";
    document.getElementById("tableSluice").style.display = "none";
  } else {
    document.getElementById("tableSluice").style.display = "block";
    document.getElementById("manualSluice").style.display = "none";
  }
}
