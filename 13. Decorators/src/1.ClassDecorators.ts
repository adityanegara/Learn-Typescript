function Component(constructor: Function) {
    console.log('Component decorator called');
    console.log('testing');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting component in the DOM')
    }
}

@Component
class ProfileComponent {

}

export { }