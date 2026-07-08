import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

export default {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Default = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="rounded-md border border-border p-4 text-sm">
        View your key metrics and recent project activity. Track progress across all your active projects.
      </TabsContent>
      <TabsContent value="analytics" className="rounded-md border border-border p-4 text-sm">
        Analytics content goes here.
      </TabsContent>
      <TabsContent value="reports" className="rounded-md border border-border p-4 text-sm">
        Reports content goes here.
      </TabsContent>
    </Tabs>
  ),
};

export const Line = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList variant="line" className="gap-2">
        <TabsTrigger
          value="overview"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="analytics"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Analytics
        </TabsTrigger>
        <TabsTrigger
          value="reports"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4 text-sm">
        View your key metrics and recent project activity. Track progress across all your active projects.
      </TabsContent>
      <TabsContent value="analytics" className="p-4 text-sm">
        Analytics content goes here.
      </TabsContent>
      <TabsContent value="reports" className="p-4 text-sm">
        Reports content goes here.
      </TabsContent>
    </Tabs>
  ),
};
