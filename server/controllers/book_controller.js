var books = [];
var id = 0;


module.exports = {
    create:(req, res)=>{
        const {title, author} = req.body
        books.push({id, title, author});
        id+=1;
        res.status(200).send(books)
    },

    read: (req, res)=>{
        res.send(books);
    },

    update: (req, res)=>{
        let id = req.params.id
        const {title, author} = req.body
        books[id] ={id, title, author};
        res.send(books)
    },

    delete: (req, res)=>{
        let id = req.params.id;

        books.splice(id, 1);
        res.send(books);
    }
}