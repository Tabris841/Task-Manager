var TaskApi = {
    getAllTask: function () {
        return $.get("http://localhost:9002/tasks")
    },
    postTask: function (task) {
        return $.post("http://localhost:9002/tasks", task)
    },
    editTask: function (task) {
        return $.ajax({
            url: "http://localhost:9002/tasks",
            dataType: 'json',
            type: 'PUT',
            data: task
        });
    },
    deleteTask: function (id) {
        return $.ajax({
            url: "http://localhost:9002/tasks",
            dataType: 'json',
            type: 'DELETE',
            data: id
        });
    }
};

module.exports = TaskApi;
