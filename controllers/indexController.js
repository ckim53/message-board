const displayIndex = (req, res, messages) => {
    res.render("index", { title: "Mini Messageboard", messages: messages })
}

module.exports = { displayIndex } 