import Swal from "sweetalert2";

export class ErrorAlert{
    constructor(message:string){
        Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
           color: 'white',
            background: '#ff000038',
            timer: 3000,
            icon: 'error',
            title: message,
          
          })
    }
}