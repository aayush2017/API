const express = require("express");
const myFunctions = require('./funcDef');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!')
})
router.post('/serv/tapn/srv/TDS26ASServlet', (req, res) => {
  const { reqtype, assessYear, viewType } = req.body;
  let dataList = {};

  res.setHeader('Content-Type', 'application/json');
  console.log(req.body.assessYear);
  console.log(typeof assessYear);
  switch (assessYear) {
    case "2026":
      myFunctions.loadJsonData(`./file26.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2026");
      break;
    case "2025":
      myFunctions.loadJsonData(`./file25.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2025");
      break;
    case "2024":
      myFunctions.loadJsonData(`./file24.json`)
      .then(data => {
         dataList = data; res.send(JSON.stringify(dataList));
      })
      .catch(err => console.error(err));
      console.log("2024");
      break;
    case "2023":
      myFunctions.loadJsonData(`./file23.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2023");
      break;
    case "2022":
      myFunctions.loadJsonData(`./file22.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2022");
      break;
    case "2021":
      myFunctions.loadJsonData(`./file21.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2021");
      break;
    case "2020":
      myFunctions.loadJsonData(`./file20.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2020");
      break;
    case "2019":
      myFunctions.loadJsonData(`./file19.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2019");
      break;
    case "2018":
      myFunctions.loadJsonData(`./file18.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2018");
      break;
    case "2017":
      myFunctions.loadJsonData(`./file17.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2017");
      break;
    case "2016":
      myFunctions.loadJsonData(`./file16.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2016");
      break;
    case "2015":
      myFunctions.loadJsonData(`./file15.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2015");
      break;
    case "2014":
      myFunctions.loadJsonData(`./file14.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2014");
      break;
    case "2013":
      myFunctions.loadJsonData(`./file13.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2013");
      break;
    case "2012":
      myFunctions.loadJsonData(`./file12.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2012");
      break;
    case "2011":
      myFunctions.loadJsonData(`./file11.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2011");
      break;
    case "2010":
      myFunctions.loadJsonData(`./file10.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2010");
      break;
    case "2009":
      myFunctions.loadJsonData(`./file09.json`)
      .then(data => { dataList = data; res.send(JSON.stringify(dataList));})
      .catch(err => console.error(err));
      console.log("2009");
      break;
  }
  
})
router.get('/serv/tapn/srv/TDS26ASServlet', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify([
    {
        "enc1": "pQMJuB3D1H4=MTc1MzM1ODI5OTk4Mw=="
    }
]));
})

module.exports = router;