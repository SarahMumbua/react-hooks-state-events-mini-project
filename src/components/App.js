import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
const [tasks, setTasks] = useState(TASKS);
const [selectedCategory, setSelectedCategory] = useState("All");

const handleCategorySelect = (category) => {
setSelectedCategory(category);
};

const handleTaskFormSubmit = (newTask) => {
setTasks([...tasks, newTask]);
};

let visibleTasks = tasks;
if (selectedCategory !== "All") {
visibleTasks = tasks.filter((task) => task.category === selectedCategory);
}

return (
<div className="App">
<h2>My tasks</h2>
<CategoryFilter
     categories={CATEGORIES}
     selectedCategory={selectedCategory}
     onSelectCategory={handleCategorySelect}
   />
<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
<TaskList tasks={visibleTasks} />
</div>
);
}

export default App;