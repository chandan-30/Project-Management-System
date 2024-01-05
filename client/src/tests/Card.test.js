import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import { Card } from '../components';

describe('Card Component', () => {
  const mockTask = {
    _id: '1',
    Title: 'Sample Task',
    Description: 'This is a sample task description.',
    AssignedTo: 'John Doe',
    Deadline: '2022-01-31',
    Priority: 'high',
    Status: 'In Progress',
  };

  test('renders card with task details', () => {
    render(<Card task={mockTask} />);
    
    // Assert that task details are rendered
    expect(screen.getByText('Sample Task')).toBeInTheDocument();
    expect(screen.getByText('This is a sample task description.')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Deadline :: 2022-01-31')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
  });

});