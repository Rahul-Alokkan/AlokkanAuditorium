import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'Av2-home-pgae',
  templateUrl: './home-pgae.component.html',
  styleUrl: './home-pgae.component.css'
})
export class HomePgaeComponent {

  InfoContent = " Alokkan Auditorium is a premier event venue designed to cater to a diverse range of gatherings, from corporate conferences to cultural performances and community events. With its state-of-the-art facilities and flexible seating arrangements, Alokkan Auditorium offers a welcoming and technologically advanced environment for all types of occasions."
  InfoContent2 = "Equipped with modern audiovisual equipment, lighting systems, and acoustics, Alokkan Auditorium ensures that every event held within its walls is delivered with utmost clarity and impact. Whether hosting a keynote presentation, musical concert, theatrical performance, or academic seminar, clients can rely on Alokkan Auditorium to provide the perfect setting for their event."
  InfoContent3 = "In addition to its technical capabilities, Alokkan Auditorium prides itself on its exceptional customer service and attention to detail. Its dedicated team of professionals works closely with clients to understand their needs and execute flawless events, ensuring a seamless experience from planning to execution."
  InfoContent4 = "Situated in a convenient location with ample parking and easy access to public transportation, Alokkan Auditorium is the preferred choice for those seeking a sophisticated and versatile venue for their next event. Whether it's a small gathering or a large-scale production, Alokkan Auditorium sets the stage for success."


  submitted = false;

  onSubmit(form:NgForm){
    this.submitted=true;
  }

  constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
	) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content:any) {
		this.modalService.open(content);
	}

}
