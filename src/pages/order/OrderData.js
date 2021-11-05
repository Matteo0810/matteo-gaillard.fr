class OrderData {

    constructor(type, customer, orderStep) {
        if(!customer instanceof Customer)
            return console.error('This is not a customer...')
        this.type = type
        this.customer = customer
        this.orderStep = orderStep
        this.maxStep = 4
    }

    getType() {
        return this.type
    }

    getCustomer() {
        return this.customer
    }

    getStep() {
        return this.orderStep
    }

    nextStep() {
        if(this.orderStep < this.maxStep)
            this.orderStep++
        return this
    }

    previousStep() {
        if(this.orderStep > 1)
            this.orderStep--
        return this
    }

    getMaxStep() {
        return this.maxStep
    }

    isMaxStep() {
        return this.maxStep === this.orderStep
    }

    toJSONData() {
        return {
            type: this.type,
            customer: this.customer.toJSONData(),
            order_step: this.orderStep
        } 
    }
    
}

class Customer {

    constructor(name, surname, siret) {
        this.name = name
        this.surname = surname
        this.siret = siret
    }

    getSiret() {
        if(this.isSiret())
            return this.siret
        return false
    }

    isSiret() {
        const siret = this.siret.split().join()
        return (siret.match(/^[0-9]+$/g) && siret.math(/^[0-9]{0,14}$/g))
    }

    getName() {
        return this.name
    }

    getSurname() {
        return this.surname
    }

    toJSONData() {
        return {
            name: this.name,
            surname: this.surname,
            siret: this.siret
        }
    }

}

const WebsiteTypes = {
    COMPLETE_WEBSITE: "Site complet",
    SHOWCASE_WEBSITE: "Site vitrine"
}

const Steps = {
    BEGINNING: 1,

}

export { WebsiteTypes, Steps, OrderData, Customer }