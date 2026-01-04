import conn from "../config/database.js";

const getQuotations = async (quotationNumber) => {
  try {
    const query = "SELECT ID, QUOTATION_NUMBER FROM QUOTATION";
    const result = await conn.query(query, quotationNumber);
    return result;
  } catch (error) {
    throw error;
  }
};

const createNewQuotation = async (quotationData) => {
  const { quotationNumber } = quotationData;
  try {
    const query = "INSERT INTO QUOTATION (QUOTATION_NUMBER) VALUES (?)";
    const result = await conn.query(query, quotationNumber);
    return result;
  } catch (error) {
    throw error;
  }
};

const getQuotationByID = async (id) => {
  try {
    const query = "SELECT QUOTATION_NUMBER FROM QUOTATION WHERE ID = ?";
    const result = await conn.query(query, [id]);
    return result[0];
  } catch (error) {
    throw error;
  }
};

const updateQuotation = async (id, { quotationNumber }) => {
  try {
    const query = "UPDATE QUOTATION SET QUOTATION_NUMBER = ? WHERE ID = ?";
    const result = await conn.query(query, [quotationNumber, id]);
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteQuotation = async (id) => {
  try {
    const query = "UPDATE QUOTATION SET IS_DELETED = 1 WHERE ID = ?";
    const result = await conn.query(query, [id]);
    return result;
  } catch (error) {
    throw error;
  }
};

export default {
  getQuotations,
  createNewQuotation,
  getQuotationByID,
  updateQuotation,
  deleteQuotation,
};
