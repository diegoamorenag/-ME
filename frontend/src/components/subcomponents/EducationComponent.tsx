import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GraduationCap } from "lucide-react";

export const EducationComponent = ({ item }: { item: any }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-full">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <div>
          <CardTitle className="text-xl">{item.degree}</CardTitle>
          <p className="text-muted-foreground">{item.institution}</p>
        </div>
        <div className="ml-auto text-right">
          <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium">
            {item.year}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  );
};
