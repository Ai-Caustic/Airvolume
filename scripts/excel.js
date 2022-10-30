//Creating a downloadable excel sheet containing all the data

document.getElementById("demo").onclick = () => {
  //General Data
  var owner = document.getElementById("projectOwner").value;
  var client = document.getElementById("Client").value;
  var projectName = document.getElementById("projectName").value;
  var projectDate = document.getElementById("projectDate").value;
  var projectAddress = document.getElementById("address").value;
  var projectStreet = document.getElementById("street").value;
  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;

  //Warehouse

  var radioWarehouse = document.getElementById("radiowarehouse");
  var radioWarehouseValue = radioWarehouse.elements["radioWarehouse"].value;
  var temperatureWarehouse = document.getElementById("temperature").value;
  var n50 = document.getElementById("n50").value;

  //Room

  var radioRoom = document.getElementById("radioroom");
  var radioRoomValue = radioRoom.elements["radioRoom"].value;
  var manualSurfaceRoom = document.getElementById("areaRoom1").value;
  var manualVolumeRoom = document.getElementById("volumeRoom1").value;
  var lengthRoom = document.getElementById("lengthRoom").value;
  var widthRoom = document.getElementById("widthRoom").value;
  var heightRoom = document.getElementById("heightRoom").value;
  var roomvolume = document.getElementById("volumeRoom").value;

  //False Floor

  var radioFloor = document.getElementById("radiofloor");
  var radioFloorValue = radioFloor.elements["radioFloor"].value;
  var heightFalseFloor = document.getElementById("heightFloor").value;
  var floorVolume = document.getElementById("volumeFloor").value;

  //False Ceiling

  var radioCeiling = document.getElementById("radioCeiling");
  var radioCeilingValue = radioCeiling.elements["radioCeiling"].value;
  var heightFalseCeiling = document.getElementById("heightCeiling").value;
  var ceilingVolume = document.getElementById("volumeCeiling").value;

  //Ventilation

  var radioVentilation = document.getElementById("radioventilation");
  var radioVentilationValue =
    radioVentilation.elements["radioVentilation"].value;
  var airVolume = document.getElementById("volAir").value;
  var radioCirculation = document.getElementById("radiocirculation");
  var radioCirculationValue =
    radioCirculation.elements["radioCirculation"].value;

  //Walls

  var radioWalls = document.getElementById("radiowalls");
  var radioWallsValue = radioWalls.elements["radioWalls"].value;
  var insulationType = document.getElementById("insulationtype");
  var insulationTypeValue = insulationType.elements["insulationType"].value;
  var windLoad = document.getElementById("windload");
  var radioWindLoadValue = windLoad.elements["windLoad"].value;

  //Openings

  var radioOpenings = document.getElementById("radioopenings");
  var radioOpeningsValue = radioOpenings.elements["radioOpenings"].value;
  var openings = document.getElementById("wall-layers").value;
  var manuaVolumeSluice = document.getElementById("volumeSluice1").value;
  var surfaceSluice = document.getElementById("surfaceSluice").value;
  var heightSluice = document.getElementById("heightSluice").value;
  var widthOpening = document.getElementById("widthOpening").value;
  var heightOpening = document.getElementById("heightOpening").value;

  //Equipment Room

  var radioEquipment = document.getElementById("radioequipment");
  var radioEquipmentValue = radioEquipment.elements["radioEquipment"].value;
  var lengthEquipment = document.getElementById("length-equipment").value;
  var widthEquipment = document.getElementById("width-equipment").value;
  var heightEquipment = document.getElementById("height-equipment").value;
  var tempEquipment = document.getElementById("temp-equipment").value;

  //Storage Room

  var radioStorage = document.getElementById("radiostorage");
  var radioStorageValue = radioStorage.elements["radioStorage"].value;
  var volumeStorage = document.getElementById("stockpercentage").value;
  var oxyContentStorage = document.getElementById("oxygenContent").value;

  //GENERATE EXCEL FILE
  var data = [
    ["GENERAL DATA"],
    [],
    ["Project Owner", owner],
    ["Client", client],
    ["Project Name", projectName],
    ["Date", projectDate],
    ["Address", projectAddress],
    ["Street", projectStreet],
    ["City", city],
    ["Country", country],
    [],
    ["WAREHOUSE"],
    ["Type", radioWarehouseValue],
    ["Warehouse Temperature", temperatureWarehouse],
    ["N-50 value", n50],
    [],
    ["ROOM"],
    [],
    ["Manually/Computed?", radioRoomValue],
    ["Manual Surface Area", manualSurfaceRoom],
    ["Manual Volume", manualVolumeRoom],
    ["Length", lengthRoom],
    ["Width", widthRoom],
    ["Height", heightRoom],
    ["Volume Room", roomvolume],
    [],
    ["FALSE FLOOR"],
    ["False floor present?", radioFloorValue],
    [],
    ["Height", heightFalseFloor],
    ["Volume Floor", floorVolume],
    [],
    ["FALSE CEILING"],
    ["False Ceiling Present?", radioCeilingValue],
    [],
    ["Height", heightFalseCeiling],
    ["Ceiling volume", ceilingVolume],
    [],
    ["VENTILATION"],
    ["Ventilation present?", radioVentilationValue],
    [],
    ["Air Volume", airVolume],
    ["Ventilation type", radioCirculationValue],
    [],
    ["OUTSIDE WALLS"],
    [],
    ["Outside walls", radioWallsValue],
    ["Insulation type", insulationTypeValue],
    ["Wind load", radioWindLoadValue],
    [],
    ["OPENINGS"],
    [],
    ["Opening", radioOpeningsValue],
    [],
    ["Openings present", openings],
    ["Manual Sluice Volume", manuaVolumeSluice],
    ["Surface Area", surfaceSluice],
    ["Height", heightSluice],
    ["Width Opening", widthOpening],
    ["Height Opening", heightOpening],
    [],
    ["EQUIPMENT ROOM"],
    [],
    ["Equipment room present?", radioEquipmentValue],
    ["Length", lengthEquipment],
    ["Width", widthEquipment],
    ["Height", heightEquipment],
    ["Temperature", tempEquipment],
    [],
    ["PROTECTED MATERIAL"],
    [],
    ["Protected material present?", radioStorageValue],
    ["Volume", volumeStorage],
    ["Oxygen Content", oxyContentStorage],
  ];

  var workbook = XLSX.utils.book_new(),
    worksheet = XLSX.utils.aoa_to_sheet(data);
  workbook.SheetNames.push("First");
  workbook.Sheets["First"] = worksheet;

  //TO BINARY STRING
  var xlsbin = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "binary",
  });

  //TO BLOB OBJECT
  var buffer = new ArrayBuffer(xlsbin.length),
    array = new Uint8Array(buffer);
  for (var i = 0; i < xlsbin.length; i++) {
    array[i] = xlsbin.charCodeAt(i) & 0xff;
  }
  var xlsblob = new Blob([buffer], { type: "application/octet-stream" });
  delete array;
  delete buffer;
  delete xlsbin;

  //"FORCE DOWNLOAD"
  var url = window.URL.createObjectURL(xlsblob),
    anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "excel.xlsx";
  anchor.click();
  window.URL.revokeObjectURL(url);
  delete anchor;
};
