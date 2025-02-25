const express = require('express');
const app = express();

const port  = 3000;

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });


//for static files


var hits = {};
app.get('/hits/:pageId',(req,res)=>{
    const pageHits =( hits[req.params.pageId] || 0) + 1;

    hits[req.params.pageId] = pageHits;
    res.send((pageHits).toString());
});




// this is the wild card thing, so whenever user enters any url which is not defined in the above routes
app.get('*', (req, res) => {
  res.send('this page doesnot exist')
});
// This method if the user enters any undefined url this would be displayed.
app.all('*', (req, res) => {
    res.send('this page doesnot exist')
  });

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});