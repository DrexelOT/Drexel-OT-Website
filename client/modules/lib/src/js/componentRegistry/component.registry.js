import ko from 'knockout';

class ComponentRegistry {
    constructor() {
        this.components = [];
    }

    addComponent(component) {
        ko.components.register(component.name, {
            viewModel: component.viewModel,
            template: component.template
        })
    }

    removeComponent() {
        this.components.forEach((component => {
            component.unregister();
        }));
    }
}

// Singleton Instance of ComponentRegistry 
export default new ComponentRegistry();