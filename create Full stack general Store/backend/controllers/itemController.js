const Item = require('../models/item');

exports.createItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create item' });
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Item.findAll();
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve items' });
    }
};

exports.updateQuantity = async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        let newQuantity = item.quantity - parseInt(req.params.qnt);
        if (newQuantity < 0) {
            return res.status(400).json({ error: 'Insufficient quantity' });
        }
        item.quantity = newQuantity;
        await item.save();
        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update item quantity' });
    }
}