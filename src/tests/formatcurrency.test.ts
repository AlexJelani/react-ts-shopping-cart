import { formatCurrency } from '../utilities/formatCurrency';

import {describe, expect, it} from "vitest"


describe('formatCurrency', () => {
  it('formats a positive number correctly', () => {
    expect(formatCurrency(100)).toEqual('$100.00');
  });

  it('formats a negative number correctly', () => {
    expect(formatCurrency(-50)).toEqual('-$50.00');
  });

  it('formats zero correctly', () => {
    expect(formatCurrency(0)).toEqual('$0.00');
  });

  it('returns an empty string when given undefined', () => {
    expect(formatCurrency(undefined)).toEqual('');
  });

  it('returns an empty string when given null', () => {
    expect(formatCurrency(undefined)).toEqual('');
  });

  it('returns an empty string when given a non-numeric value', () => {
    expect(formatCurrency('invalid' as any)).toEqual('');
  });
});
