// src/app/project-display/project-display.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { Project } from '../project.interface'

import { setSkillPillColorHelper } from '../csshelper';

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


  constructor(private backenService: BackendService, private router : Router) {}

  async ngOnInit(): Promise<void> {
    try {
      this.projects = await this.backenService.getProjects();
    } catch (error) {
      if(error instanceof Error){
        console.error(`Error fetching projects: ${error.message}`);
      }
    }
  }

  onProjectClick(project: Project): void {
    this.selectedProject = project;
    // this.router.navigate(['/project', this.selectedProject.slug]);
    const projectUrl = '/project';
    this.router.navigate([projectUrl], { queryParams: { _id: JSON.stringify(project._id) } });
  }

  setSkillPillColor(skill: string): string {
    return setSkillPillColorHelper(skill)
  }

}
