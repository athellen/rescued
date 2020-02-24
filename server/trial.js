const router = require("express").Router();
const Alert = require("./model/ussd");

router.post("/", (req, res) => {
  let { phoneNumber, text } = req.body;
  let txt = text.split("*");
  let len = text.split("*").length;
  let initSelection = txt[0];

  const postAlert = (i, response) => {
    let scene;
    if (i == "1") {
      scene = "Fire";
    } else if (i == "2") {
      scene = "Meteorological";
    } else if (i == "3") {
      scene = "Security";
    } else if (i == "4") {
      scene = "Red Cross";
    } else if (i == "5") {
      scene = "Medical";
    }
    const newAlert = new Alert({
      phoneNumber,
      emergency: scene,
      location: txt[1]
    });
    newAlert
      .save()
      .then(() => {
        res.send(response);
      })
      .catch(err => console.log(err.stack));
  };
  if (text == "") {
    response = `CON Select a department: 
        1. Fire
        2. Meteorological
        3. Security
        4. Red Cross
        5. Medical`;
    res.send(response);
  } else if (text =="1") {
    response = `CON Type of emergency:
    1. House fire
    2. Wild fire
    3. Bush fire `;
    res.send(response);
  } else if (text =="2") {
    response = `CON Type of emergency:
    1. Floods
    2. Drought
    3. Storm
    4. Lightning
    5. Hurricane `;
    res.send(response);
  } else if (text =="3") {
    response = `CON Type of emergency:
    1. Robbery
    2. Terrorist attack
    3. Bomb threat
    4. Hijacking
    5. Inter-clan clashes `;
    res.send(response);
  } else if (text =="4") {
    response = `CON Type of emergency:
    1. Drought
    2. Blood transfussion
    `;
    res.send(response);
  } else if (text =="5") {
    response = `CON Type of emergency:
    1. Illness
    2. Fire
    3. Road Accident
    `;
    res.send(response);
  }
  // } else if (text == "1") {
  //   response = `CON Enter your location`;
  //   res.send(response);
  // } else if (text == "2") {
  //   response = `CON Enter your location`;
  //   res.send(response);
  // } else if (text == "3") {
  //   response = `CON Enter your location`;
  //   res.send(response);
  // } else if (text == "4") {
  //   response = `CON Enter your location`;
  //   res.send(response);
  // } else if (text == "5") {
  //   response = `CON Enter your location`;
  //   res.send(response);
  // } 
  else if (len == 2) {
    if (initSelection == "1") {
      response = `CON Enter your location`;
      res.send(response);
    } else if (initSelection == "2") {
      response = `CON Enter your location`;
      res.send(response);
    } else if (initSelection == "3") {
      response = `CON Enter your location`;
      res.send(response);
    } else if (initSelection == "4") {
      response = `CON Enter your location`;
      res.send(response);
    } else if (initSelection == "5") {
      response = `CON Enter your location`;
      res.send(response);
    }
  }
  else if (len == 3) {
    if (initSelection == "1") {
      response = `END Help is on its way`;
      postAlert(initSelection, response);
    } else if (initSelection == "2") {
      response = `END Help is on its way`;
      postAlert(initSelection, response);
    } else if (initSelection == "3") {
      response = `END Help is on its way`;
      postAlert(initSelection, response);
    } else if (initSelection == "4") {
      response = `END Help is on its way`;
      postAlert(initSelection, response);
    } else if (initSelection == "5") {
      response = `END Help is on its way`;
      postAlert(initSelection, response);
    }
  }
});

module.exports = router;
