const e1=()=>{
    Swal.fire('YA RETIRATE PORFA')
}

const e2=()=>{
    Swal.fire(
        'TIENES VIDA?',
        'ENSRIO QUE SI??',
        'UNA PREGUNTA'
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
          '<i class="NO LA VERDAD NO TROCAS"></i> SIEMPRE YA NO!',
        confirmButtonAriaLabel: 'USH NO, QUE BURRO ERES!',
        cancelButtonText:
          '<i class="BUENO TE DOY UNA OPORTUNIDAD"></i>',
        cancelButtonAriaLabel: 'TU PUEDES BURRIS'
      })
    }

const e5=()=>{
    Swal.fire({
        title: 'TU TIENES ALGUNA RELACION?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'CLARO',
        denyButtonText: `LA VERDAD NO`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('CALLATE!', '', 'NO PREGUNTES MEJOR')
        } else if (result.isDenied) {
          Swal.fire('PREFIERO NO CONTESTAR', '', 'VETE')
        }
      })
}