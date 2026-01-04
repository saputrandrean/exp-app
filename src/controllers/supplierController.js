import supplierModel from "../models/supplierModel.js";

const getSuppliers = async (req, res) => {
  try {
    const suppliers = await supplierModel.getSupplier();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createSupplier = async (req, res) => {
  const { supplierName } = req.body;

  // Check if body exists and is an object
  if (
    !req.body ||
    typeof req.body !== "object" ||
    Object.keys(req.body).length === 0
  ) {
    return res.status(400).json({
      message: "Empty payload or invalid request body",
    });
  }

  // Check if required field exists
  if (!supplierName || supplierName.trim() === "") {
    return res.status(400).json({
      message: "supplierName is required",
    });
  }

  try {
    await supplierModel.createSupplier(supplierName);
    res.status(201).json({
      message: "Supplier Created",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default { getSuppliers, createSupplier };
