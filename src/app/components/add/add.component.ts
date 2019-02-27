import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

    priorityOptions = [
    { name: "Very High", value: "Very High" },
    { name: "High", value: "High" },
    { name: "Medium", value: "Medium" },
    { name: "Low", value: "Low" },
    { name: "Unknown", value: "Unknown" }
  ]

  categoryOptions = [
    { name: "Security Issue", value: "Security Issue" },
    { name: "Software Update", value: "Software Update" },
    { name: "Not Supported", value: "Not Supported" },
    { name: "Yeee", value: "Yeee" },
    { name: "Unknown", value: "Unknown" }
  ]

  @Output() addEvt = new EventEmitter();

  handleAdd(formInfo: any) {
    const tempItem: object = {
      petName: formInfo.petName,
      ownerName: formInfo.ownerName,
      aptDate: formInfo.aptDate,
      aptTime: formInfo.aptTime,
      aptNotes: formInfo.aptNotes
    };
    this.addEvt.emit(tempItem);
  }

  constructor() {
  }

  ngOnInit() {}
}
