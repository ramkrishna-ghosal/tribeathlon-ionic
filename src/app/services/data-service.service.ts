import { AppComponent } from './../app.component';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { AuthConstants } from '../config/auth-constants';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) {
    console.log('Data Service init');
  }
  public getAllEvents(pageno = 0) {
    return this.httpService.post('event', { 'pageno': pageno, 'EventType': 'E' });
  }
  public createEvent(data) {
    return this.httpService.post('event/create', data);
  }
  public getMyFriends(pageno = 0) {
    return this.httpService.get('user/friends/' + AuthConstants.authenticateData['id'] + '/' + pageno);
  }
  public addFriend(data) {
    return this.httpService.post('user/addfriend', data);
  }
  public joinEvent(data) {
    return this.httpService.post("event/joinevent", data);
  }
  public createTribe(data) {
    return this.httpService.post('user/createtribe', data);
  }
  public getUploadImage(data, files, names) {
    return this.httpService.upload('event/uploadeventfile', data, files, names);
  }
  public getFilterData(data) {
    return this.httpService.post('event', data);
  }
  public sendFeedback(data) {
    return this.httpService.post("auth/feedback", data);
  }
  public changePassword(data){
    return this.httpService.post("user/changepassword", data);

  }
  public getParentTypes(EventType) {
    return this.httpService.get('event/parenttypes/' + EventType);
  }
  public getTribes(pageno = 0) {
    return this.httpService.get('user/tribes/' + AuthConstants.authenticateData['id'] + '/' + pageno);
  }
  public getEventDetails(evId) {
    return this.httpService.get('event/detail/' + evId);
  }
  public getNotifications(pageno = 0) {
    return this.httpService.get('user/notifications/' + AuthConstants.authenticateData['id'] + '/' + pageno)
  }
  public getEventsUsers(data) {
    return this.httpService.post("event/eventusers", data)
  }
  public getChildTypes(parentId) {
    return this.httpService.get('event/childtypes/' + parentId);

  }
  public getAllTrainings(pageno = 0) {
    return this.httpService.post('event', { 'pageno': pageno, 'EventType': 'T' });

  }
  public getMyEvents(pageno = 0) {
    return this.httpService.post('myevent', { 'pageno': pageno, 'UserID': AuthConstants.authenticateData['id'] });
  }
  public getregions() {
    return this.httpService.get('event/regions/');
  }
}
