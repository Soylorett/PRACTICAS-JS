const e1=()=>{
    Swal.fire('Any fool can use a computer')
}

const e2=()=>{
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
}

const e3=()=>{
    Swal.fire({
        icon: 'ERRORIS',
        title: 'Todo mal..',
        text: 'Ya date de baja',
        footer: '<a href="">¿estas menso?</a>'
      })
}
const e4=()=>{
    Swal.fire({
        title: '<strong>VE MIS <u>EJEMPLILLO</u></strong>',
        icon: 'CONSULTA AQUI',
        html:
          'TU PUEDES USAR MI CODIGO CON <b>CODIGO</b>, ' +
          '<a href="https://github.com/Soylorett/PRACTICAS-JS.git">linki</a> ' +
          'TU PUEDES',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    }

const e5=()=>{
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
}