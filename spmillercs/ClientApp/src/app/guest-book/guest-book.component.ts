import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { Entry } from '../models/entry';
import { GuestbookService } from '../services/guestbook-service.service';

@Component({
  selector: 'guest-book',
  templateUrl: './guest-book.component.html'
})
export class GuestBookComponent implements OnInit {
  closeResult = '';

  name: string = "";
  message: string = "";

  constructor(private modalService: NgbModal, private guestBookService: GuestbookService) { }
  ngOnInit(): void {

  }

  addEntry(): void {
    let entry: Entry = {
      id: undefined,
      name: this.name,
      message: this.message,
      timestamp: new Date()
    };

    this.guestBookService.addEntry(entry);

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
