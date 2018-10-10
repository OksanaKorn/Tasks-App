import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'tasks-list',
  templateUrl: './task-list.component.html',
  styleUrls: ["./task-list.component.css"]
})
export class TaskComponent implements OnInit, AfterViewChecked {
  tasks: Object[] = []
  currentTask: string = ""
  taskDivs
  index: number = 0
  comments: string[]

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('tasks')) !== null) {
        this.showTasks()
    }
  }

  showTasks() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'))
    this.taskDivs = document.getElementsByClassName('task')
  }

  resetActiveClass() {
    for (let i = 0; i < this.taskDivs.length; i++) {
      this.taskDivs[i].className = 'task col-8';
    }
  }

  addActiveClass(index) {
    this.resetActiveClass()
    this.taskDivs[index].classList.add("active")
    this.currentTask = this.taskDivs[index].innerText
    let taskFromStorage:any = this.tasks[index]
    this.comments = taskFromStorage.comments
  }
  
  addClass(event) {
    for (let i = 0; i < this.taskDivs.length; i++) {
      if (event.target.innerText === this.taskDivs[i].innerText) {
        this.index = i;
        this.addActiveClass(i)
      }
    }
  }
 
  createNewTask(task) {
    if (task) {
      let newTask:TaskConfig = new Task(task)
      this.tasks.push(newTask)
      this.setNewTaskToStorage()
      this.showTasks()
      this.comments = []
      this.index = this.tasks.length - 1
      this.addActiveClass(this.index)
    }
  }

  setNewTaskToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  deleteTask(event) {
    let taskToDelete = event.target.previousSibling.previousSibling.innerText
    for (let i = 0; i < this.tasks.length; i++) {
      let taskFromStorage:any = this.tasks[i]
        if (taskToDelete === taskFromStorage.task) {
            this.tasks.splice(i, 1)
            localStorage.removeItem('tasks')
            this.setNewTaskToStorage()
            this.index = 0
            this.addActiveClass(this.index)
            this.showTasks()
        }
    }
  }

  addCommentToStorage(event) {
    if (event.keyCode === 13 && event.ctrlKey) {
      for (let i = 0; i < this.tasks.length; i++) {
        let taskFromStorage:any = this.tasks[i]
        if (taskFromStorage.task === this.currentTask) {
            // this.comments = this.tasks[i].comments
            this.comments.push(event.target.value)
            let newTask = new Task(this.currentTask, this.comments)
            this.tasks.splice(i, 1, newTask)
            localStorage.removeItem('tasks')
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
            event.target.value = ""
        }
      }
    }
  }

  ngAfterViewChecked() {
    if (JSON.parse(localStorage.getItem('tasks')) !== null) {
      this.addActiveClass(this.index);
    }
  }
  
}

interface TaskConfig {
  task: string;
  comments: string[];
}


let Task = function(task, comments = []) {
    this.task = task,
    this.comments = comments
}


  // checkTaskExistince(task) {
  //   for (let i = 0; i < this.tasks.length; i++) {
  //     if (task === this.tasks[i].task) {
  //       this.exist = true;
  //     }
  //   }
  // }


    // ngAfterContentChecked() {
  //   // this.currentTask = JSON.parse(localStorage.getItem('currentTask'))
  //   for (let i = 0; i < this.tasks.length; i++) {
  //     if (this.tasks[i].task === this.currentTask) {
  //       this.comments = this.tasks[i].comments
  //     }
  //   }
  // }