import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  name: string;
  owner: UserWhereUniqueInput;
  startDate?: Date | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
};
