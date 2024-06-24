//DEFUNCED moved to backend Service

import { Injectable } from '@angular/core';
import { Project } from '../project.interface'
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  private apiUrl = "http://localhost:3000/api/projects";

  async getProjects(): Promise<Project[]> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Project[] = await response.json();
      return data;
    } 
    catch (error) {
      if (error instanceof Error){
        console.error('Error when getting Projects', error.message);
      }
      throw error; 
    }
  
  }

}