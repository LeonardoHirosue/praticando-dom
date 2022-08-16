class App {
    addProperty() {
        event.preventDefault();
        let propertyType = document.querySelector("select").value;
        let propertyArea = document.querySelector("input[name='area']").value;
        let isRented = document.querySelector("input[name='is-rented']").checked;

        let property = new Property(propertyType, propertyArea, isRented);

        this.addOnPropertyList(property)
        this.clearForm();
    }

    addOnPropertyList(property){
        let newItemList = document.createElement("li");
        let propertyInfo = ` Tipo: ${property.type}, (Área: ${property.area} m²) `;
        
        if(property.isRented){
            let rentedMark = this.createRentedMark();
            newItemList.append(rentedMark);
        };

        newItemList.innerHTML += propertyInfo;

        let removeButton = this.createRemoveButton();
        newItemList.append(removeButton);
        document.getElementById("property-list").appendChild(newItemList);
    }

    createRentedMark(){
        let rentedMark= document.createElement("span");
        rentedMark.style.backgroundColor = "red";
        rentedMark.style.color = "white";
        rentedMark.innerText = "ALUGADO";
        return rentedMark;
    }

    createRemoveButton(){
        let removeButton = document.createElement("button");
        removeButton.setAttribute("onclick", "app.removeProperty()");
        removeButton.innerText = "Remover";
        return removeButton;
    }

    clearForm(){
        document.querySelector("input[name='area']").value = "";
        document.querySelector("input[name='is-rented']").checked = false;
    }

    removeProperty() {
        event.target.parentNode.remove();
    }
}