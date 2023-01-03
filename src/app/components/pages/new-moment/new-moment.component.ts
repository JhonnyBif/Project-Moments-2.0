import { MessagesService } from 'src/app/services';
import { MomentService } from './../../../services/moment.service';
import { Component, OnInit } from '@angular/core';
import { IMoment } from 'src/app/Interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent implements OnInit {
  btnText = 'Share';
  constructor(
    private momentService: MomentService,
    private messageService: MessagesService,
    private router: Router,
  ) {}

  ngOnInit(): void {}
  async createHandler(moment: IMoment) {
    const formData = new FormData();
    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }
    await this.momentService.createMoment(formData).subscribe();
    this.messageService.add('Moment Successfully Added');
    this.router.navigate(['/']);
  }
}
