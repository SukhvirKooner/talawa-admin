import React from 'react';
import { TableBody, TableCell, TableRow, Table } from '@mui/material';
import { EVENT_DETAILS } from 'GraphQl/Queries/Queries';
import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { formatDate } from 'utils/dateFormatter';
import DateIcon from 'assets/svgs/cardItemDate.svg?react';
import styles from '../../../style/app.module.css';
interface InterfaceEventsAttended {
  eventId: string;
}
/**
 * Component to display a list of events attended by a member
 * @param eventId - The ID of the event to display details for
 * @returns A table row containing event details with a link to the event
 */
const AttendedEventList: React.FC<InterfaceEventsAttended> = ({ eventId }) => {
  const { orgId: currentOrg } = useParams();
  const { data, loading, error } = useQuery(EVENT_DETAILS, {
    variables: { id: eventId },
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  });

  if (error || data?.error) {
    return <p>Error loading event details. Please try again later.</p>;
  }

  const event = data?.event ?? null;

  if (loading) return <p>Loading...</p>;
  return (
    <React.Fragment>
      <Table
        className={`${styles['bg-primary']}`}
        aria-label="Attended events list"
      >
        <TableBody className={`${styles['bg-primary']}`}>
          {event && (
            <TableRow
              key={event._id}
              className={`${styles['bg-white']} ${styles['rounded']}`}
              role="row"
              aria-label={`Event: ${event.title}`}
            >
              <TableCell>
                <Link
                  to={`/event/${currentOrg}/${event._id}`}
                  className={`${styles['d-flex']} ${styles['justify-items-center']} ${styles['align-items-center']}`}
                  style={{ color: 'blue', textDecoration: 'none' }}
                >
                  <DateIcon
                    title="Event Date"
                    fill="var(--bs-gray-600)"
                    width={25}
                    height={25}
                    className={`${styles['mx-2']} ${styles['rounded-full']}`}
                  />
                  <div>
                    <div>{event.title}</div>
                    <div>{formatDate(event.startDate)}</div>
                  </div>
                </Link>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};
export default AttendedEventList;
