import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project.interface';
import { setSkillPillColorHelper } from '../csshelper';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {
  project!: Project
  htmlContent!: SafeHtml;



  readonly skillCssMap:  Map<string, string> = new Map<string, string>([
    ['Python', 'pill-python'],
    ['JavaScript', 'pill-javascript']
  ])
  constructor(private backenService: BackendService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private router : Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {

      if (params['_id']) {
        let id = JSON.parse(params['_id']);
        this.getProject(id);
      }
      else{
        this.router.navigate(['']);
      }
    });

    // console.log(this.project.body);
  }

  async getProject(id: string){
    try {
      this.project = await this.backenService.getProject(id);
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.project.body);
    } catch (error) {
      if(error instanceof Error){
        console.error(`Error fetching projects: ${error.message}`);
        this.router.navigate(['']);
      }
    }
  }

  setSkillPillColor(skill: string): string {
    return setSkillPillColorHelper(skill)
  }
}
