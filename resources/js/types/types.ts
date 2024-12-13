

  export interface ModuleContent {
    name: string;
    description: string;
  }
  export  interface Section {
    title: string;
    description: string;
    lessons: number;
    content: ModuleContent[];
  }
  export interface ExamCategory {
    title: string;
    description: string;
    duration: string;
    questions: string;
    instructor: string;
    price: number;
    rating: number;
    students: number;
    sections: Section[];
    features: string[];
  }
  // Tipe untuk data auth
interface AuthProps {
    user: {
      id: number;
      name: string;
      email: string;
    };
  }