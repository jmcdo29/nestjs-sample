import * as mongoose from 'mongoose';
import { IsObjectIdPipe } from './object-id.pipe';

describe('IsObjectIdPipe', () => {
  let isObjectId;

  beforeEach(() => {
    isObjectId = new IsObjectIdPipe();
  });

  it('should be defined', () => {
    expect(isObjectId).toBeDefined();
  });

  it('if valid', () => {
    const validId = new mongoose.Types.ObjectId().toHexString();
    const result = isObjectId.transform(validId, {} as any);
    expect(result).toEqual(validId);
  });

  it('if invalid', () => {
    try {
      const result = isObjectId.transform('anerror', {} as any);
    } catch (e) {
      expect(e).not.toBeNull();
    }
  });
});
