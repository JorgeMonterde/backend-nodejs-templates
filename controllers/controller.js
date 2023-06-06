//GETs
/* 
// by functions:
const showHome = (req, res) => {
    try {
        res.status(200).render("home", {pageName: "home"})// file to render AND info to render --> .render("home", {"key1": "info1", "key2": "info2"})
    } catch (error) {
        console.log(`Error: ${error}`)
    };
}
const showWhoAreWe = (req, res) => {
    try {
        res.status(200).render("who_are_we", {pageName: "Who we are"})
    } catch (error) {
        console.log(`Error: ${error}`)
    };
}
const showWhereAreWe = (req, res) => {
    try {
        res.status(200).render("where_are_we", {pageName: "Where we are"})
    } catch (error) {
        console.log(`Error: ${error}`)
    };
}
const showWhatDoWeDo = (req, res) => {
    try {
        res.status(200).render("what_do_we_do", {pageName: "What we do"})
    } catch (error) {
        console.log(`Error: ${error}`)
    };
}
const showContact = (req, res) => {
    try {
        res.status(200).render("contact", {pageName: "Contact"})
    } catch (error) {
        console.log(`Error: ${error}`)
    };
}
 */

// by params:
const showPageFromParams = (req, res) => {
    try {
        let page = req.params.page;
        console.log(page);
        res.status(200).render(page)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}



module.exports = {
    /* showHome,
    showWhoAreWe,
    showWhereAreWe,
    showWhatDoWeDo,
    showContact, */
    showPageFromParams
};