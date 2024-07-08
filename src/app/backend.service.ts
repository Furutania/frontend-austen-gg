import { Injectable } from '@angular/core';
import { Project } from './interfaces/project.interface'
import { Comment } from './interfaces/comment.interface'
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  private apiUrl = "https://apicaller.austen.gg/";

  async getProjects(): Promise<Project[]> {
    try {
      const response = await fetch(this.apiUrl + 'api/projects', {
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

  async getProject(docID: string): Promise<Project> {
    try {
      const response = await fetch(this.apiUrl + `api/project-detail?docID=${docID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Project = await response.json();
      return data;
    } 
    catch (error) {
      if (error instanceof Error){
        console.error('Error when getting Projects', error.message);
      }
      throw error; 
    }
  }


  async getComments(docID: string): Promise<Comment[]>{

    try{
      const response = await fetch(this.apiUrl + 'api/comments?docID=${docID}',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      else{
        const data: Comment[] = await response.json();
        return data;
      }
      
    }
    catch (error) {
      if (error instanceof Error){
        console.error('Error when getting Projects', error.message);
      }
      throw error; 
    }

  }




}