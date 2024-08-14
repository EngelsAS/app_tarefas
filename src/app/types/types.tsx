import { DocumentData } from "firebase/firestore";

export interface TaskProps {
  id: string;
  created: Date;
  public: boolean;
  tarefa: string;
  user: string;
}

// export interface SnapshotTaskData extends DocumentData {
//   created: Date;
//   public: boolean;
//   tarefa: string;
//   user: string;
// }
