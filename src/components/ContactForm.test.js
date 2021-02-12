import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils';

test("renders component", () => {
    render(<ContactForm />);
})

test("form fills out and submits", async () => {
    //Arrange
    act(() => {
        render(<ContactForm />);
    });

    //Act
    const firstNameInput = screen.getByLabelText(/first/i);
    const lastNameInput = screen.getByLabelText(/last/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button');

    userEvent.type(firstNameInput, "James") //removed max limit of 3 chars and added id
    userEvent.type(lastNameInput, "White")
    userEvent.type(emailInput, "test@mail.com") //changed id to email
    userEvent.type(messageInput, "test message")

    userEvent.click(submitButton);

    //Assert
    const newItem = await screen.findByTestId('item'); //added a test id to pre
    expect(newItem).toBeInTheDocument();
})