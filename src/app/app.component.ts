import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getUsersSelector } from './store/selectors/userSelectors';
import { AddUserSuccess } from './store/actions/userAction';

let userCount = 0;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'trainnig-ngrx';

    users$ = this.store.pipe(select(getUsersSelector));
    constructor(private store: Store<any>) {}

    ngOnInit(): void {
        this.users$.subscribe(users => {
            console.log(users);
        });
    }

    addUser(): void {
        this.store.dispatch(new AddUserSuccess({name: `Ali ${userCount++}`}));
    }
}
