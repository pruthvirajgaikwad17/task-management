import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {
    
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddStart() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: { title: string; summary: string; date: string }) {
    this.tasksService.addTask(
      {
        title: taskData.title,
        summary: taskData.summary,
        date: taskData.date
      },
      this.userId
    );
    this.isAddingTask = false;
  }
}
