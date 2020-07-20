import React from 'react';
import { create } from 'react-test-renderer';
import AboutStatus from '../components/TimelinePage/About/AboutStatus/AboutStatus';

describe('AboutStatus component', () => {
  test('status from props should be in the local state', () => {
    const component = create(<AboutStatus status="Hi" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('Hi');
  });
  test('after creation span should be displayed', () => {
    const component = create(<AboutStatus status="Hi" />);
    const testInstance = component.root;
    const p = testInstance.findByType('p');
    expect(p).not.toBeNull();
  });
  test('after creation input shouldnt be displayed', () => {
    const component = create(<AboutStatus status="Hi" />);
    const testInstance = component.root;
    expect(() => {
      const input = testInstance.findByType('input');
    }).toThrow('No instances found with node type: "undefined"');
  });
  test('after creation span should be displayed', () => {
    const component = create(<AboutStatus status="Hi" />);
    const testInstance = component.root;
    const p = testInstance.findByProps({ className: 'text' }).children;
    expect(p).toEqual(['Hi']);
  });
  test('callback should be called', () => {
    const mockCallback = jest.fn();
    const component = create(<AboutStatus status="Hi" updateStatus={mockCallback} getStatus={mockCallback}/>);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(2);
  });
});
