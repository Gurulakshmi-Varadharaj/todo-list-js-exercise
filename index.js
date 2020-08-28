//Refactor using Object instead of Array
const newTask = function(title, description) {
  const task = {
    titles: title,
    descriptions: description,
    complete: false,
    logState: function() {
      console.log(`${this.titles} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// Driver Code
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);


