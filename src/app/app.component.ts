import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './models/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular ToDo List';
  todoModel: ToDo = {} as ToDo;
  sortBy: number = 0;
  sortEnabled: boolean = false;

  backlog: ToDo[] = [
    {task: "Update Windows", done: false, priority: 1},
    {task: "Update Mac", done: true, priority: 0},
    {task: "Update Linux", done: false, priority: 2}
  ]

  CheckItem(t: ToDo){

    let itemIndex = this.backlog.indexOf(t);
    if (~itemIndex) this.backlog[itemIndex].done = true;
    console.log('item done!');
  }

  ResetList(){
    this.backlog.forEach(element => {
      element.done = false;
    });
  }

  AddTask(){

    let newTask: ToDo = {...this.todoModel};
    newTask.done = false;

    if(newTask.task == undefined) alert("Missing task info");

    //for testing
    newTask.task = "Whoop whoop!";
    newTask.priority = 2;
    
    this.backlog.push(newTask);
  }

  SortList(){
    let priorityValue = document.querySelector('#prioritySort') as HTMLInputElement;
    if (priorityValue.value == "3") this.sortEnabled = false;
    else {
      this.sortEnabled = true;
      this.sortBy = Number(priorityValue.value);
    }
    console.log("sort by " + priorityValue.value);

  }

  ResetFilter(){
    this.sortEnabled = false;
  }

}
