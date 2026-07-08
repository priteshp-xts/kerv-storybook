import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';

const rows = [
  { campaign: 'The Most Out Of Summer', client: 'Walmart', advertiser: 'Walmart', status: 'Underpacing', pacing: '31%' },
  { campaign: 'Doritos - Back to School', client: 'Disney', advertiser: 'Walmart', status: 'Pacing', pacing: '58%' },
  { campaign: 'Everyday Essentials', client: 'GroupM', advertiser: 'P&G', status: 'Pacing', pacing: '53%' },
];

export default {
  title: 'UI/Table',
  component: Table,
  parameters: { layout: 'padded' },
};

export const Default = {
  render: () => (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <Table className="min-w-[760px]">
        <TableHeader>
          <TableRow>
            <TableHead>Campaign</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Advertiser</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Pacing</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.campaign}>
              <TableCell className="font-medium text-foreground">{row.campaign}</TableCell>
              <TableCell>{row.client}</TableCell>
              <TableCell>{row.advertiser}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.pacing}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};
