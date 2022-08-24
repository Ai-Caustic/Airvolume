//Creating a downloadable excel sheet containing all the data

//Function for testing on the General data section

// document.getElementById("excel").onclick = () => {
//   //General Data (Data)

//   var client = document.getElementById("Client").value;
//   var projectName = document.getElementById("projectName").value;
//   var location = document.getElementById("Location").value;
//   var city = document.getElementById("city").value;
//   var country = document.getElementById("country").value;

//   console.log(client);
//   console.log(projectName);
//   console.log(location);
//   console.log(city);
//   console.log(country);

//   //   //Generate Excel File
//   //   var data = [
//   //     ["Client", client],
//   //     ["Project name", projectName],
//   //     ["Location", location],
//   //     [("City", city)],
//   //     ["Country", country],
//   //   ];

//   //   var workbook = XLSX.utils.book_new(),
//   //     worksheet = XLSX.utils.aoa_to_sheet(data);

//   //   workbook.SheetNames.push("First");
//   //   workbook.Sheets["First"] = worksheet;

//   //   //To Binary String

//   //   var xlsbin = XSLX.write(workbook, {
//   //     bookType: "xslx",
//   //     type: "binary",
//   //   });

//   //   //To Blob object
//   //   var buffer = new ArrayBuffer(xlsbin.length),
//   //     array = new Uint8Array(buffer);
//   //   for (var i = 0; i < xlsbin.length; i++) {
//   //     array[i] = xlsbin.charCodeAt(i) & 0xff;
//   //   }
//   //   var xlsblob = new Blob([buffer], { type: "application/octet-stream" });
//   //   delete array;
//   //   delete buffer;
//   //   delete xlsbin;

//   //   // Force Download
//   //   var url = window.URL.createObjectURL(xlsblob),
//   //     anchor = document.createElement("a");
//   //   anchor.href = url;
//   //   anchor.download = "demo.xlsx";
//   //   anchor.click();
//   //   window.URL.revokeObjectURL(url);
//   //   delete anchor;
// };
