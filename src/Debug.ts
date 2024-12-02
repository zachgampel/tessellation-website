export class Debug {
    enabled: boolean;
    name: string;
    debugElement: HTMLElement | null;
    elements: any;

    constructor(debugElement: string, settings: any, enabled: boolean) {
        this.enabled = enabled;
        this.name = debugElement;
        this.debugElement = document.getElementById(debugElement);
        this.elements = settings;
        this.initialize();

        if(!this.debugElement) {
            console.error('Failed to get debugElement');
        }
    }
    initialize() {
        if (this.enabled === false) {
            return;
        }
        let innerHTML = '';
        for (const key in this.elements) {
            const element_id = `${this.name}_${key}`;
            innerHTML += `<p id=${element_id}>${key}</p>`;
        }
        if (this.debugElement) {
            this.debugElement.innerHTML = innerHTML;
        }
    }

    update() {
        if (this.enabled === false) {
            return;
        }
        for (const key in this.elements) {
            const element = document.getElementById(`${this.name}_${key}`);
            if (element) {
                element.innerHTML = `${key}: ${this.elements[key]}`;
            }
        }
    }

    updatePointer(key: string, value: any) {
        if (this.enabled === false) return;
        this.elements[key] = value;
    }
}