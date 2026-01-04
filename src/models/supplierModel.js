import conn from "../config/database.js";

const getSupplier = async (suppliers) => {
  try {
    const query = "SELECT SUPPLIER_NAME, IS_DELETED FROM SUPPLIER";
    const result = await conn.query(query, suppliers);
    return result;
  } catch (error) {
    throw error;
  }
};

const createSupplier = async (supplierData) => {
  const { supplierName } = supplierData;
  try {
    const query = "INSERT INTO SUPPLIER (SUPPLIER_NAME) VALUES (?)";
    const result = await conn.query(query, [supplierName]);
    return result;
  } catch (error) {
    throw error;
  }
};

export default { getSupplier, createSupplier };
