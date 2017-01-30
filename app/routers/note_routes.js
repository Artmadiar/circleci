module.exports = function(app, db) {
  // You'll create your note here.
  app.post('/notes/add', (req, res) => {
    console.log(req.body);
    res.send('Where is the data Lebowski?');
  });
};