import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from './data-table-icons';
import { Button } from './button';
import { Checkbox } from './checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';
import { cn } from '../../lib/utils';

const defaultColumns = ['Status', 'Email', 'Amount'];

function PaymentStatus({ status }) {
  const styles = {
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    processing: 'bg-amber-50 text-amber-700 border-amber-200',
    pending: 'bg-slate-50 text-slate-700 border-slate-200',
    failed: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  return (
    <span className={cn('inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium capitalize', styles[status] ?? styles.pending)}>
      {status}
    </span>
  );
}

function RowActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="h-8 w-8">
          <MoreHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem>Copy email</DropdownMenuItem>
        <DropdownMenuItem>View details</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DataTable({ data = [] }) {
  const [selectedIds, setSelectedIds] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const pageSize = 5;

  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
  const currentPage = Math.min(page, totalPages - 1);
  const pageData = data.slice(currentPage * pageSize, currentPage * pageSize + pageSize);
  const allPageSelected = pageData.length > 0 && pageData.every((row) => selectedIds.includes(row.id));
  const somePageSelected = pageData.some((row) => selectedIds.includes(row.id));

  const toggleAll = () => {
    const pageIds = pageData.map((row) => row.id);
    if (allPageSelected) {
      setSelectedIds((current) => current.filter((id) => !pageIds.includes(id)));
      return;
    }

    setSelectedIds((current) => Array.from(new Set([...current, ...pageIds])));
  };

  const toggleOne = (id) => {
    setSelectedIds((current) => (
      current.includes(id)
        ? current.filter((currentId) => currentId !== id)
        : [...current, id]
    ));
  };

  return (
    <div className="overflow-hidden rounded-md border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={allPageSelected ? true : somePageSelected ? 'indeterminate' : false}
                onCheckedChange={toggleAll}
                aria-label="Select all rows"
              />
            </TableHead>
            {defaultColumns.map((column) => (
              <TableHead key={column}>{column}</TableHead>
            ))}
            <TableHead className="w-14" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {pageData.length ? (
            pageData.map((row) => {
              const selected = selectedIds.includes(row.id);

              return (
                <TableRow key={row.id} data-state={selected ? 'selected' : undefined}>
                  <TableCell>
                    <Checkbox
                      checked={selected}
                      onCheckedChange={() => toggleOne(row.id)}
                      aria-label={`Select row ${row.email}`}
                    />
                  </TableCell>
                  <TableCell>
                    <PaymentStatus status={row.status} />
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell className="text-right">
                    <RowActions />
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between border-t px-4 py-3 text-sm text-muted-foreground">
        <div>{selectedIds.length} of {data.length} row(s) selected.</div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((current) => Math.max(0, current - 1))}
            disabled={currentPage === 0}
          >
            <ChevronLeftIcon className="mr-1 h-4 w-4" />
            Previous
          </Button>
          <span className="min-w-16 text-center">
            Page {currentPage + 1} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((current) => Math.min(totalPages - 1, current + 1))}
            disabled={currentPage >= totalPages - 1}
          >
            Next
            <ChevronRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
