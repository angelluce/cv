import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmailResponseInterface} from "../interfaces/email-response.interface";
import {EmailPayloadInterface} from "../interfaces/email-payload..interface";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  endpoint = 'https://smartsoft-api.onrender.com';
  constructor(private http: HttpClient) {
  }

  sendEmail(data: EmailPayloadInterface): Observable<EmailResponseInterface | any> {
    return this.http.post<{}>(`${this.endpoint}/send-email`, data);
  }
}
