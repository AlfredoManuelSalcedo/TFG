
  export interface LessonsEstructure {
    lessons: Lesson[]
  }
  
  export interface Lesson {
    grammar: Grammar[]
    vocabulary: Vocabulary[]
  }
  
  export interface Grammar {
    name: string
    type: string
    location: string
  }
  
  export interface Vocabulary {
    name: string
    type: string
    location: string
  }