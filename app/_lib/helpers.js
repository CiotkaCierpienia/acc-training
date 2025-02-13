/**
 * Get page absolute URL based on path
 * @param {string} path - page path
 * @param {boolean} trailingSlash - if page should have trailing slash at the end
 * @returns {string} page absolute URL
 */
export function getAbsoluteUrl(path, trailingSlash = true) {
    const baseURL =
        `${(process.env.PUBLIC_URL || 'http://localhost:3001').replace(/\/+$/, '')}${trailingSlash ? '/' : ''}`;
    if (!path) return baseURL;
    return `${baseURL.replace(/\/+$/, '')}/${path.replace(/^\/*/, '')}${trailingSlash ? '/' : ''}`;
}

export function getTranslatedField(
    object,
    field,
    lang,
) {
    const translation =
        object?.__translations?.find((translation) => translation?.__language === lang);
    return translation?.[field] || object?.[field];
}
