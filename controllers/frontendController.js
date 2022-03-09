function renderIndex(req, res) {
  res.render('login', {
    pageTitle: 'Login',
  });
}

function renderEditUser(req, res) {
  res.render('editUser', {
    pageTitle: 'Edit User',
  });
}

function renderEditProduct(req, res) {
  res.render('editProduct', {
    pageTitle: 'Edit Product',
  });
}

module.exports = {
  renderIndex,
  renderEditUser,
  renderEditProduct,
};
