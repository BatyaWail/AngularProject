import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService implements OnInit {
  private sessionStorageChanges = new Subject<string | null>();

  // constructor() {
  // }
  ngOnInit(): void {
    const mockWindow = {
      addEventListener: (event: string, callback: (event: StorageEvent) => void) => {
        callback({ key: 'currentUserName', newValue: 'mockedUserName' } as StorageEvent);
      }
    };

    mockWindow.addEventListener('storage', (event: StorageEvent) => {
      if (event.key === 'currentUserName') {
        if (event.newValue !== null) {
          this.sessionStorageChanges.next(event.newValue);
        }
      }
    });
  }

  getSessionStorageChanges() {
    return this.sessionStorageChanges.asObservable();
  }
}