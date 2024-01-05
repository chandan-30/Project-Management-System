import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from '../components';

describe('Sidebar Component', () => {
  test('renders sidebar with user name and links', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    // Assert that user name is rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument(); // Change 'John Doe' to your expected user name

    // Assert that dashboard link is rendered
    expect(screen.getByText('Dashboard')).toBeInTheDocument();

    // Assert that all users link is rendered
    expect(screen.getByText('All Users')).toBeInTheDocument();

    // Assert that logout link is rendered
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

});