import CustomValidator from '@/pages/step20/components/customValidator.js';

describe('CustomValidator', () => {
  describe('pattern', () => {
    it('should check a value against a pattern', () => {
      expect(CustomValidator.pattern(/[aoeui]/)('a')).toBe(true);
      expect(CustomValidator.pattern(/[aoeui]/)('x')).toBe(false);
    });
  });

  describe('sfeirmail', () => {
    it('should check an email against the sfeirmail pattern', () => {
      expect(CustomValidator.sfeirmail()('doeuf.j@sfeir.com')).toBe(true);
      expect(CustomValidator.sfeirmail()('doeuf.j@google.com')).toBe(false);
    })
  })
});