/**
 * Created by Andrzej on 06.05.2017.
 */
import {AfterViewInit, Component} from '@angular/core';
import {ActivityModel} from '../../model/activities/ActivityModel';
import {RestService} from "../../service/impl/RestService";

@Component({
  selector: 'activitiess',
  templateUrl: './activities.html',
  styleUrls: ['./activities.css']
})
export class ActivitiesComponent implements AfterViewInit {
  /*documents: ActivityModel[] = [
    {name: 'Dokument1' , icon: 'event', date: '2017-05-05', user: 'User 11', action: 'dodał', actionClass: 'bold added'},
    {name: 'Dokument2' , icon: 'event', date: '2017-05-05', user: 'User 11', action: 'dodał', actionClass: 'bold added'},
    {name: 'Dokument3' , icon: 'event', date: '2017-05-05', user: 'User 11', action: 'usunął', actionClass: 'bold deleted'},
    {name: 'Dokument3' , icon: 'event', date: '2017-05-05', user: 'User 11', action: 'dodał', actionClass: 'bold added'}
  ];*/
  documents: ActivityModel[] = [];

  constructor(private rest: RestService) {
  }

  ngAfterViewInit(): void {
    this.rest.getActivities()
        .subscribe(
            (data: ActivityModel[]) => {
              // console.log(data.token);
              this.documents = data;
            },
            err => {
              alert("service is temporary unavailable!");
            }
        )
  }
}
