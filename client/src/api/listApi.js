var ListApi = {
    getAllLists: function() {
        $.ajax({
            url: "http://localhost:9002/lists",
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({list: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("http://localhost:9002/lists", status, err.toString());
            }.bind(this)
        });
    }
};

module.exports = ListApi;