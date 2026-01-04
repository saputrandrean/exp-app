import quotationModel from "../models/quotationModel.js";

let quotation = [];

const getQuotations = async (req, res) => {
  try {
    const rows = await quotationModel.getQuotations();
    const QuotationNumber = rows.map((row) => ({
      id: row.ID,
      quotationNumber: row.QUOTATION_NUMBER,
    }));
    res.status(200).json(QuotationNumber);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
    console.log(error);
  }
};

const createQuotation = async (req, res) => {
  const { quotationNumber } = req.body;
  try {
    await quotationModel.createNewQuotation({
      quotationNumber,
    });
    res.status(201).json(`Customer Quotation Number : ${quotationNumber}`);
  } catch (error) {
    console.log(error);
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        error: "Duplicate entry",
        message: `Quotation number: ${quotationNumber} already exists`,
      });
    }
    res.status(500).json({
      error: "Database error",
      message: error.sqlMessage || error.message,
    });
  }
};

const getQuotationsByID = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await quotationModel.getQuotationByID(id);
    console.log(rows);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
    console.log(error);
  }
};

const updateQuotation = async (req, res) => {
  const { id } = req.params;
  const { quotationNumber } = req.body;

  try {
    await quotationModel.updateQuotation(id, {
      quotationNumber,
    });
    const updatedQuotation = await quotationModel.getQuotationByID(id);
    const message = () => ({
      message: "Your data successfully updated",
      x: updatedQuotation,
    });
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
    console.log(error);
  }
};

const deleteQuotation = async (req, res) => {
  const { id } = req.params;
  try {
    const quotation = await quotationModel.deleteQuotation(id);
    res.status(200).json(quotation);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
    console.log(error);
  }
};

export default {
  getQuotations,
  createQuotation,
  getQuotationsByID,
  updateQuotation,
  deleteQuotation,
};
