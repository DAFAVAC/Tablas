class Heroe {
    constructor(id, nombre, apellido) {
        //propiedades
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = "";
        //Métodos
        this.toString = toString;
        function toString() {
            return "Id:" + this.id + " ,Nombre: " + this.nombre + " " + this.apellido;
        }
    }
}

