function hidefield() {
  document.getElementById("falsefloor").style.display = "none";
  document.getElementById("falseceiling").style.display = "none";
  document.getElementById("volumeAir").style.display = "none";
  document.getElementById("radiocirculation").style.display = "none";
  document.getElementById("insulation").style.display = "none";
  document.getElementById("conditionerpower").style.display = "none";
  document.getElementById("wallData1").style.display = "none";
  document.getElementById("wallData2").style.display = "none";
  document.getElementById("wallData3").style.display = "none";
  document.getElementById("wallData4").style.display = "none";
  document.getElementById("wallData5").style.display = "none";
  document.getElementById("wallData6").style.display = "none";
  document.getElementById("warehouse-temperature").style.display = "none";
  document.getElementById("storagetype").style.display = "none";
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

function displayConditioner() {
  var val = document.getElementById("radioconditioner");

  console.log(val.elements["radioConditioner"].value);

  if (val.elements["radioConditioner"].value == "yes") {
    document.getElementById("conditionerpower").style.display = "block";
  } else {
    document.getElementById("conditionerpower").style.display = "none";
  }
}

function displayWarehouse() {
  var val = document.getElementById("radiowarehouse");

  console.log(val.elements["radioWarehouse"].value);

  if (val.elements["radioWarehouse"].value == "yes") {
    document.getElementById("warehouse-temperature").style.display = "block";
    document.getElementById("storagetype").style.display = "none";
  } else {
    document.getElementById("warehouse-temperature").style.display = "none";
    document.getElementById("storagetype").style.display = "block";
  }
}
