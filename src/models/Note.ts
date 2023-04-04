export interface Note {
  key?: string;
  title?: string;
  content?: string;
  createdAt: number;
  updatedAt: number;
  by: string;
  image?: string;
  tasks?: Task[];
  isPin?: boolean;
}

export interface Task {
  isCompleted: boolean;
  content?: string;
}
