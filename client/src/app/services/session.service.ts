import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


const BASEURL = "http://localhost:3000";

@Injectable()
export class SessionService {

  emitter = new EventEmitter();

  options: Object = {withCredentials:true};

  constructor(private http: Http) { }

  handleError(e) {
  return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${BASEURL}/signup`, user, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${BASEURL}/login`, user, this.options)
      .map(res => res.json())
      .map(user =>{this.emitter.emit(user);return user})
      .catch(this.handleError);
  }

  getLoginEventEmitter(){
    return this.emitter;
  }

  logout() {
    return this.http.post(`${BASEURL}/logout`,{}, this.options)
      .map(res => res.json())
      .map(user =>{this.emitter.emit(null);return user})
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${BASEURL}/loggedin`, this.options)
      .map(res => res.json())
      .catch((err) => this.handleError(err));
  }

  getPrivateData() {
    return this.http.get(`${BASEURL}/private`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
