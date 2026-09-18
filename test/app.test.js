import test from "node:test";
import assert from "node:assert/strict";
import { I18N } from "../js/i18n.js";
import { SCENARIOS } from "../js/scenarios.js";
import { resolveLanguage, getInitialLanguage } from "../js/language.js";
import { parseStrongTokens } from "../js/dom-utils.js";

test("Language Logic: resolveLanguage behavior matrix", () => {
  assert.equal(resolveLanguage("en", ["zh-HK"]), "en");
  assert.equal(resolveLanguage("zh-HK", ["en-US"]), "zh-HK");
  assert.equal(resolveLanguage(null, ["en-US", "zh-HK"]), "en");
  assert.equal(resolveLanguage(null, ["zh-TW", "en"]), "zh-HK");
  assert.equal(resolveLanguage("invalid-value", ["en-GB"]), "en");
  assert.equal(resolveLanguage(null, ["tl-PH", "id-ID", "ja"]), "zh-HK");
  assert.equal(resolveLanguage(null, []), "zh-HK");
});

test("Language Storage: getInitialLanguage handles errors and fallbacks", () => {
  const mockStorage = {
    getItem: (key) => (key === "railpeace_lang" ? "en" : null)
  };
  assert.equal(getInitialLanguage(mockStorage, { languages: ["zh-HK"] }), "en");

  const brokenStorage = {
    getItem: () => { throw new Error("SecurityError: Access Denied"); }
  };
  assert.equal(getInitialLanguage(brokenStorage, { languages: ["zh-HK"] }), "zh-HK");
  assert.equal(getInitialLanguage(null, null), "zh-HK");
});

test("DOM Utils: parseStrongTokens handles types rigorously", () => {
  const result = parseStrongTokens("{strong}切勿對罵{/strong} 請保持安靜。");
  assert.deepEqual(result, [
    { type: "strong", text: "切勿對罵" },
    { type: "text", text: " 請保持安靜。" }
  ]);

  assert.deepEqual(parseStrongTokens(""), []);
  assert.deepEqual(parseStrongTokens(null), []);
  assert.deepEqual(parseStrongTokens(undefined), []);
  assert.deepEqual(parseStrongTokens(123), []);
  assert.deepEqual(parseStrongTokens({}), []);
  assert.deepEqual(parseStrongTokens("純文字內容"), [{ type: "text", text: "純文字內容" }]);
});

test("I18N Integrity: dictionaries must match and tokens must be valid", () => {
  const zhKeys = Object.keys(I18N["zh-HK"]).sort();
  const enKeys = Object.keys(I18N["en"]).sort();
  assert.deepEqual(zhKeys, enKeys, "Language dictionary keys must match exactly");

  ["zh-HK", "en"].forEach(lang => {
    const text = I18N[lang].exitText;
    assert.ok(text.includes("{strong}") && text.includes("{/strong}"), "Must contain strong tokens");
  });
});

test("Scenarios Schema: Rigorous validation for ADR principles and 15-char limit", () => {
  const CORE_PRIORITY_THRESHOLD = 3;
  const MIN_CORE_SCENARIOS = 3;

  ["zh-HK", "en"].forEach((lang) => {
    const items = SCENARIOS[lang];
    assert.ok(Array.isArray(items), `${lang} scenarios must be an array`);

    const coreItems = items.filter(
      i => typeof i.priority === "number" && i.priority <= CORE_PRIORITY_THRESHOLD
    );
    assert.ok(
      coreItems.length >= MIN_CORE_SCENARIOS,
      `Must have at least ${MIN_CORE_SCENARIOS} core scenarios, got ${coreItems.length}`
    );

    items.forEach(item => {
      assert.ok(item.id, `Scenario missing id: ${JSON.stringify(item)}`);
      assert.ok(item.tag, `Scenario missing tag: ${item.id}`);
      assert.ok(item.silentOption, `Scenario missing silentOption: ${item.id}`);
      assert.ok(item.exitRule, `Scenario missing exitRule: ${item.id}`);
      assert.ok(Array.isArray(item.abortConditions), `Scenario missing abortConditions: ${item.id}`);

      const normalizedRisk = (item.riskLevel || "").toUpperCase();
      assert.ok(
        ["LOW", "MEDIUM", "HIGH"].includes(normalizedRisk),
        `Invalid riskLevel: ${item.riskLevel}`
      );
      
      assert.equal(typeof item.priority, "number", `Scenario ${item.id} priority must be a number`);
      assert.equal(typeof item.maxAttempts, "number", `Scenario ${item.id} maxAttempts must be a number`);

      // 嚴格驗證：中文主話術在保留「唔好意思」之餘，字數限制在 15 字以內
      if (lang === "zh-HK" && item.primaryScript) {
        const cleanScript = item.primaryScript.replace(/[「」]/g, "");
        assert.ok(
          cleanScript.length <= 15,
          `Script for ${item.id} exceeds 15 chars: "${cleanScript}" (${cleanScript.length} chars)`
        );
      }
    });
  });
});
