const express = require('express');
const model = require('./models/model');
const DB = require('./config/connectDB');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

DB.connect();

app.get('/', async function(req, res) {
    try {
        const test = await model.find({});
        if (test) {
            return res.status(200).json(test);
        } else {
            return res.status(400).json({ 'message': 'Error' });
        }
    } catch (error) {
        return res.status(500).json({ 'message': 'Error Server' });
    }
    
});

app.post('/add',  async function(req, res) {
    const test = req.body;
    try {
        const ls = await model.create(test);
        if (ls) {
            return res.status(200).json(test);
        } else {
            return res.status(400).json({ 'message': 'Error' });
        }
    } catch (error) {
        return res.status(500).json({ 'message': 'Error Server' });
    }
});

app.put('/edit',  async function(req, res) {
    const test = req.body;
    try {
        const ls = await model.findOneAndUpdate({name: test.nameEdit}, test);
        if (ls) {
            return res.status(200).json(test);
        } else {
            return res.status(400).json({ 'message': 'Error' });
        }
    } catch (error) {
        return res.status(500).json({ 'message': 'Error Server' });
    }
});

app.delete('/remove',  async function(req, res) {
    const test = req.body.name;
    try {
        const ls = await model.findOneAndRemove({name : test});
        if (ls) {
            return res.status(200).json(test);
        } else {
            return res.status(400).json({ 'message': 'Error' });
        }
    } catch (error) {
        return res.status(500).json({ 'message': 'Error Server' });
    }
});

const port = 8888;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
