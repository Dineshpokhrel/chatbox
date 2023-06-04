const express = require("express");
const cors = require("cors");
// import axios from 'axios';

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const axios = require('axios');
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username : username, secret: username, first_name: username},
        { headers:{"private-key":"9c35a43f-bae1-458c-8b2a-b2472e0f4798"}}
    );
    return res.status(r.status).json(r.data);

  }catch(e) {
    // return res.status(e.response.status).json(e.response.data);
    console.log(e);
    return res.status(e?.response?.status || 500).json(e?.response?.data || { message: 'Internal server error' });

  }
  //return res.json({ username: username, secret: "sha256..." });
});

 
app.listen(3000);