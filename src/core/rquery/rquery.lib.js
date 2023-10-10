/**
 *  Represents the RQuery class for working with DOM elements
 */
class RQuery {
    /**
     * Create a new RQuery instance
     * @param {string|HTMLElement } selector 
     */
    constructor(selector) {
        if(typeof selector === 'string'){
            this.element = document.querySelector(selector)

            if (!this.element){
                throw new Error(`Element ${selector} not found!`)
            }
        } else if(selector instanceof HTMLElement) {
            this.element = selector
        } else {
            throw new Error('Invalid selector type')
        }
    }

    /**
     * Find the first element that matches the specified selector within the selected element
     * @param {string} selector - a CSS selector string to search for within the selected element
     * @returns {RQuery} - a new RQuery inastance of the found element
     */
    find(selector) {
        const element = new RQuery(this.element.querySelector(selector))
        if (element) {
            return element
        } else {
            throw new Error(`Element ${selector} not found!`)
        }
    }

    /**
     * Set the CSS style of the selected element
     * @param {string} property - the CSS property to set
     * @param {string} value - the value to set for the CSS property
     * @returns {RQuery} - a current RQuery inastance for chaining
     */
    css(property, value) {
        if (typeof property !== 'string' || typeof value !== 'string') {
            throw new Error ('property and value must be strings')
        }

        this.element.style[property] = value
        return this
    }
}

/**
 * Create a new RQuery instance for the given selector
 * @param {string|HTMLElement } selector
 * @returns {RQuery}
 */
export function $R(selector) {
    return new RQuery(selector)
}

