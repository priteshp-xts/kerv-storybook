import { ScrollArea } from './scroll-area';

export default {
  title: 'UI/Scroll Area',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Default = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4 text-sm leading-6 text-muted-foreground">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          feugiat, erat at bibendum facilisis, massa urna luctus leo, sed
          luctus arcu ligula in urna.
        </p>
        <p>
          Mauris sodales, justo at semper tristique, metus nunc luctus lorem,
          at interdum augue arcu in magna.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </ScrollArea>
  ),
};
