export default class ChildComponent {
    /**
     * render the child component content
     * @returns {HTMLElement}
     */

    render() {
        throw new Error('Render method must be implemented in the child class')
    }
}