export interface Comment {
    blog: string;
    id: string;
    user: string;
    user_token: string;
    content: string;
    parent: string; 
    child: Comment[];
    date: string;
}
  
