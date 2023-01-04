import { IResponse } from './../Interface/response.interface';
import { IComment } from './../Interface/comment.interface';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/moments`;
  constructor(private http: HttpClient) {}

  createComment(data: IComment): Observable<IResponse<IComment>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`
    return this.http.post<IResponse<IComment>>(url, data);
  }
}
