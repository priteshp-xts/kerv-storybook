import { DataTable } from './data-table';

const payments = [
  { id: '728ed52f', amount: '$316.00', status: 'success', email: 'ken99@example.com' },
  { id: '489e1d42', amount: '$242.00', status: 'success', email: 'Abe45@example.com' },
  { id: '39c4a1b8', amount: '$837.00', status: 'processing', email: 'Monserrat44@example.com' },
  { id: '7b2d0f55', amount: '$874.00', status: 'success', email: 'Silas22@example.com' },
  { id: 'a2d5f1c0', amount: '$721.00', status: 'failed', email: 'carmella@example.com' },
  { id: 'ab7e1d11', amount: '$149.00', status: 'pending', email: 'jane.doe@example.com' },
];

export default {
  title: 'UI/Data Table',
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
  },
};

export const Basic = {
  render: () => (
    <div className="mx-auto max-w-5xl">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold tracking-tight">Data Table</h2>
        <p className="text-sm text-muted-foreground">A reusable payments table built with your local table components.</p>
      </div>
      <DataTable data={payments} />
    </div>
  ),
};
