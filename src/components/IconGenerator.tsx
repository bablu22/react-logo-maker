import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageIcon, Pencil2Icon } from "@radix-ui/react-icons";
import IconController from "./IconController";
import BackgroundController from "./BackgroundController";

const IconGenerator = () => {
  return (
    <>
      <Tabs defaultValue="icon" className="w-[400px]">
        <TabsList className="grid w-11/12 grid-cols-2 mx-auto md:w-full">
          <TabsTrigger value="icon">
            <Pencil2Icon className="mr-2" />
            <span>Icon</span>
          </TabsTrigger>
          <TabsTrigger value="background">
            <ImageIcon className="mr-2" />
            Background
          </TabsTrigger>
        </TabsList>
        <TabsContent value="icon">
          <Card className="w-11/12 mx-auto rounded shadow-none md:w-full">
            <CardHeader>
              <CardTitle>Customize your icon here.</CardTitle>
              <CardDescription>
                You can customize the icon here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <IconController />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="background">
          <Card className="w-11/12 mx-auto rounded shadow-none md:w-full">
            <CardHeader>
              <CardTitle>Customize your background here.</CardTitle>
              <CardDescription>
                You can customize the background of your icon here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <BackgroundController />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default IconGenerator;
