import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
  selector: 'app-task',
  template: `
    <div class="list-item {{ task?.state }}">
      <label [attr.aria-label]="'archiveTask-' + task.id"
       for="checked-{{ task?.id }}"
       class="checkbox"
      >
        <input
          type="checkbox"
          disabled="true"
          [defaultChecked]="task?.state === 'TASK_ARCHIVED'"
          name="checked-{{ task?.id }}"
          id="checked-{{ task?.id }}"
        />
        <span class="checkbox-custom" (click)="onArchive(task.id)"></span>
      </label>
      <label
        [attr.aria-label]="task.title + ''"
        for="title-{{ task?.id }}"
        class="title"
      >
        <input
          type="text"
          [value]="task.title"
          readonly="true"
          id="title-{{ task?.id }}"
          name="title-{{ task?.id }}"
          placeholder="Input title"
         />
      </label>
      <button
        *ngIf="task?.state !== 'TASK_ARCHIVED'"
        class="pin-button"
        [attr.aria-label]="'pinTask-' + task.id"
        (click)="onPin(task.id)"
      >
        <span class="icon-star"></span>
      </button>
    </div>
  `,
})
export class TaskComponent {
  @Input() task: any;

  @Output()
  onPinTask = new EventEmitter<Event>();

  @Output()
  onArchiveTask = new EventEmitter<Event>();

  /**
   * Component method to trigger the onPin event 
   * @param id string
   */
  onPin(id: any) {
    this.onPinTask.emit(id);
  }

  /**
   * Component method to trigger the onArchive event 
   * @param id string 
   */
  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}