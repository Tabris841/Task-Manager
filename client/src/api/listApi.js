var ListApi = {
    getAllLists: function () {
        return $.get("http://localhost:9002/lists")
    },
    postList: function (list) {
        return $.post("http://localhost:9002/lists", list)
    },
    editList: function (list) {
        return $.ajax({
            url: "http://localhost:9002/lists",
            dataType: 'json',
            type: 'PUT',
            data: list
        });
    },
    deleteList: function (id) {
        return $.ajax({
            url: "http://localhost:9002/lists",
            dataType: 'json',
            type: 'DELETE',
            data: id
        });
    }
};

module.exports = ListApi;