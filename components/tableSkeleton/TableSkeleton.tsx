import React, { FC } from 'react';
import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
} from '@mui/material';

type Props = {};

const TableSkeleton: FC = (props: Props) => {
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
            <TableCell>
              <Skeleton variant="rounded" min-width={210} height={60} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableSkeleton;
