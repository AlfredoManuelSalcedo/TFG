import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userDataKey = 'userData';
  private userData :any;

  constructor() { }

  setUserData(data: any) {
    this.userData = data;
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.userDataKey, JSON.stringify(data));
    }
  }

  getUserData() {
    if (!this.userData) {
      if (this.isLocalStorageAvailable()) {
        const data = localStorage.getItem(this.userDataKey);
        if (data) {
          this.userData = JSON.parse(data);
        }
      }
    }
    return this.userData;
  }

  clearUserData() {
    this.userData = null;
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(this.userDataKey);
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = 'test';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}