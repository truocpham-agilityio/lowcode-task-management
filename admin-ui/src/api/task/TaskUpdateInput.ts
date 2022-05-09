import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: UserWhereUniqueInput | null;
  estimationDays?: Date | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title?: string;
};
