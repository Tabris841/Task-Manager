var TaskApi = {
    getAllTask: function() {
        return $.get("http://localhost:9002/tasks")
    }
};

module.exports = TaskApi;
