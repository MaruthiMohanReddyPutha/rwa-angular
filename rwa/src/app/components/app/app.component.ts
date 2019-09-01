import {Component, OnInit} from '@angular/core';
import {CategoryActions, QuestionActions, TagActions} from '../../store/actions';
import {AppStore} from '../../store/app-store';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'rwa';

    constructor(
        private store: Store<AppStore>
    ) {}

    ngOnInit() {
        this.store.dispatch(CategoryActions.loadCategoriesAction());
        this.store.dispatch(TagActions.loadTagsAction());
        this.store.dispatch(QuestionActions.loadQuestions());
    }
}
