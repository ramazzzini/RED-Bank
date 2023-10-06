const SITE_NAME = 'RED BANK - Vanilla JS'

export const getTitle = (title) => {
    return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}