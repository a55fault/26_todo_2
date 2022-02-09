const toDo = "To Do";
const inProgress = "In Progress";
const done = "Done";
const defaultStatus = "To Do";
const low = "low";
const high = "HIGH!";
let isSortByStatus = true;

const list = [
    { name: "live a life", status: inProgress, priority: high, },
    { name: "be happy", status: toDo, priority: low, },
    { name: "dont worry", status: done, priority: high, },

]

function showBy(sortBy) {
    if (sortBy == "status") {
        isSortByStatus = true
    }
    else if (sortBy == "priority") {
        isSortByStatus = false
    };
};

function changeStatus(name, newStatus) {
    let findIndex = list.findIndex(item => item.name == name);
    list[findIndex].status = newStatus;

};

function newTask(name, status, priority) {
    list.push({ name, status, priority })
};

function deleteTask(name) {
    let findIndex = list.findIndex(item => item.name == name);
    list.splice(findIndex, 1);
};

function showList() {
    function sortByStatus(a, b) {
        if (a.status > b.status) return 1;
        if (a.status < b.status) return -1;
    }

    function sortByPriority(a, b) {
        if (a.priority > b.priority) return 1;
        if (a.priority < b.priority) return -1;
    }

    if (isSortByStatus == true) {
        list.sort(sortByStatus);
    }
    else {
        list.sort(sortByPriority);
    }

    for (let tasks = 0; tasks < list.length; tasks++)
        console.log(list[tasks].name, list[tasks].status, list[tasks].priority)
};


changeStatus("dont worry", toDo);
newTask("eat", inProgress, low);
newTask("code", toDo, low);
newTask("sleep", done, low);
newTask("rest", inProgress, low);
deleteTask("be happy");
//showBy("status");
showBy("priority");
showList();
console.log("stop");