const getAllCustomers = (req, res) => {
  const data = {
    id: 1,
    name: "Andre",
  };
  res.json({
    message: "Get Companies Sucess 2",
  });
};

const createNewCustomer = (req, res) => {
  console.log(req.body);
  res.json({
    message: "Create New Company Success 2",
    data: req.body,
  });
};

const updateCustomer = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Update Company Sucess",
    data: req.body,
  });
  re;
};

export default { getAllCustomers, createNewCustomer, updateCustomer };
