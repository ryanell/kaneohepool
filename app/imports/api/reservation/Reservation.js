import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Reservations = new Mongo.Collection('Reservations');

/** Define a schema to specify the structure of each document in the collection. */
const ReservationSchema = new SimpleSchema({
  Date: Date,
  Time: Number,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Reservations.attachSchema(ReservationSchema);

/** Make the collection and schema available to other code. */
export { Reservations, ReservationSchema };
