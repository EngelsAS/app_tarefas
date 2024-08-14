import { DocumentData } from "firebase/firestore";

export interface TaskProps {
  id: string;
  created: Date;
  public: boolean;
  tarefa: string;
  user: string;
}

export type TaskType =
  | (Omit<TaskProps, "created"> & {
      created: string;
    })
  | undefined;
