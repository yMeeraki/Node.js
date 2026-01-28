const userForm = (req, res) => {
  res.write(`<form action="/submit" method="POST">
    <input type="text" name="userName" id="userName" placeholder="Enter Name">
    <input type="password" name="password" id="password" placeholder="Enter Password">

    <button>Click Me</button>
  </form>`);
};

module.exports = userForm;
