async function getData() {
  //   let data = {};
  const url = "https://api.rootnet.in/covid19-in/stats/latest";
  const response = await fetch(url, {
    method: "GET",
  });
  return response.json();
}

getData().then((co) => {
  //   console.log(data);
  let { data } = co;
  console.log(data);
  const header = document.getElementById("header-body");
  let insertHeaderRow = `
        <li class="list-group-item">confirmedButLocationUnidentified : ${data.summary.confirmedButLocationUnidentified}</li>
        <li class="list-group-item">confirmedCasesForeign :${data.summary.confirmedCasesForeign}</li>
        <li class="list-group-item">confirmedCasesIndian : ${data.summary.confirmedCasesIndian}</li>
        <li class="list-group-item">deaths : ${data.summary.discharged}</li>
        <li class="list-group-item">discharged : ${data.summary.deaths}</li>
        <li class="list-group-item">total : ${data.summary.total}</li>
  
  `;

  header.insertAdjacentHTML("afterbegin", insertHeaderRow);
  //   console.log(data.regional);
  let MainBody = document.getElementById("main-body");
  data.regional.map((e, i) => {
    let insertHeaderRow = `
        <tr>
        <td>${i + 1}</td>
        <td>${e.loc}</td>
        <td>${e.confirmedCasesIndian}</td>
        <td>${e.confirmedCasesForeign}</td>
        <td>${e.discharged}</td>
        <td>${e.deaths}</td>
        <td>${e.totalConfirmed}</td>
        </tr>
        `;
    MainBody.insertAdjacentHTML("beforeend", insertHeaderRow);
  });
});

// fetch("https://api.rootnet.in/covid19-in/stats/latest")
//   .then((Response) => Response.json())
//   .then((data) => console.log(data));
