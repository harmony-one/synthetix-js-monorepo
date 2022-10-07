import { wei } from '@synthetixio/wei';
import { calculateStakedSnx, calculateUnstakedStakedSnx } from './stakingCalculations';
describe('stakingCalculation', () => {
  describe('calculateStakedSnx', () => {
    test('returns zero when no data', () => {
      expect(calculateStakedSnx({})).toEqual(wei(0));
    });
    test('when c-ratio: 0% and target-c-ratio: 400%', () => {
      expect(
        calculateStakedSnx({
          targetCRatio: wei(100 / 400),
          currentCRatio: wei(0),
          collateral: wei(100),
        })
      ).toEqual(wei(0));
    });
    test('when c-ratio: 800% and target-c-ratio: 400%', () => {
      expect(
        calculateStakedSnx({
          targetCRatio: wei(100 / 400),
          currentCRatio: wei(100 / 800),
          collateral: wei(100),
        })
      ).toEqual(wei(50));
    });
    test('when c-ratio: 400% and target-c-ratio: 400%', () => {
      expect(
        calculateStakedSnx({
          targetCRatio: wei(100 / 400),
          currentCRatio: wei(100 / 400),
          collateral: wei(100),
        })
      ).toEqual(wei(100));
    });
    test('when c-ratio: 200% and target-c-ratio: 400%', () => {
      expect(
        calculateStakedSnx({
          targetCRatio: wei(100 / 400),
          currentCRatio: wei(100 / 200),
          collateral: wei(100),
        })
      ).toEqual(wei(100));
    });
  });
  describe('calculateUnStakedSnx', () => {
    test('returns zero when no data', () => {
      expect(calculateStakedSnx({})).toEqual(wei(0));
    });
    test('when c-ratio: 0% and target-c-ratio: 400%', () => {
      expect(
        calculateUnstakedStakedSnx({
          targetCRatio: wei(100 / 400),
          currentCRatio: wei(0),
          collateral: wei(100),
        })
      ).toEqual(wei(100));
    });
    test('when c-ratio: 800% and target-c-ratio: 400%', () => {
      expect(
        calculateUnstakedStakedSnx({
          targetCRatio: wei(100 / 400),
          currentCRatio: wei(100 / 800),
          collateral: wei(100),
        })
      ).toEqual(wei(50));
    });
    test('when c-ratio: 400% and target-c-ratio: 400%', () => {
      expect(
        calculateUnstakedStakedSnx({
          targetCRatio: wei(100 / 400),
          currentCRatio: wei(100 / 400),
          collateral: wei(100),
        })
      ).toEqual(wei(0));
    });
    test('when c-ratio: 200% and target-c-ratio: 400%', () => {
      expect(
        calculateUnstakedStakedSnx({
          targetCRatio: wei(100 / 400),
          currentCRatio: wei(100 / 200),
          collateral: wei(100),
        })
      ).toEqual(wei(0));
    });
  });
});