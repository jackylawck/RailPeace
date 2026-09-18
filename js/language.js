export function resolveLanguage(saved, langs = []) {
  if (saved === "en" || saved === "zh-HK") {
    return saved;
  }

  const list = Array.isArray(langs) ? langs : [langs];
  for (const lang of list) {
    const lower = (lang || "").toLowerCase();
    if (lower.startsWith("en")) return "en";
    if (lower.startsWith("zh")) return "zh-HK";
  }

  return "zh-HK";
}

export function getInitialLanguage(storage, navigatorObj) {
  let saved = null;
  try {
    if (storage && typeof storage.getItem === "function") {
      saved = storage.getItem("railpeace_lang");
    }
  } catch {}

  const langs = (navigatorObj && (navigatorObj.languages || [navigatorObj.language])) || [];
  return resolveLanguage(saved, langs);
}
