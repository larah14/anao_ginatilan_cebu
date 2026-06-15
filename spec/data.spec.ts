import { translations, officials, sitios, faqItems } from '../src/data';

describe('Barangay Anao Data & Translations', () => {
  it('should have valid translation languages (en and ceb)', () => {
    expect(translations.en).toBeDefined();
    expect(translations.ceb).toBeDefined();
  });

  it('should have matching translation keys for English and Cebuano', () => {
    const enKeys = Object.keys(translations.en).sort();
    const cebKeys = Object.keys(translations.ceb).sort();
    expect(enKeys).toEqual(cebKeys);
  });

  it('should define a list of officials', () => {
    expect(officials).toBeDefined();
    expect(officials.length).toBeGreaterThan(0);
    expect(officials[0].name).toContain('Maria J. Cabañog');
  });

  it('should define four sitios', () => {
    expect(sitios).toBeDefined();
    expect(sitios.length).toBe(4);
    expect(sitios.map(s => s.name)).toContain('Sitio Balani');
  });

  it('should have FAQ items', () => {
    expect(faqItems).toBeDefined();
    expect(faqItems.length).toBeGreaterThan(0);
  });
});
