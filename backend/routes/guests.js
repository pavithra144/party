const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middlewares/auth");
const guestModel = require("../models/guestModel");
//guest model

router.get("/", auth, async (req, res) => {
  try {
    const guest = await guestModel.find({ user: req.user.id });
    res.json(guest);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

router.post(
  "/",
  auth,
  [
    check("name", "Please provide name").not().isEmpty(),
    check("phone", "Please provide phone number").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    const { name, phone, dietary, isConfirmed } = req.body;
    try {
      let guest = new guestModel({
        user: req.user.id,
        name,
        phone,
        dietary,
        isConfirmed,
      });
      guest = await guest.save();
      res.json(guest);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server error");
    }
  }
);

router.delete("/:id", auth, async (req, res) => {
  try {
    let guest = await guestModel.findById(req.params.id);
    if (!guest) {
      return res.status(404).json({ msg: "Guest not found" });
    }
    await guestModel.findByIdAndRemove(req.params.id);
    res.send("Guest removed");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error  ");
  }
});

router.put("/:id", auth, async (req, res) => {
  const { name, phone, dietary, isConfirmed } = req.body;
  const updatedGuest = { name, phone, dietary, isConfirmed };
  try {
    let guest = await guestModel.findById(req.params.id);
    if (!guest) {
      return res.status(404).json({ msg: "Guest not found" });
    }
    await guestModel.findByIdAndUpdate(req.params.id, {
      $set: updatedGuest,
      new: true,
    });
    res.send(guest)
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error  ");
  }
});

module.exports = router;
