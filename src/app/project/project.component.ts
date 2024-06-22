// src/app/project-display/project-display.component.ts
import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Router } from '@angular/router';
import { Project } from '../project.interface'



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})

export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;
  readonly skillCssMap:  Map<string, string> = new Map<string, string>([
    ['Python', 'pill-python'],
    ['JavaScript', 'pill-javascript']
  ])


  constructor(private projectService: ProjectService, private router : Router) {}

  async ngOnInit(): Promise<void> {
    try {
      this.projects = await this.projectService.getProjects();
    } catch (error) {
      if(error instanceof Error){
        console.error(`Error fetching projects: ${error.message}`);
      }
    }
  }

  onProjectClick(project: Project): void {
    this.selectedProject = project;
    this.router.navigate(['/project', this.selectedProject.slug]);
  }

  setSkillPillColor(skill: string): string {
    let cssType : string | undefined =  this.skillCssMap.get(skill);
    if(cssType === undefined){
      return 'pill-default';
    }
    return cssType;
  }

}
