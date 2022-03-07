function getCurrentDate(separator=' de '){

    let today = new Date()
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let dayNumber = today.getDay();
    let day = '';
    const meses = ['Enero', 
                    'Febrero', 
                    'Marzo', 
                    'Abril', 
                    'Mayo', 
                    'Junio', 
                    'Julio', 
                    'Agosto', 
                    'Septiembre', 
                    'Octubre', 
                    'Noviembre', 
                    'Diciembre'];

    switch (dayNumber) {
        case 0:
            day = 'Domingo';
            break;
        case 1:
            day = 'Lunes';
            break;
        case 2:
            day = 'Martes';
            break;
        case 3:
            day = 'Miercoles';
            break;
        case 4:
            day = 'Jueves';
            break;
        case 5:
            day = 'Viernes';
            break;
        default:
            day = 'Sabado';
            break;
    }

    const datePrint = `${day}, ${date}${separator}${meses[month - 1]}`;

    return datePrint;
}

export default getCurrentDate;