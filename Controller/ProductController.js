const products = [
  { id: 1, name: "iphone12", price: 25000 },
  { id: 2, name: "laptop", price: 55000 },
  { id: 3, name: "headphone", price: 5000 },
  { id: 4, name: "printer", price: 15000 },
];

//get method

export const getProducts = (req, res) => {
  res
    .status(200)
    .json({ message: "Products Retrieved Successfully", data: products });
};


// get method by id

export const getProductsById = (req, res) => {
  const productId = req.params.id;

  const productDetail = products
    .find((ele) => ele.id == productId)
  if (!productDetail) {
    return res.status(404)
      .json({ message: "Product does not Found" })
  }
  res.status(200)
    .json({ meassage: "See your Product sucessfully", data: productDetail })

};

// Post Method

export const createProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
  };

  products.push(newProduct);
  res
    .status(200)
    .json({ message: "Product Added Successfully", data: newProduct });
};

// update method(put)

export const updateProduct = (req, res) => {
  const productId = req.params.id;

  const { name, price } = req.body;
  const index = products.findIndex((ele) => (ele.id) == productId)
  if (index === -1) {
    return
    res
      .status(400)
      .json({ meassage: "Product Not Found" })

  }
  products[index].name = name;
  products[index].price = price;
  res
    .status(200)
    .json({ meassage: "Product Addes SucessFully", data: products[index] })
}


// Delete Method 

export const deleteProduct = (req, res) => {
  const productId = req.params.id;
  const index = products.findIndex((ele) => ele.id == productId);
  if (index === -1) {
    return res.status(404).json({ message: "Product Not Found" });
  }
  products.splice(index, 1);
  res.status(200).json({ message: "Product deleted successfully" });
};


