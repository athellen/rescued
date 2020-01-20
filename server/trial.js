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
  } else if (text == "1") {
    response = `CON Enter your location`;
    res.send(response);
  } else if (text == "2") {
    response = `CON Enter your location`;
    res.send(response);
  } else if (text == "3") {
    response = `CON Enter your location`;
    res.send(response);
  } else if (text == "4") {
    response = `CON Enter your location`;
    res.send(response);
  } else if (text == "5") {
    response = `CON Enter your location`;
    res.send(response);
  } else if (len == 2) {
    if (initSelection == "1") {
      response = `END Sent Successfully`;
      postAlert(initSelection, response);
    } else if (initSelection == "2") {
      response = `END Sent Successfully`;
      postAlert(initSelection, response);
    } else if (initSelection == "3") {
      response = `END Sent Successfully`;
      postAlert(initSelection, response);
    } else if (initSelection == "4") {
      response = `END Sent Successfully`;
      postAlert(initSelection, response);
    } else if (initSelection == "5") {
      response = `END Sent Successfully`;
      postAlert(initSelection, response);
    }
  }
});

module.exports = router;
