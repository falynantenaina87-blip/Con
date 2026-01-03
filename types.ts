export interface User {
  _id: string;
  name: string;
  role: 'student' | 'teacher';
}

export interface Translation {
  hanzi: string;
  pinyin: string;
  translation: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export type ViewState = 'auth' | 'chat' | 'announcements' | 'schedule' | 'quiz';
