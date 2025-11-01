import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<{title: string, summary: string, date: string}>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  constructor(private tasksSerive: TasksService) {}

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.tasksSerive.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDate = '';
  }
}
