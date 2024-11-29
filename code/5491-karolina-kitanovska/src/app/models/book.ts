export interface Book {
    id: number;
    title: string;
    author: string;
    isbn?: string;
    publishedYear: number;
    publisher: string;
    categories: string[];
    available: boolean;
    condition: 'New' | 'Good' | 'Fair' | 'Poor';
    language?: string;
  }
  
