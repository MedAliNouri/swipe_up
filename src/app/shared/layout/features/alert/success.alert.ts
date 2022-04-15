import Swal from "sweetalert2";

export class SuccessAlert{
    constructor(message:string){
        Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
           color: 'white',
            background: '#00ff6638',
            timer: 3000,
            icon: 'success',
            title: message,
          
          })
    }
}