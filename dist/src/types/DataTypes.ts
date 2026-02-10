import { User } from 'firebase/auth';

export interface UserProgress {
    xp: number;
    level: number;
    streak: number;
    lastActiveDate: string;
    language: string;
    createdAt: number;
}

export interface QuizQuestion {
    questionId: number;
    type: 'multiple_choice' | 'true_false';
    text: string;
    options?: string[];
    correctAnswer: number | boolean;
    insightExplanation: string;
}

export interface ReadingQuiz {
    bookId: string;
    title: string;
    timestamp: number;
    score: number;
    passed: boolean;
    xpAwarded: number;
    questions: QuizQuestion[];
    userAnswers: (number | boolean)[];
}

export interface WritingSubmission {
    promptId: string;
    timestamp: number;
    text: string;
    criteriaScores: {
        vividness: number;
        eloquence: number;
        clarity: number;
    };
    totalGrade: number;
    feedback: string; 
}

export interface ChatTurn {
    role: 'user' | 'saku';
    text: string;
    timestamp: number;
}

export interface ChatTranscript {
    scenarioId: string;
    timestamp: number;
    language: string;
    turns: ChatTurn[];
}

export interface AppUser {
    auth: User;
    progress: UserProgress;
}