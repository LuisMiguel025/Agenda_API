import { getConnection } from "../database/database";

const getContacts = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM contacts");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getContact = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM contacts WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addContact = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber } = req.body;

    if (
      firstName === undefined ||
      lastName === undefined ||
      phoneNumber === undefined
    ) {
      res.status(400).json({ message: "Bad Request. Please fill all field." });
    }

    const contact = { firstName, lastName, phoneNumber };
    const connection = await getConnection();
    await connection.query("INSERT INTO contacts SET ?", contact);
    res.json({ message: "Contact added" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, phoneNumber } = req.body;

    if (
      id === undefined ||
      firstName === undefined ||
      lastName === undefined ||
      phoneNumber === undefined
    ) {
      res.status(400).json({ message: "Bad Request. Please fill all field." });
    }

    const contact = { firstName, lastName, phoneNumber };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE contacts SET ? WHERE id = ?",
      [contact, id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM contacts WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getContacts,
  getContact,
  addContact,
  updateContact,
  deleteContact,
};
