import { useOne } from "@refinedev/core";
import { useParams } from "react-router";
import { ShowView, ShowViewHeader } from "@/components/refine-ui/views/show-view";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClassDetails, Schedule } from "@/types";

const ClassShow = () => {
  const { id } = useParams<{ id: string }>();

  const { query, result } = useOne<ClassDetails>({
    resource: "classes",
    id: id ?? "",
  });

  const { data, isLoading, isError } = query;
  const record = result;

  if (isLoading) {
    return <div>Loading class details...</div>;
  }

  if (isError || !record) {
    return (
      <div className="text-center text-muted-foreground">
        Unable to load class details.
      </div>
    );
  }

  return (
    <ShowView className="space-y-4">
      <ShowViewHeader title={record.name} />

      {record.bannerUrl ? (
        <div className="overflow-hidden rounded-xl border border-border">
          <img
            src={record.bannerUrl}
            alt={`${record.name} Banner`}
            className="w-full max-h-[360px] object-cover"
          />
        </div>
      ) : null}

      <Card>
        <CardHeader>
          <CardTitle>Class Summary</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="font-semibold text-foreground">{record.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <Badge variant={record.status === "active" ? "default" : "secondary"}>
                {record.status?.charAt(0).toUpperCase() + record.status?.slice(1)}
              </Badge>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Subject</p>
              <p className="font-semibold text-foreground">{record.subject?.name ?? "-"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Teacher</p>
              <p className="font-semibold text-foreground">{record.teacher?.name ?? "-"}</p>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Capacity</p>
              <p className="font-semibold text-foreground">{record.capacity}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Invite Code</p>
              <p className="font-semibold text-foreground">{record.inviteCode ?? "-"}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Description</p>
            <p className="text-foreground">{record.description ?? "No description available."}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Schedules</p>
            {record.schedules?.length ? (
              <ul className="space-y-2">
                {record.schedules.map((schedule: Schedule, index: number) => (
                  <li key={index} className="rounded-md border border-border p-3">
                    <p className="font-semibold text-foreground">{schedule.day}</p>
                    <p className="text-sm text-muted-foreground">
                      {schedule.startTime} - {schedule.endTime}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-foreground">No schedules defined.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </ShowView>
  );
};

export default ClassShow;
