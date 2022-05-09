/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TaskService } from "../task.service";
import { TaskCreateInput } from "./TaskCreateInput";
import { TaskWhereInput } from "./TaskWhereInput";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";
import { TaskFindManyArgs } from "./TaskFindManyArgs";
import { TaskUpdateInput } from "./TaskUpdateInput";
import { Task } from "./Task";
@swagger.ApiBearerAuth()
export class TaskControllerBase {
  constructor(
    protected readonly service: TaskService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Task })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: TaskCreateInput): Promise<Task> {
    return await this.service.create({
      data: {
        ...data,

        assignedTo: data.assignedTo
          ? {
              connect: data.assignedTo,
            }
          : undefined,

        project: data.project
          ? {
              connect: data.project,
            }
          : undefined,
      },
      select: {
        assignedTo: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        estimationDays: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Task] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TaskFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Task[]> {
    const args = plainToClass(TaskFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        assignedTo: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        estimationDays: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Task })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TaskWhereUniqueInput
  ): Promise<Task | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        assignedTo: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        estimationDays: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        status: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Task })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TaskWhereUniqueInput,
    @common.Body() data: TaskUpdateInput
  ): Promise<Task | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          assignedTo: data.assignedTo
            ? {
                connect: data.assignedTo,
              }
            : undefined,

          project: data.project
            ? {
                connect: data.project,
              }
            : undefined,
        },
        select: {
          assignedTo: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          estimationDays: true,
          id: true,

          project: {
            select: {
              id: true,
            },
          },

          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Task })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TaskWhereUniqueInput
  ): Promise<Task | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          assignedTo: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          estimationDays: true,
          id: true,

          project: {
            select: {
              id: true,
            },
          },

          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
