import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  assignedTo?: UserWhereUniqueInput;
  estimationDays?: DateTimeNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: StringFilter;
};
