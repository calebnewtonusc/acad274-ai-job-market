// Week 13 pattern: load a JSON feed, then build a table and a chart from it.
// Change jsonurl to our real feed once Caleb/Ellen have it on iyaserver.
let data = [];
let jsonurl = "https://demos.webdev.iyaserver.com/acad274_demos/evcars.php"; // demo feed for now
jsonurl += window.location.search; // pass ?filters through to the feed

$(document).ready(function () {
  $.ajax({ url: jsonurl, type: "GET" }).done(function (raw) {
    data = typeof raw === "string" ? JSON.parse(raw) : raw;
    console.log(data); // check field names here, they're case-sensitive
    output();
  });
});

const output = function () {
  let table = "<table><tr><th>Make</th><th>Model</th><th>Vehicles</th><th>Range</th></tr>";
  for (let i = 0; i < data.length; i++) {
    table += "<tr><td>" + data[i].make + "</td><td>" + data[i].model + "</td><td>" +
      data[i].VehicleTotal + "</td><td>" + data[i].Range + "</td></tr>";
  }
  table += "</table>";
  $("#results").html(table);

  let labels = [];
  let totals = [];
  for (let i = 0; i < data.length; i++) {
    labels.push(data[i].model);
    totals.push(parseFloat(data[i].VehicleTotal));
  }
  new Chart(document.getElementById("myChart"), {
    type: "bar",
    data: { labels: labels, datasets: [{ label: "Vehicles", data: totals, borderWidth: 1 }] },
    options: { scales: { y: { beginAtZero: true } } }
  });
};
