import React from 'react';
import { render } from '@testing-library/react';
import UserWidget from './UserWidget';
import { mockUserData } from '../../services/mockData';

describe('UserWidget', () => {
  it('renders user data correctly', () => {
    const { getByText } = render(<UserWidget userData={mockUserData} />);

    expect(getByText(mockUserData.name)).toBeInTheDocument();
    expect(getByText(mockUserData.email)).toBeInTheDocument();
  });
});