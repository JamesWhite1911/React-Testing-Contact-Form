import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './components/ContactForm'

test("renders", () => {
    render(<ContactForm />)
})

test("form fills out and submits", () => {
    render(<ContactForm />)

    const firstNameInput = screen.getByLabelText(/firstname/i);
    const lastNameInput = screen.getByLabelText(/lastname/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit query/i });

    userEvent.type(firstNameInput, "James")
    userEvent.type(lastNameInput, "White")
    userEvent.type(emailInput, "test@mail.com")
    userEvent.type(messageInput, "test message")
    userEvent.click(submitButton);
})