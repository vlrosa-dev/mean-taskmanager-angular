import { TaskService } from 'src/app/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute,
    private router: Router) { }

  listId: string;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params['listId'];
        console.log(this.listId);
      }
    )
  }

  createTask(task: string) {
    this.taskService.createTasks(task, this.listId).subscribe((response: any) => {
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }

}
