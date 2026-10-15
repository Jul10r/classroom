import { useList } from "@refinedev/core";
import { BookOpen, GraduationCap, Users, Sparkles } from "lucide-react";

import { ListView } from "@/components/refine-ui/views/list-view";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { CreateButton } from "@/components/refine-ui/buttons/create";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Subject, ClassDetails, User } from "@/types";

const metricCards = [
  {
    title: "Subjects",
    description: "Academic subjects available in the system.",
    icon: <BookOpen className="h-5 w-5" />,
    key: "subjects",
  },
  {
    title: "Classes",
    description: "Current class sections and courses.",
    icon: <GraduationCap className="h-5 w-5" />,
    key: "classes",
  },
  {
    title: "Teachers",
    description: "Active teaching staff counted by role.",
    icon: <Users className="h-5 w-5" />,
    key: "teachers",
  },
];

const Dashboard = () => {
  const { query: subjectsQuery } = useList<Subject>({
    resource: "subjects",
    pagination: { pageSize: 1 },
  });

  const { query: classesQuery } = useList<ClassDetails>({
    resource: "classes",
    pagination: { pageSize: 1 },
  });

  const { query: teachersQuery } = useList<User>({
    resource: "users",
    filters: [{ field: "role", operator: "eq", value: "teacher" }],
    pagination: { pageSize: 1 },
  });

  const { query: recentClassesQuery } = useList<ClassDetails>({
    resource: "classes",
    pagination: { pageSize: 3 },
  });

  const subjectsCount = subjectsQuery.data?.total ?? 0;
  const classesCount = classesQuery.data?.total ?? 0;
  const teachersCount = teachersQuery.data?.total ?? 0;

  const statistics = {
    subjects: subjectsCount,
    classes: classesCount,
    teachers: teachersCount,
  };

  const recentClasses = recentClassesQuery.data?.data ?? [];

  return (
    <ListView>
      <Breadcrumb />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Overview of your classroom resources, current classes, and teaching staff.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <CreateButton resource="classes" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {metricCards.map((card) => (
          <Card key={card.key} className="group overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-primary">
                  {card.icon}
                  <CardTitle>{card.title}</CardTitle>
                </div>
                <Badge variant="outline">Live</Badge>
              </div>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-semibold text-foreground">
                {statistics[card.key as keyof typeof statistics]}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <CardTitle>Recent classes</CardTitle>
            </div>
            <CardDescription>Most recently created classes in the system.</CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4">
            {recentClasses.length > 0 ? (
              recentClasses.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-border bg-background p-4 shadow-sm"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {item.description ?? "No description provided."}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={item.status === "active" ? "default" : "secondary"}>
                        {item.status?.charAt(0).toUpperCase() + item.status?.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span>{item.subject?.name ?? "Subject not set"}</span>
                    <span>{item.teacher?.name ?? "Teacher not assigned"}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-xl border border-border bg-background p-6 text-sm text-muted-foreground">
                No classes are available yet. Create a new class to get started.
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick actions</CardTitle>
            <CardDescription>Use these shortcuts to add classroom resources.</CardDescription>
          </CardHeader>

          <CardContent className="grid gap-3">
            <CreateButton resource="classes" className="w-full" />
          </CardContent>
        </Card>
      </div>
    </ListView>
  );
};

export default Dashboard;