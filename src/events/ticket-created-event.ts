import { Subjects } from './subjects';

// this is how the data should look like whenever fetched from the 
// TicketCreated('ticket:created') message/channel/event
export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
  };
};