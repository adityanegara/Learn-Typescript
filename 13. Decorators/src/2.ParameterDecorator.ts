interface ComponentOptions {
    selector: string,
}

function Component(options: ComponentOptions) {
    return (constructor: Function) => {
        console.log('Component decorator called');
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting component in the DOM')
        }
    }

}

@Component({ selector: '#nav-button' })
class ProfileComponent {

}