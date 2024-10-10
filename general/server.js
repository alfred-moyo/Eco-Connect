const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const PORT = 7600;

const app = express();
var userData = [];

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

//db connection

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://alfmoxz:Vanessadube1234@cluster0.gkkmtz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use('/M00881072',express.static(path.join(__dirname, "general")));

app.post ("/M00881072/signup", (req,res)=> {
    var data = req.body
    userData.push(data)
    run().catch(console.dir);
return res.send("Received data Sucessfully").status(200)
})

async function run() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    var database = client.db("Ecoconnect");
    var collection = database.collection("signup");
    console.log(userData[0])
    await collection.insertOne(JSON.parse(JSON.stringify(userData[userData.length-1])));

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

app.get ("/M00881072/signup", async (req, res)=> {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      var database = client.db("Ecoconnect");
      var collection = database.collection("signup");
      var result = await collection.findOne();
  
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally { (await client.close)
    }
  
    res.send(result)
    })

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});

