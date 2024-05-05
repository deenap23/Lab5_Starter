// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber
test('7 digit phone number', () => {
  expect(isPhoneNumber("408-4421")).toBe(true);
});
test('10 digit phone number', () => {
  expect(isPhoneNumber("408-442-1234")).toBe(true);
});
test('3 digit invalid phone number', () => {
  expect(isPhoneNumber("408")).toBe(false);
});
test('improper format invalid phone number', () => {
  expect(isPhoneNumber("4084416142")).toBe(false);
});
// isEmail
test('short valid email', () => {
  expect(isEmail("deena@gmail.com")).toBe(true);
});
test('long complicated valid email', () => {
  expect(isEmail("deenapedersonilovecoding123@gmail.com")).toBe(true);
});
test('improper email format', () => {
  expect(isEmail("deena@gmail")).toBe(false);
});
test('improper email format 2', () => {
  expect(isEmail("deena.gmail.com")).toBe(false);
});
// isStrongPassword
test('long letters only password', () => {
  expect(isStrongPassword("deenapederson")).toBe(true);
});
test('letters only email', () => {
  expect(isStrongPassword("ilikedogs_23")).toBe(true);
});
test('too short email invalid', () => {
  expect(isStrongPassword("red")).toBe(false);
});
test('non letter first character', () => {
  expect(isStrongPassword("1_hate_red")).toBe(false);
});
// isDate
test('test valid date with single char day/month', () => {
  expect(isDate("1/1/2011")).toBe(true);
});
test('test valid date with double char day/month', () => {
  expect(isDate("10/10/2011")).toBe(true);
});
test('test invalid date with double char year', () => {
  expect(isDate("10/10/24")).toBe(false);
});
test('test invalid date format', () => {
  expect(isDate("10-10-2011")).toBe(false);
});
// isHexColor
test('6 char hex color', () => {
  expect(isHexColor("#2f2f11")).toBe(true);
});
test('3 char hex color', () => {
  expect(isHexColor("333")).toBe(true);
});
test('invalid 8 char hex code', () => {
  expect(isHexColor("#22221111")).toBe(false);
});
test('wrong format invalid character', () => {
  expect(isHexColor("-222211")).toBe(false);
});