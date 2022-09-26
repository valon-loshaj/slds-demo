import { LightningElement } from 'lwc';
export default class fieldInputCustom extends LightningElement {
    displayText = '';

    handleInputFocus(event) {
        // modify parent to properly highlight visually
        const classList = event.target.parentNode.classList;
        classList.add('lgc-highlight');
    }

    handleInputBlur(event) {
        // modify parent to properly remove highlight
        const classList = event.target.parentNode.classList;
        classList.remove('lgc-highlight');
    }

    handleInputChange(event) {
        console.log('The text has been updated. Display Text: ');
        this.displayText = event.target.value;
        return this.displayText;
    }
}