export function getCategory() {
    return window.location.hash.substr(1);
}

export function baseImage(src, alt, title) {
    return { src, alt, title }
}

export function genImage({ src, alt, title }) {
    return `<img class="static_content-image" src="${src}" alt="${alt}" title="${title}">`
}