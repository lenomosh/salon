import * as React from "react";
import { List, Datagrid, TextField, EmailField,DateField } from 'react-admin';

export const BookingList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <DateField source="date" />
        </Datagrid>
    </List>
);