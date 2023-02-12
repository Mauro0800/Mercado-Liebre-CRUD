const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const priceFinal = products.map(product => product.price - (product.price * (product.discount/100)) );

const controller = {
	index: (req, res) => {
		
		const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		const productVisisted = products.filter(product=>product.category === "visited")
		const productInSale = products.filter(product=>product.category === "in-sale")
		
		// const priceFinal = product.price - (product.price * (product.discount/100))

		// return res.send(priceFinal)


		return res.render('index',{
			productVisisted,
			productInSale,
			priceFinal,
			toThousand
		})
	},
	search: (req, res) => {
		const {keywords} = req.query;

		const productsFilter = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase()) || product.description.toLowerCase().includes(keywords.toLowerCase()))
		return res.render('results',{
			productsFilter,
			toThousand,
			priceFinal,
			keywords
		})
	},
};

module.exports = controller;
