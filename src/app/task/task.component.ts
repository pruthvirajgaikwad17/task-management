import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  constructor(private taskService: TasksService) {}

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}