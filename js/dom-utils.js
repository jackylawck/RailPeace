/**
 * 解析 {strong} 標籤字串為結構化 Token 陣列
 * @param {string} rawText 
 * @returns {Array<{type: 'strong' | 'text', text: string}>}
 */
export function parseStrongTokens(rawText) {
  if (typeof rawText !== "string" || !rawText) {
    return [];
  }
  const parts = rawText.split(/(\{strong\}.*?\{\/strong\})/g);
  return parts
    .filter(Boolean)
    .map(part => {
      const match = part.match(/^\{strong\}(.*)\{\/strong\}$/);
      if (match) {
        return { type: "strong", text: match[1] };
      }
      return { type: "text", text: part };
    });
}
