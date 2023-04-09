import connection from "../model/db.js";

export const getAllProducts = async (req, res) => {

    let sqQuery = `SELECT * FROM products`;

    connection.query(sqQuery, (err, rows) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(rows);
        }
    })
}

export const getSingleProduct = async (req, res) => {
    let sqQuery = `SELECT * FROM products WHERE product_id = ${req.params.id}`;

    connection.query(sqQuery, (err, rows) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(rows);
        }
    })
}

// create product
export const createProduct = async (req, res) => {

// `INSERT INTO products (product_id, product_name, product_category, product_price, product_qty, product_description, product_img) 
// VALUES 
// (   NULL, 
//     '${req.body.}', 
//     'speaker', 
//     '40', 
//     '5', 
//     'lorem ipsem ', 
//     'this is an image'
// );`

    let sqQuery = `INSERT INTO products (product_name, product_price, product_description) VALUES ('${req.body.product_name}', '${req.body.product_price}', '${req.body.product_description}')`;
    connection.query(sqQuery, (err, rows) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(rows);
        }
    })
}
// update product

// delete product
