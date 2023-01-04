import { IComment } from './../../../Interface/comment.interface';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommentService, MessagesService, MomentService } from 'src/app/services/';
import { IMoment } from 'src/app/Interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css'],
})
export class MomentComponent implements OnInit {
  moment?: IMoment;
  baseApiUrl = environment.baseApiUrl;
  faTimes = faTimes;
  faEdit = faEdit;
  commentForm!: FormGroup;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router,
    private commentService: CommentService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService
      .getMoment(id)
      .subscribe((item) => (this.moment = item.data));
      this.commentForm =  new FormGroup({
        text: new FormControl('',[Validators.required]),
        username: new FormControl('',[Validators.required])
      })
  }

  get text(){
    return this.commentForm.get('text')!;
  }

  get username(){
    return this.commentForm.get('username')!;
  }

  async removeHandler(id: number){
    await this.momentService.removeMoment(id).subscribe()
    this.messageService.add('Moment deleted successfully');
    this.router.navigate(['/']);
  }

  async onSubmit(formDirective: FormGroupDirective){
    if(this.commentForm.invalid){
      return
    }
    const data: IComment =  this.commentForm.value
    data.momentId = Number(this.moment!.id)
    await this.commentService.createComment(data).subscribe((comment)=> this.moment!.comments!.push(comment.data))
    this.messageService.add('Comment created successfully')
    this.commentForm.reset()
    formDirective.resetForm()
  }
}
