var ListApi = {
    getAllLists: function() {
        return $.get("http://localhost:9002/lists")
    }
};

module.exports = ListApi;