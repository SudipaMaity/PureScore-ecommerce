import contactModel from "../models/contactModel.js";

// create message
export const createMessageController = async (req, res) => {
  try {
    const { name, email, title, message } = req.body;
    if (!name) {
      res.send({ message: "name is required" });
    }
    if (!email) {
      res.send({ message: "email is required" });
    }
    if (!title) {
      res.send({ message: "title is required" });
    }
    if (!message) {
      res.send({ message: "message is required" });
    }
    const contactMessage = await new contactModel({
      name,
      email,
      title,
      message,
    }).save();
    res.status(201).send({
      success: true,
      message: "Message Send Successfully",
      contactMessage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while sending message from contact form",
    });
  }
};

// fetch all messages
export const fetchMessageController = async (req, res) => {
  try {
    const contactMessage = await contactModel.find({});
    res.status(200).send({
      success: true,
      totalMessage: contactMessage.length,
      message: "All Messages Displayed",
      contactMessage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while fetching",
    });
  }
};

// fetch single message
export const fetchSingleMessageController = async (req, res) => {
  try {
    const contactMessages = await contactModel
      // .findOne({ id: req.params.id });
      .findById(req.params.id);
    res.status(200).send({
      success: true,
      contactMessages,
      message: "Single Message Displayed",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while fetching single message",
    });
  }
};

// delete message
export const deleteMessageController = async (req, res) => {
  try {
    const deleteMsg = await contactModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      deleteMsg,
      message: "Message deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      messaage: "error while deleting message",
    });
  }
};
