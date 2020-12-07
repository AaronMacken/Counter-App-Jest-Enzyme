import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Look at the multi line comment! This syntax lets you do cool documentation stuff
/** Factory function that creates a shallow wrapper for the App component
  * @function setup
  * @returns {ShallowWrapper}
*/ 
const setup = () => shallow(<App />);

const findByTest = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("Renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTest(wrapper, 'componentApp');
  expect(appComponent.length).toBe(1);
});

test("Renders an increment button", () => {
  const wrapper = setup();
  const button = wrapper.find('.increment');

  expect(button.length).toBe(1);
});

test("Renders a decrement button", () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find('.decrement');
  expect(button.length).toBe(1);
});

test("Renders a counter display", () => {
  const wrapper = setup();
  const display = findByTest(wrapper, 'counterDisplay');
  expect(display.length).toBe(1);
});

test("Renders an h1", () => {
  const wrapper = setup();
  const header = wrapper.find('h1');
  expect(header.text()).toBe('Learn Jest & Enzyme!')
});

test("Counter starts at 0", () => {
  const wrapper = setup();
  const count = wrapper.find('span');

  expect(count.text()).toBe("0");
});

test("Clicking on the increment button increments counter display", () => {
  const wrapper = setup();
  // find button
  const button = wrapper.find('.increment');

  // click button
  button.simulate('click');

  // find the display & test that number matches
  const count = wrapper.find('span');
  expect(count.text()).toBe("1");
});

test("Clicking on the decrement button will decrement the counter display", () => {
  const wrapper = shallow(<App />);
  const incrementButton = wrapper.find(".increment");
  incrementButton.simulate('click');

  const decrementButton = wrapper.find('.decrement');
  decrementButton.simulate('click');
  
  const count = wrapper.find("span");
  expect(count.text()).toBe("0");
});

test("Clicking on the decrement button while the count is 0 will display an error message", () => {
  const wrapper = shallow(<App />);
  const decrementButton = wrapper.find(".decrement");
  
  decrementButton.simulate('click');

  expect(wrapper.find('p').length).toBe(1);
});

