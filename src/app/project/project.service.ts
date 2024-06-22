import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../project.interface'


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:3000/api/projects';  // Update with your actual API URL

  constructor(private http: HttpClient) { }

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