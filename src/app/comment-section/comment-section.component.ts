import { Component, Input } from '@angular/core';
import { BackendService } from '../backend.service';
import { Comment } from '../interfaces/comment.interface';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent {
  @Input() id: string = '';
  comments: Comment[] = [];
  constructor(private backenService: BackendService, private route: ActivatedRoute) {}

  ngOnInit(): void {  
    this.getComments();
    console.log(this.comments);
    this.orderComments();
  }

  orderComments(): void{
    //Visit only the 'Parent' Comments (non replies)
    this.comments.forEach(comment => {
      if(comment.parent === ''){
        //display comment


        //visit child
        comment.child.forEach(child =>{
          this.visitChild(child);
        });
      }
    })
  }
  
  visitChild(currComment: Comment){
    //display child

    currComment.child.forEach(child =>{
      this.visitChild(child);
    });
  }



  async getComments(): Promise<void>{
    try{
      this.comments = await this.backenService.getComments(this.id);
      console.log(this.comments );
    }
    catch(error){
      if(error instanceof Error){
        console.error(`Error fetching comments: ${error.message}`);
      }
    }
  }

}
