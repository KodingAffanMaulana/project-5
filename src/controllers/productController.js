const Product = require('../models/product');

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const { name, qty, price, category, image } = req.body;
    const newProduct = new Product({ name, qty, price, category, image });
    await newProduct.save();
    res.status(201).json({
      status: 'success',
      message: 'Product created successfully',
      product: newProduct,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Mengambil semua produk dari database
    if (products.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'No products found',
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Products retrieved successfully',
      products: products, // Menampilkan daftar semua produk
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'Product not found',
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Product retrieved successfully',
      product: product,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, qty, price, category, image } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, qty, price, category, image },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({
        status: 'error',
        message: 'Product not found',
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Product updated successfully',
      product: updatedProduct,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'Product not found',
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Product deleted successfully',
      product: product,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
    });
  }
};
